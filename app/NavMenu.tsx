import Link from 'next/link'
import Image from 'next/image'
import styles from './NavMenu.module.css'

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Image src="logo.svg" alt='NextSpace Logo' width={216} height={30} />
            <a>Test</a>
        </nav>
    )
}