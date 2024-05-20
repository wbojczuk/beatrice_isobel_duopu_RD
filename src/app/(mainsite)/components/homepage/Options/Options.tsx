"use client"

import Link from 'next/link';
import styles from './options.module.css';

export default function Options(){
return (
 <div className={styles.options}>
    
    <div className={styles.option}>
        <svg className={styles.mainSvg} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2H5v3H2v2h3v3h2V7h3V5H7zm7 3h8v2h-8zm0 10h8v2h-8zm0 4h8v2h-8zm-5.71-4.71L6 16.59l-2.29-2.3l-1.42 1.42L4.59 18l-2.3 2.29l1.42 1.42L6 19.41l2.29 2.3l1.42-1.42L7.41 18l2.3-2.29z"></path></svg>

        <h3>Maths</h3>
        
        <Link href='/curriculum#maths'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg></Link>
    </div>

    <div className={styles.option}>
        <svg className={styles.mainSvg} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8"></path></svg>

        <h3>Arts</h3>
        
        <Link href='/curriculum#arts'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg></Link>
    </div>

    <div className={styles.option}>
        <svg className={styles.mainSvg} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M640 1664q43 0 75 9t60 26t53 41t54 52H0V256h128v1408zm0-1536q67 0 132 16t124 50v1435q-54-45-120-69t-136-24H256V128zm1280 128v1536h-882q28-28 53-52t53-40t60-26t76-10h512V256zm-640 1280q-70 0-136 24t-120 69V194q59-33 124-49t132-17h384v1408z"></path></svg>

        <h3>Reading</h3>
        
        <Link href='/curriculum#reading'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg></Link>
    </div>

    <div className={styles.option}>
    <svg className={styles.mainSvg} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5 12.4L1.6 8.5l3.9-3.9l3.9 3.9zM9 22v-5q-1.525-.125-3.025-.363T3 16l.5-2q2.1.575 4.213.788T12 15t4.288-.213T20.5 14l.5 2q-1.475.4-2.975.638T15 17v5zm3-15q-1.25 0-2.125-.875T9 4t.875-2.125T12 1t2.125.875T15 4t-.875 2.125T12 7m0 7q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m5.05-2l-1.7-3l1.7-3h3.4l1.7 3l-1.7 3z"></path></svg>

        <h3>Playing and Problem Solving</h3>
        
        <Link href='/curriculum#patriotism'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 11h11.586l-4.5-4.5L13 5.086L19.914 12L13 18.914L11.586 17.5l4.5-4.5H4.5z"></path></svg></Link>
    </div>
 
    <img src='/img/options.png' alt='Image of painted wall' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,0.75)"}} className='shader'></div>
 </div>
)};