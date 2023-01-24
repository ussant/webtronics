import React from 'react';
import styles from "../../styles/AboutUs.module.css"

type Mentor = {
    id: number,
    name: string,
    image: string,
    description: string
}

const mentors: Array<Mentor> = [
    {id: 1, name: "Wade Warren", description: "Front-end engineers work closely with designers", image: "avatar3.png"},
    {id: 2, name: "Kristin Watson", description: "Front-end engineers work closely with designers", image: "avatar2.png"},
    {id: 3, name: "Robert Fox", description: "Front-end engineers work closely with designers", image: "avatar1.png"},
]

const Index = (): JSX.Element => {
    return (
        <section id={"aboutUs"} className={styles.container}>
            <h2 className={styles.title}>About Us</h2>
           <div className={styles.mainContent}>
               <div className={styles.mentorsContainer}>
                   <div>
                       <h3 className={styles.mentorsTitle}>Mentors</h3>
                   </div>
                   <img className={styles.vector} src={"vector.png"} alt={"vector"} />
                       <div className={styles.mentors}>
                           {
                               mentors.map((mentor => (
                                   <div key={`${mentor.id}_${mentor.name}`} className={styles.mentor}>
                                       <img className={styles.image} src={mentor.image} alt={"mentor"} />
                                       <h4 className={styles.mentorsName}>{mentor.name}</h4>
                                       <p className={styles.mentorsDescription}>{mentor.description}</p>
                                   </div>
                               )))
                           }
                       </div>
               </div>
               <p className={styles.description}>
                   Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
                   This Career Path will teach you not only the necessary languages and technologies,
                   but how to think like a front-end engineer, too.
               </p>
           </div>
        </section>
    );
};

export default Index;
