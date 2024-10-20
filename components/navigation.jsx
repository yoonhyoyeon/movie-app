"use client"; //use client를 추가해도 client가 아니라  server에서 렌더링한다.

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';


const Navigation = () => {
    const path = usePathname();
    const [a, setA] = useState(0);
    console.log(path);
    console.log('hi!')
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link>{path==="/" ? "!" : ""}</li>
                <li><Link href="/about-us">About Us</Link>{path==="/about-us" ? "!" : ""}</li>
            </ul>
            <button onClick={() => {setA((prev) => prev + 1)}}>{a}</button>
        </nav>
    )
}

export default Navigation;