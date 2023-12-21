export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'We are an Unsocial Media Company',
}

export default async function About() {
    return (
        <main>
            <h1>About</h1>
            <p>We are an Unsocial Media Company</p>
        </main>
    )
}