import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

export default function Section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {/* post */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
}
function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/images/img1.jpg"}
            width={300}
            height={250}
            className="rounded"
            alt=""
          />
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
            className="text-3xl font-bold text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            Your must unhappy customers are your greatest source of learning
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
