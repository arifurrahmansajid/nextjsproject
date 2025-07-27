import { NextResponse } from 'next/server';
import dbConnect, { collectionNameObject } from '@/lib/dbConnect';

export async function GET() {
  const db = await dbConnect('appointments');
  const orders = await db.find({}).sort({ createdAt: -1 }).toArray();
  return NextResponse.json(orders);
}

export async function POST(req) {
  const body = await req.json();
  const db = await dbConnect('appointments');
  const doc = {
    ...body,
    createdAt: new Date(),
  };
  const result = await db.insertOne(doc);
  return NextResponse.json({ success: true, insertedId: result.insertedId.toString() });
}
