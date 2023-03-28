import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper'
// Import Swiper styles
import "swiper/css";

export default function Section1() {
    SwiperCore.use([Autoplay])
    
  const bg = {
    background: "url('/images/banner.jpg')no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
        //   spaceBetween={50}
          slidesPerView={1}
          // loop={true}
          // autoplay={{
          //   delay: 2000
          // }}
         
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/images/img1.jpg"} width={600} height={600} alt="image" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-700">
            Business. Travel
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            January 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            Your must unhappy customers are your greatest source of learning
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name Lorem ipsum dolor sit amet consectetur.
        </p>
        <Author />
      </div>
    </div>
  );
}
