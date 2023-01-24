import React, {useState} from 'react';
import styles from "../../styles/Review.module.css"

type Person = {
    id: number,
    title: string,
    image: string,
    extendedImage: string,
    description: string
}

const persons: Array<Person> = [
    {
        id: 0,
        title: "Best courses ever",
        image: "reviewMan.png",
        extendedImage: "reviewManExt.png",
        description: "Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the teacher sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc."
    },
    {
        id: 1,
        title: "Amazing teaching",
        image: "reviewWoman.png",
        extendedImage: "reviewWomanExt.png",
        description: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest."
    },
    {
        id: 2,
        title: "Simple and easy",
        image: "reviewMan2.png",
        extendedImage: "reviewMan2Ext.png",
        description: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun."
    },
]

const Index = (): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const onLeftArrow = (): void => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            return
        }
    }

    const onRightArrow = (): void => {
        if (currentIndex+1 < persons.length) {
            setCurrentIndex(currentIndex + 1)
            return
        }
    }

    return (
        <section id={"review"} className={styles.container}>
            <h2 className={styles.title}>Review</h2>
            <div className={styles.mainContent}>
                <div className={styles.coursesContainer}>
                    <h4 className={styles.coursesTitle}>Best courses ever</h4>
                    <p className={styles.coursesDesc}>
                        Good course, up to this point, still ongoing.
                        The only downside, why I gave 4,5 stars,
                        because the "teacher" sometimes feel like,
                        he is lost, and takes up quite a time,
                        to correct himself, and check back etc.
                    </p>
                </div>
                <div className={styles.reviewContainer}>
                    <div className={styles.reviewHeader}>
                        <div className={styles.selectedReview}>
                            <h4 className={styles.reviewQueue}>
                                {`${currentIndex+1}/`}
                            </h4>
                            <p>
                                {persons.length}
                            </p>
                        </div>
                        <div className={styles.arrowContainer}>
                            <img onClick={onLeftArrow} className={styles.leftArrow} src={"arrow.png"} alt={"leftArrow"} />
                            <img onClick={onRightArrow} className={styles.rightArrow} src={"arrow.png"} alt={"rightArrow"} />
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        {
                            persons.map((person, index) => {
                                if (index === currentIndex) {
                                    return (
                                          <div key={`${person.id}_${person.title}`} className={styles.extendedWrapper}>
                                            <img className={styles.image} src={person.extendedImage} alt={"extImage"} />
                                          </div>
                                    )
                                }
                                return (
                                    <div key={`${person.id}_${person.title}`} className={styles.wrapper}>
                                          <img className={styles.image} src={person.image} alt={"image"} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
