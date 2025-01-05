import { NextRequest, NextResponse } from "next/server";

const shoppingList = [
  {
    name: "shoes",
  },
];

//====> GET
// export function GET() {
//   return NextResponse.json({
//     message: "Hello from Route Backend side",
//   });
// }

export function GET() {
  return NextResponse.json(shoppingList);
}

//====> POST
export async function POST(request: NextRequest) {
  const req = await request.json(); //==> In Data
  shoppingList.push(req);
  console.log("Req from client => :", req);
  return NextResponse.json({ req }); //==> Out Data
}
