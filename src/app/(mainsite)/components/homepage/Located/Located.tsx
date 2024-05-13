import styles from './located.module.css';

export default function Located(){
return (
 <div className={styles.located}>

    <div className={styles.content}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>

        <h3>We’re Located in Duazon Margibi County, Liberia</h3>
    </div>
 
    <img src='/img/located.png' alt='Image of liberia map' className='bg-img' />
    <div style={{backgroundColor: "rgba(43,0,0,0.6)"}} className='shader'></div>
 </div>
)};