import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  if (email) {
    try {
      const user = await prisma.user.findUnique({ where: { email: email } });
      if (user) {
        return NextResponse.json(user.id);
      } else {
        return NextResponse.json(null);
      }
    } catch (error) {
      return new NextResponse("서버 에러", { status: 500 });
    }
  }
};
