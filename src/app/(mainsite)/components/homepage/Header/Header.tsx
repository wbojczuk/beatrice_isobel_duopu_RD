import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>

    <h1>Serving Future <br /> <span className="underline highlight">Leaders</span></h1>

    <img src='/img/header-bg.png' alt='Image of ' className='bg-img' />
    <div className='shader'></div>
 </header>
)};