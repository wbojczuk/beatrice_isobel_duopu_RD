import styles from './activitiescontent.module.css';
import activityData from '@/app/(mainsite)/data/activityData';

export default function ActivitiesContent(){
    const items = activityData.map((data, i)=>{
        return(
            <div className={styles.item} key={i}>
                <div className={styles.imgWrapper}>
                    <img src={data.imgSrc} aria-hidden />
                </div>

                <div className={styles.shader}></div>

                <div className={styles.textWrapper}>
                <h2>{data.title}</h2>
                <p><strong>About: </strong>{data.about}</p>
                </div>
            </div>
        )
    })

return (
 <div className={styles.activitiesContent}>
    <div className={styles.wrapper}>
        {items}
    </div>
 </div>
)};