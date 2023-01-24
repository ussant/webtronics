import React, {useState} from 'react';
import styles from "../../styles/FAQ.module.css";

type Question = {
    id: number,
    name: string,
    description: string
}

const questions: Array<Question> = [
    {id: 1, name: "What is the price?", description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."},
    {id: 2, name: "What is the price?", description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."},
    {id: 3, name: "What is the price?", description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."},
    {id: 4, name: "What is the price?", description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."},
    {id: 5, name: "What is the price?", description: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."},
]

const Index = (): JSX.Element => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const onBlockClick = (index: number): void => {
        if (selectedIndex !== index) {
            setSelectedIndex(index)
            return
        }
        setSelectedIndex(-1)
    };

    return (
        <section id={"questions"} className={styles.container}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <div className={styles.content}>
                <div>
                    <p>Do you have any kind of questions?<br /> We are here to help.</p>
                    <img className={styles.question} src={"question.png"} alt={"question"} />
                </div>
                <div>
                    {
                        questions.map((question, index) => (
                            index === selectedIndex ?
                                (
                                    <div key={`${question.id}_${question.name}`} onClick={() => onBlockClick(index)} className={styles.extendedBlock}>
                                        <div className={styles.extendedBlockHeader}>
                                            <h4 className={styles.questionName}>{question.name}</h4>
                                            <img src={"minus.png"} alt={"minus"} />
                                        </div>
                                        <p>{question.description}</p>
                                    </div>
                                ) : (
                                    <div key={`${question.id}_${question.name}`} onClick={() => onBlockClick(index)} className={styles.block}>
                                        <h4 className={styles.questionName}>{question.name}</h4>
                                        <img src={"plus.png"} alt={"plus"} />
                                    </div>
                                )
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Index;
