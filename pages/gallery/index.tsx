import React from 'react';
import styles from "../../styles/Gallery.module.css";
const Index = (): JSX.Element => {
    return (
        <section id={"gallery"} className={styles.container}>
            <h2 className={styles.title}>Gallery</h2>
            <div className={styles.mainContent}>
                <div className={styles.mainContainer}>
                   <div className={styles.leftContainer}>
                       <p className={styles.description1}>
                           By the end of this course, you will be able to develop and publish your very own Google Chrome extension!
                           In this course we will focus on coding exercises and projects.
                       </p>
                       <img alt={"dev"} className={styles.developer4} src={"developer4.png"} />
                   </div>
                    <div className={styles.centerContainer}>
                        <div className={styles.imgContainer}>
                            <img alt={"dev"} className={styles.developer1} src={"developer1.png"} />
                            <div className={styles.rightContainer}>
                                <img alt={"dev"} className={styles.developer2} src={"developer2.png"} />
                                <img alt={"dev"} className={styles.developer3} src={"developer3.png"} />
                            </div>
                        </div>
                        <p className={styles.description2}>
                            If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course!
                            Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials!
                            This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
