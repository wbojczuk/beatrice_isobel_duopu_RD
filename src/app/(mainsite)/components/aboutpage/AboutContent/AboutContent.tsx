import styles from './aboutcontent.module.css';

export default function AboutContent(){
return (
 <div className={styles.aboutContent}>

    <div className={styles.aboutWrapper}>
        <h1>About Us</h1>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
    </div>
 
    <img src='/img/about.png' alt='Image of ' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255, 0.4)"}} className='shader'></div>
 </div>
)};