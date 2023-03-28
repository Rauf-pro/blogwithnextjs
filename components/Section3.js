import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Author from "./_child/Author";
import fetcher from "../lib/fetcher";
import Error from "./_child/error";
import Spinner from "./_child/spinner";

export default function Section3() {
  const {data, isLoading, isError} = fetcher('api/popular')

  if(isLoading) return <Spinner/>
  if(isError) return <Error/>
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      {/* swiper */}
       <Swiper
        slidesPerView={2}
        spaceBetween={50}
      
       >
        {data.map((value, index) => (
          <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
        ))}
       </Swiper>
    </section>
  );
}

function Post({data}) {
  const {id, title, category,img, published, description, author} = data;
    return (
      <div className="grid">
        <div className="images">
          <Link href={"/"}>
            <Image
              src={img || "/"}
              width={600}
              height={400}
              className="rounded"
              alt="image"
            />
          </Link>
        </div>
        <div className="info flex justify-center flex-col py-4">
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
              className="text-3xl md:text-4xl  font-bold text-gray-800 hover:text-gray-600"
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