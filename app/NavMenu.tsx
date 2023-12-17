import Link from 'next/link'
import Image from 'next/image'
import styles from './NavMenu.module.css'

export default function NavMenu() {
    return (
        // <nav className={styles.nav}>
        <nav className="flex content-center justify-between bg-cyan-700">
            <Link href={"/"}>

                <Image src="next.svg"
                    alt='NextSpace Logo'
                    width={216}
                    height={30} />
            </Link>

            <ul className=''>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/blog'}>Blog</Link></li>
                <li><Link href={'/users'}>Users</Link></li>
            </ul>
        </nav>
    )
}