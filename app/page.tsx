import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import Image from 'next/image'

export default function Home() {
  const session = getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
