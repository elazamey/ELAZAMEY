import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Message from '@/lib/models/Message';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const message = await Message.create(body);

    return NextResponse.json({ success: true, data: message }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
