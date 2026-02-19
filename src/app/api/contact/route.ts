import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const submission = await db.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
      },
    });

    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}