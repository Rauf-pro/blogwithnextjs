import Image from "next/image";
import Author from "../../components/_child/Author";
import Format from "../../layout/Format";
export default function Page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            ratione eaque ullam dolor voluptas.
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            veniam. Neque tenetur pariatur ex consequuntur explicabo iusto!
          </p>
          <div className="py-10">
            <Image src={"/images/img1.jpg"} width={900} height={600} alt="" />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
              dolore similique alias? Qui reprehenderit dolorum ut accusamus
              beatae harum nobis tempore adipisci. Voluptate corrupti earum
              labore laboriosam excepturi deleniti, doloremque sit ad, eius
              eveniet nobis nam quas inventore! Cupiditate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
              dolore similique alias? Qui reprehenderit dolorum ut accusamus
              beatae harum nobis tempore adipisci. Voluptate corrupti earum
              labore laboriosam excepturi deleniti, doloremque sit ad, eius
              eveniet nobis nam quas inventore! Cupiditate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
              dolore similique alias? Qui reprehenderit dolorum ut accusamus
              beatae harum nobis tempore adipisci. Voluptate corrupti earum
              labore laboriosam excepturi deleniti, doloremque sit ad, eius
              eveniet nobis nam quas inventore! Cupiditate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum
              dolore similique alias? Qui reprehenderit dolorum ut accusamus
              beatae harum nobis tempore adipisci. Voluptate corrupti earum
              labore laboriosam excepturi deleniti, doloremque sit ad, eius
              eveniet nobis nam quas inventore! Cupiditate.
            </p>
          </div>
        </div>
      </section>
    </Format>
  );
}
