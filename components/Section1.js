import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper'
// Import Swiper styles
import "swiper/css";
import fetcher from "../lib/fetcher";
import Error from "./_child/error";
import Spinner from "./_child/spinner";

export default function Section1() {
  const {data, isLoading, isError} = fetcher('api/trending')

  if(isLoading) return <Spinner/>
  if(isError) return <Error/>
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
          {data.map((value,index) => (
            <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({data}) {
  const {id, title, category,img, published, description, author} = data;
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="image">
        <Link href={"/"}>
          <Image src={img || "/"} width={600} height={600} alt="image" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-700">
            {category || "Unknown"}
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            {title || "Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {description || "description"}
        </p>
        {author ? <Author/> : <></>}
      </div>
    </div>
  );
}
