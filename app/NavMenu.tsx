import Link from 'next/link'
import Image from 'next/image'
import styles from './NavMenu.module.css'

export default function NavMenu() {
    return (
        // <nav className={styles.nav}>
        <nav className={`bg-white border-gray-200 dark:bg-gray-900`}>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href={'/'}>
                    <Image src='next.svg'
                        alt='NextSpace Logo'
                        width={216}
                        height={30}
                        className={styles.filterWhite} />
                </Link>

                <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white'>
                    <li className='lock py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'><Link href={'/about'}>About</Link></li>
                    <li className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'><Link href={'/blog'}>Blog</Link></li>
                    <li><Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' href={'/users'}>Users</Link></li>
                </ul>
            </div>
        </nav>
    )
}