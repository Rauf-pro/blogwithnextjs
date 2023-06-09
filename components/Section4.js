import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import fetcher from "../lib/fetcher";
import Error from "./_child/error";
import Spinner from "./_child/spinner";

export default function Section4() {
  const { data, isLoading, isError } = fetcher("api/popular");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {/* post */}
            {data[1] ? <Post data={data[1]}></Post> : ""}
            {data[2] ? <Post data={data[2]}></Post> : ""}
            {data[3] ? <Post data={data[3]}></Post> : ""}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {data[4] ? <Post data={data[4]}></Post> : ""}
            {data[5] ? <Post data={data[5]}></Post> : ""}
            {data[2] ? <Post data={data[2]}></Post> : ""}
          </div>
        </div>
      </div>
    </section>
  );
}
function Post({ data }) {
  const { id, title, category, img, published, description, author } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={img || "/"}
            width={300}
            height={250}
            className="rounded"
            alt="image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-700">
            {category || "No Category"}
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-3xl font-bold text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            {title || "Title"}
          </Link>
        </div>
        {author ? <Author /> : <></>}
      </div>
    </div>
  );
}
