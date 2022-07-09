import styles from './Blog.module.css';

const Blog = () => {
    return (
        <div className={styles.containerBlog}>
            <div className={styles.containerDesign}>
                <div className={styles.titleDesign}>
                    <h1 className={styles.mainTitle}>Our Blog</h1>
                    <h2 className={styles.secondTitle}>Latest From Blog</h2>
                </div>
                <div className={styles.blogContainer}>
                    <div className={styles.eachBlogContainer}>
                        <div className={styles.imgPosition}>
                            <img className={styles.imgStyle} src='/images/drone.jpg' alt="img" />
                        </div>
                        <div className={styles.textArea}>
                            <h4 className={styles.text}>Drones are now in construction</h4>
                            <p>Drones are increasingly well recognized in the construction space as an important tool for collecting data and insights during the construction process.</p>
                        </div>
                    </div>
                    <div className={styles.eachBlogContainer}>
                        <div className={styles.imgPosition}>
                            <img className={styles.imgStyle} src='/images/robots.jpg' alt="img" />
                        </div>
                        <div className={styles.textArea}>
                            <h4 className={styles.text}>Construction Robotics Today</h4>
                            <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                        </div>
                    </div>
                    <div className={styles.eachBlogContainer}>
                        <div className={styles.imgPosition}>
                            <img className={styles.imgStyle} src='/images/scanner.jpg' alt="img" />
                        </div>
                        <div className={styles.textArea}>
                            <h4 className={styles.text}>Mobile 3D laser scanners</h4>
                            <p>Mobile 3D laser scanners will be used to create panoramic images, floor plans, that are accurate down to the last detail, facilities, and outdoor areas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;