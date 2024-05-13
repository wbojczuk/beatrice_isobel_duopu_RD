"use client"

import Link from 'next/link';
import styles from './opportunites.module.css';

export default function Opportunites(){
return (
 <div className={styles.opportunites}>
        <h3>Endless Opportunities</h3>

        <p>We believe everyone should be able to get a good education, regardless of their position. Contact us and let’s transform your child’s future together!</p>
        
        <Link className='main-link' href={"/contact"}>Learn More</Link>

        <img src="/img/opportunities.png" alt="image of man with a child" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,.9)"}}></div>
 </div>
)};