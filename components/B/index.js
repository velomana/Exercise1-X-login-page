import Link from 'next/link' 
import styles from './Footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p><Link href="/">About</Link></p>
            <p><Link href="/">Download the X app</Link></p>
            <p><Link href="/">Help Center</Link></p>
            <p><Link href="/">Terms of Service</Link></p>
            <p><Link href="/">Privacy Policy</Link></p>
            <p><Link href="/">Cookie Policy</Link></p>
            <p><Link href="/">Accessibility</Link></p>
            <p><Link href="/">Ads info</Link></p>
            <p><Link href="/">Blog</Link></p>
            <p><Link href="/">Status</Link></p>
            <p><Link href="/">Careers</Link></p>
            <p><Link href="/">Brands Resources</Link></p>
            <p><Link href="/">Advertising</Link></p>
            <p><Link href="/">Marketing</Link></p>
            <p><Link href="/">X for Business</Link></p>
            <p><Link href="/">Developers</Link></p>
            <p><Link href="/">Directory</Link></p>
            <p><Link href="/">Settings</Link></p>
            <p><Link href="/">© 2024 X Corp.</Link></p>
        </footer>
    )
}