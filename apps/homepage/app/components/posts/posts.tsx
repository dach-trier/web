import styles from "./styles.module.css";
import { Carousel, CarouselSlide } from "@dach/ui";

const Posts = () => {
    return (
        <Carousel className={styles["posts"]}>
            {Array.from({ length: 5 }).map((_, index) => {
                return (
                    <CarouselSlide key={index} className={styles["slide"]}>
                        <div>{index}</div>
                    </CarouselSlide>
                );
            })}
        </Carousel>
    );
};

export default Posts;
