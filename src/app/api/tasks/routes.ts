import { connectDB } from "@/lib/mongodb";
import { Task } from "@/models/tasks";

import { NextResponse } from "next/server";

// GET /api/tasks
export async function GET() {
  await connectDB();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}
