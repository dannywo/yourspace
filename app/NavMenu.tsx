import Link from 'next/link'
import Image from 'next/image'
import styles from './NavMenu.module.css'

export default function NavMenu() {
    return (
        // <nav className={styles.nav}>
        <nav className={`border-gray-200 bg-gray-900`}>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href={'/'}>
                    <Image src='next.svg'
                        alt='NextSpace Logo'
                        width={216}
                        height={30}
                        className={styles.filterWhite} />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>


                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700 text-white'>
                        <li className='lock py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-500'>
                            <Link href={'/about'}>About</Link>
                        </li>
                        <li className='block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>
                            <Link href={'/blog'}>Blog</Link>
                        </li>
                        <li className='block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>
                            <Link href={'/users'}>Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}