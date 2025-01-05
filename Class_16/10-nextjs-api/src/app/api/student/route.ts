import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "Abdullah",
    course: "GenAI",
  });
}
