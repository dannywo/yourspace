import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;
    const { targetUserId } = await req.json();

    const currentUserId = await prisma.user
        .findUnique({
            where: {
                email: currentUserEmail,
            },
        })
        .then((user) => user?.id!);

    const record = await prisma.follows.create({
        data: {
            followerId: currentUserId,
            followingId: targetUserId,
        },
    });

    return NextResponse.json(record);
}
