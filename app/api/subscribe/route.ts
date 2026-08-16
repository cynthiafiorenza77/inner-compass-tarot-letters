import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json')

interface Subscriber {
  email: string
  subscribedAt: string
  source: string
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveSubscribers(subscribers: Subscriber[]) {
  await fs.mkdir(path.dirname(SUBSCRIBERS_FILE), { recursive: true })
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email: string = (body.email || '').trim().toLowerCase()

    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const apiKey = process.env.KIT_API_KEY
    const formId = process.env.KIT_FORM_ID

    // ── Kit (ConvertKit) — Live Integration ─────────────────────────────────
    if (apiKey && formId) {
      const kitRes = await fetch(
        `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: apiKey,
            email,
            tags: ['birth-card-guide', 'tarot-letters'],
          }),
        }
      )

      if (!kitRes.ok) {
        const err = await kitRes.text()
        console.error('Kit error:', err)
        return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 500 })
      }

      // Also save locally as a backup
      const subscribers = await getSubscribers()
      if (!subscribers.find(s => s.email === email)) {
        subscribers.push({ email, subscribedAt: new Date().toISOString(), source: 'birth-card-guide-popup' })
        await saveSubscribers(subscribers)
      }

      return NextResponse.json({ success: true })
    }
    // ────────────────────────────────────────────────────────────────────────

    // Local fallback (no Kit credentials)
    const subscribers = await getSubscribers()
    if (!subscribers.find(s => s.email === email)) {
      subscribers.push({ email, subscribedAt: new Date().toISOString(), source: 'birth-card-guide-popup' })
      await saveSubscribers(subscribers)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}

// GET — view local subscriber backup list
export async function GET() {
  const subscribers = await getSubscribers()
  return NextResponse.json({ count: subscribers.length, subscribers })
}
