import { cookies } from 'next/dist/client/components/headers'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = req.cookies.get('token')
  return NextResponse.json(!!token)
}
