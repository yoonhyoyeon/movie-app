"use client"; //use client를 추가해도 client가 아니라  server에서 렌더링한다.

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/navigation.module.css';


const Navigation = () => {
    const path = usePathname();
    console.log(path);
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link>{path==="/" ? "🔥" : ""}</li>
                <li><Link href="/about-us">About Us</Link>{path==="/about-us" ? "🔥" : ""}</li>
            </ul>
        </nav>
    )
}

export default Navigation;