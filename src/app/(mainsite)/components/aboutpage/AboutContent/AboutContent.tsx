import styles from './aboutcontent.module.css';

export default function AboutContent(){
return (
 <div className={styles.aboutContent}>

    <div className={styles.aboutWrapper}>
        <h1>About Us</h1>

        <p>Primary education at our school includes grades two through five, building on the foundational knowledge established in earlier years. Students are formally introduced to subjects such as Religion, Math, Reading, Science, Social Studies, and Language Arts, which covers Handwriting, Spelling, and Phonics. Additionally, each grade includes music, art, choir, and physical education.
<br /><br />
Our approach focuses on teaching children to read early on, laying the groundwork for them to use reading as a tool for learning throughout their education. This method supports continuous learning and development from birth through elementary school and beyond.
<br /><br />
We understand that every child learns differently and at their own pace. Therefore, our teachers tailor their instruction to meet the unique needs of each student, ensuring they acquire the necessary skills and knowledge to progress effectively in their education.</p>
    </div>
 
    <img src='/img/about.png' alt='Image of ' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255, 0.4)"}} className='shader'></div>
 </div>
)};