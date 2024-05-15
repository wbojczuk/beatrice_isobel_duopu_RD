import styles from "./visitcontent.module.css"

export default function VisitContent() {
  return (
    <section className={styles.visitContent}>
        <div className={styles.content}>
            <h2>Where We’re Located</h2>
            <p>We're raising leaders, and our school is located at <a href="https://maps.app.goo.gl/GjU1F9Xu62ti2RW29" target="_blank">1996 Duazon, Margibi County, Liberia, West Africa</a></p>
            <div className={styles.buttonWrapper}>
                <a style={{color: "var(--secondary-text-color)", backgroundColor: "var(--primary-color)"}} className="main-link" href="https://maps.app.goo.gl/GjU1F9Xu62ti2RW29" target="_blank">View On Map</a>
            </div>
        </div>
        <div className={styles.imgWrapper}>
            <div className={styles.imgContainer}>
                <img src="/img/location.png" alt="Image of church's location" />
            </div>
        </div>

        <img src="/img/visit.png" alt="image of painting" className="bg-img" />
        <div style={{backgroundColor: "rgba(255,255,255,.88)"}} className="shader"></div>
    </section>
  )
}
