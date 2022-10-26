import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Carousel.module.scss";
import { useRouter } from "next/router";

const Carousel = () => {
  const sliderImages = [1, 2, 3, 4];
  const route = useRouter();
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      dir={route.locale === "en" ? "ltr" : "rtl"}
      autoplay={{
        delay: 2500,
        // disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {sliderImages.map((img) => (
        <SwiperSlide key={img}>
          <Box className={styles.parent}>
            <Image src={`/images/slider${img}.jpg`} layout="fill" className={styles.image} priority />
            <Box className={styles.text}>
              <Typography className={styles.title}>Your Partner in Shipping</Typography>
              <Typography className={styles.paragraphOne}>My storage meets your Shopping needs</Typography>
              <Typography className={styles.paragraphTwo}>
                We have addresses around the world to make global shopping easy for you
              </Typography>
              <Button className={styles.button}>Sign Up</Button>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
