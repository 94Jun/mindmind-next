import bcrypt from "bcrypt";
import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();
    const { email, password, name, phone, birth, gender } = body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({ data: { email, hashedPassword, name, phone, birth, gender } });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
