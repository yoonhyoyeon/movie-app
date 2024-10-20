"use client";

import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

 export default function Movie({id, poster_path, title}) {
    const router = useRouter();
    const onClickImg = () => {
        router.push(`/movies/${id}`);
    }

    return (
        <div className={styles.movie}>
            <img onClick={onClickImg} src={poster_path} alt={title} />
            <Link prefetch href={`/movies/${id}`}>{title}</Link>
        </div>
    )
 }