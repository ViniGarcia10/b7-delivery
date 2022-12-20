import Image from "next/image";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../../public/tmp/banner-01.png";
import Banner2 from "../../public/tmp/banner-02.png";
import styles from "./styles.module.css";

export const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      modules={[Autoplay]}
      loop={true}
      className={styles.swiper}
    >
      <SwiperSlide>
        <Image
          src={Banner1}
          alt={"Banner1"}
          priority
          className={styles.imgBanner}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Banner2}
          alt={"Banner2"}
          priority
          className={styles.imgBanner}
        />
      </SwiperSlide>
    </Swiper>
  );
};
