import { NextRequest, NextResponse } from 'next/server'

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name') || 'there'
  return NextResponse.json({ message: `Hi, ${name}!` })
}