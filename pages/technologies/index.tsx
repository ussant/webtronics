import React from 'react';
import styles from "../../styles/Technologies.module.css";

type Technology = {
    id: number,
    name: string,
    image: string
}

const technologies: Array<Technology> = [
    {id: 1, name: "Angular", image: "angular.png"},
    {id: 2, name: "React", image: "react.png"},
    {id: 3, name: "Vue", image: "vue.png"},
    {id: 4, name: "JS", image: "js.png"},
]

const Index = (): JSX.Element => {
    return (
        <section id={"programs"} className={styles.container}>
            <h2 className={styles.title}>Programming technologies</h2>
            <p className={styles.description}>
                By the end, you’ll have the portfolio and interview skills you need to start your new career.
            </p>
            <div className={styles.techContainer}>
                {
                    technologies.map(technology => (
                        <div key={`${technology.id}_${technology.name}`} className={styles.technology}>
                            <img className={styles.techImage} src={technology.image}  alt={"tech"}/>
                            <h4 className={styles.techName}>{technology.name}</h4>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Index;
