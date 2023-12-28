import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

// Dummy data
const posts = [
    {
        title: 'Lorem Ipsum',
        slug: 'lorem-ipsum',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
        title: 'Where is Waldito?',
        slug: 'waldo',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
];

export async function GET() {
    const session = getServerSession();

    return NextResponse.json(posts);
}
