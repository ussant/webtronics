import React from 'react';
import styles from "../../styles/Steps.module.css"
const Index = (): JSX.Element => {
    return (
        <section id={"steps"} className={styles.container}>
            <h2 className={styles.title}>Steps</h2>
            <div className={styles.line}>
                <div className={styles.circle1}></div>
                    <img className={styles.stroke1} src={"stroke.png"}  alt={"stroke1"} />
                <div className={styles.stepCnt1}>
                    <h4>Step 1</h4>
                    <h3>Introduction to Front-End</h3>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
                    </p>
                </div>
                    <img className={styles.wrapper1} src={"wrapper.png"} alt={"wrapper1"} />

                <div className={styles.circle2}></div>
                    <img className={styles.stroke2} src={"stroke.png"}  alt={"stroke2"} />
                <div className={styles.stepCnt2}>
                    <h4>Step 2</h4>
                    <h3>Overview of Development</h3>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
                    </p>
                </div>
                    <img className={styles.wrapper2} src={"wrapper.png"} alt={"wrapper2"} />

                <div className={styles.circle3}></div>
                    <img className={styles.stroke3} src={"stroke.png"}  alt={"stroke3"} />
                <div className={styles.stepCnt3}>
                    <h4>Step 3</h4>
                    <h3>Introduction to Front-End</h3>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
                    </p>
                </div>
                    <img className={styles.wrapper3} src={"wrapper.png"} alt={"wrapper3"} />

                <div className={styles.circle4}></div>
                    <img className={styles.stroke4} src={"stroke.png"} alt={"stroke4"} />
                <div className={styles.stepCnt4}>
                    <h4>Step 4</h4>
                    <h3>Overview of Development</h3>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
                    </p>
                </div>
                    <img className={styles.wrapper4} src={"wrapper.png"} alt={"wrapper4"} />

                <div className={styles.circle5}></div>
                    <img className={styles.stroke5} src={"stroke.png"}  alt={"stroke5"} />
                <div className={styles.stepCnt5}>
                    <h4>Step 5</h4>
                    <h3>Introduction to Front-End</h3>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
                    </p>
                </div>
                    <img className={styles.wrapper5} src={"wrapper.png"} alt={"wrapper5"} />

                <div className={styles.circle6}></div>
                    <img className={styles.stroke6} src={"stroke.png"} alt={"stroke6"} />
                <div className={styles.stepCnt6}>
                    <h4>Step 6</h4>
                    <h3>Overview of Development</h3>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
                    </p>
                </div>
                    <img className={styles.wrapper6} src={"wrapper.png"} alt={"wrapper6"} />
            </div>
        </section>
    );
};

export default Index;
