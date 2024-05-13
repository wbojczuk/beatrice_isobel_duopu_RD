"use client"
import Link from 'next/link';
import styles from './discover.module.css';

export default function Discover(){
return (
<div className={styles.discover}>

    <h3><strong>Dont Wait</strong><br />Discover Our School Today!</h3>

    <div className={styles.buttonWrapper}>
        <Link className='main-link' href='/visit'>Visit</Link>

        <Link className='main-link' href='/contact'>Contact</Link>

        <Link className='main-link' href='/programs'>Programs</Link>
    </div>

    <img src='/img/playground.png' alt='Image of playground' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,.92)"}} className='shader'></div>
</div>
)};