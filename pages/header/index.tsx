import React from 'react';
import Link from "next/link";
import styles from "../../styles/Header.module.css"

type Section = {
    id: string,
    name: string
}

const sections: Array<Section> = [
    {id: "aboutUs", name: "About"},
    {id: "programs", name: "Programs"},
    {id: "steps", name: "Steps"},
    {id: "questions", name: "Questions"},
    {id: "getInTouch", name: "Get in touch"}
]

const Index = (): JSX.Element => {
    return (
        <header className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.infoBar}>
                    <img className={styles.logo} src={"logo.png"} alt={"logo"}/>
                    <h4 className={styles.siteName}>WEBTRONICS</h4>
                </div>
                <nav className={styles.nav}>
                    {
                        sections.map(section => (
                            <Link key={section.id} className={styles.item} href={`#${section.id}`}>{section.name}</Link>
                        ))
                    }
                </nav>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.headerTextCnt1}>
                    <h1 className={styles.headerText}>Front-End</h1>
                    <p className={styles.description}>
                        Make UIs and websites beautiful, functional, and fast.
                        Cover all the topics that expensive bootcamps teach (and more).
                    </p>
                </div>
                <div className={styles.headerTextCnt2}>
                    <button className={styles.button}>Start my career change</button>
                    <h1 className={styles.headerText}>Developer</h1>
                </div>
                <h3 className={styles.courses}>Courses</h3>
            </div>
        </header>
    );
};

export default Index;
