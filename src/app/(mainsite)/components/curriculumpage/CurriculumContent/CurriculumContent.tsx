import styles from './curriculumcontent.module.css';
import curriculumData from '@/app/(mainsite)/data/curriculumData';

export default function CurriculumContent(){
    const items = curriculumData.map((data, i)=>{
        return(
            <div className={styles.item} key={i}>
                <h2>{data.title}</h2>
               {(data.about !== undefined) ?  <p><strong>About: </strong>{data.about}</p> : <></>}
            </div>
        )
    })

return (
 <div className={styles.curriculumContent}>
    {/* <div className={styles.infoWrapper}>
        <div className={styles.info}>
            <h2>Foundational</h2>
            <p>When you walk into the classrooms, you'll see different learning stations. Teachers plan activities that are just right for the kids' ages and needs. We believe play is crucial for young students' learning. Through play and hands-on activities, kids understand their world, spark creativity, and build reading, thinking, problem-solving, social, and motor skills. Good interactions between teachers and kids are essential for fostering learning.</p>
        </div>
        <div className={styles.info}>
            <h2></h2>
            <p></p>
        </div>
    </div> */}
    <div className={styles.wrapper}>
        {items}
    </div>
 </div>
)};