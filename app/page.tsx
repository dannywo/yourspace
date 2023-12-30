import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import Image from 'next/image'

export default async function Home() {
  const session = await getServerSession();

  console.log('Current session in home: ', session);

  // if (!session) {
  //   redirect('/api/auth/signin');
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
    </main>
  )
}
