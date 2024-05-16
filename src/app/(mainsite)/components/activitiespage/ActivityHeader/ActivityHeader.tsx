import styles from './activityheader.module.css';

export default function ActivityHeader(){
return (
 <header className={styles.activityHeader}>
    
    <div className={styles.header}>
        <h1>Additional Activities</h1>
    </div>
 
    <img src='/img/activities.png' alt='Image of painting' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255,0.4)"}} className='shader'></div>
 </header>
)};