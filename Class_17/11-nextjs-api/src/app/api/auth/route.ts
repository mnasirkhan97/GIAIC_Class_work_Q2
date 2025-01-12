import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

//===============> For user

//===> example email : ali@gmail.com

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   console.log("body => :", body);

//   if (body.email == "ali@gmail.com") {
//     console.log("Yor are login");
//   } else {
//     console.log("Invalid user");
//   }
//   return NextResponse.json({
//     message: "Hello",
//   });
// }

//===============> For Admin & Student
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("body => :", body);

    if (body.email == "daniyal@gmail.com" || body.email == "admin@gmail.com") {
      console.log("Yor are a Admin");
      return NextResponse.json({
        message: "Valid Admin",
        redirectURL: "/admin",
      });
    } else {
      console.log("You are student");
      return NextResponse.json({
        message: "Valid Student",
        redirectURL: "/student",
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Invalid User",
    });
  }
}
