import styles from './curriculumheader.module.css';

export default function CurriculumHeader(){
return (
 <div className={styles.curriculumHeader}>

    <div className={styles.curriculumWrapper}>
        <h1>Curriculum</h1>

        <p>Our curriculum is designed to engage young learners through various learning stations tailored to their age and needs. We emphasize the importance of play in learning, as it fosters creativity and develops essential skills like reading, problem-solving, and social interaction. Teachers facilitate hands-on activities to help children explore and understand their world while building motor skills.
<br /><br />
In the primary years (grades two through five), we introduce formal instruction in subjects like Religion, Math, Reading, Science, Social Studies, and Language Arts. Alongside these core subjects, students also participate in music, art, choir, and physical education classes.
<br /><br />
Our approach to primary education prioritizes literacy skills, understanding that reading is fundamental for future learning. We believe in starting literacy development early and continuing to support comprehension skills as children grow.
<br /><br />
Recognizing that every child learns differently, we focus on differentiating instruction to meet individual learning needs and ensure each student has the opportunity to thrive and advance their learning at their own pace.</p>
    </div>
 
    <img src='/img/curriculum.png' alt='Image of school painting' className='bg-img' />
    <div style={{backgroundColor: "rgba(255,255,255, 0.4)"}} className='shader'></div>
 </div>
)};