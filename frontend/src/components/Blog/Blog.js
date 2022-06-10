import styles from './Blog.module.css';
import image1 from './images/team-1.jpg';
import image2 from './images/team-2.png';
import image3 from './images/team-3.png';

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
                            <img className={styles.imgStyle} src={image1} alt="img" />
                        </div>
                        <div className={styles.textArea}>
                            <h4 className={styles.text}>Kasd tempor diam sea justo dolor</h4>
                            <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                        </div>
                    </div>
                    <div className={styles.eachBlogContainer}>
                        <div className={styles.imgPosition}>
                            <img className={styles.imgStyle} src={image1} alt="img" />
                        </div>
                        <div className={styles.textArea}>
                            <h4 className={styles.text}>Kasd tempor diam sea justo dolor</h4>
                            <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                        </div>
                    </div>
                    <div className={styles.eachBlogContainer}>
                        <div className={styles.imgPosition}>
                            <img className={styles.imgStyle} src={image1} alt="img" />
                        </div>
                        <div className={styles.textArea}>
                            <h4 className={styles.text}>Kasd tempor diam sea justo dolor</h4>
                            <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;