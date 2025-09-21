import {  NextResponse } from "next/server";

interface ContactRequestBody {
    name: string;
    message: string;
    email: string;
}

export async function POST(request: Request) {
  try {

    await request.json() as ContactRequestBody;
    return NextResponse.json({ message: "message sent successfully"}, {status: 200});
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json(
      {
        message: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}
