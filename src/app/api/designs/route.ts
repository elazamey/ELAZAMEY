import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Design from '@/lib/models/Design';

export async function GET() {
  try {
    await dbConnect();

    const designs = await Design.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: designs });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const design = await Design.create(body);

    return NextResponse.json({ success: true, data: design }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
