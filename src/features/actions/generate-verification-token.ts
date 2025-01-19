import { db } from "@/lib/prisma/db";
import { getVerificationTokenByEmail } from "../(auth)/services/verification-token";

export const generateVerificationToken = async (email: string) => {
  const token = generateVerificationCode();
  const expires = new Date(new Date().getTime() + 3 * 60 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};

function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
