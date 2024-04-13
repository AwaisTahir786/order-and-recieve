import { client, urlFor } from "@/app/lib/sanity";
import React from "react";
import Image from "next/image";
import { url } from "inspector";
import Link from "next/link";


async function getData() {
    const query = `*[_type == 'heroimages'][0]`;
  
    const data = await client.fetch(query);
    // console.log(typeof data)
  
    return data;
  }

async function HeroSection() {

    const data = await getData();
    // console.log(data)

  return (
    <section className="mx-auto max-w-2xl lg:max-w-7xl px-4 lg:px-8 sm:pb-6 ">
      <div className="flex flex-wrap justify-between mb-8 md:mb-6 ">
       
        <div className="flex flex-col mb-6 w-full justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="text-4xl font-bold text-black mb-4 sm:text-5xl md:text-6xl md:mb-8">
            <span className="text-primary">Top Fashion </span>for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high quality products for you.
            We are the best so come and shop with us.
          </p>
        </div>



        <div className="flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 ml-12 z-10 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0" >

            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />

            </div>
              
            <div className="rounded-lg bg-gray-100 overflow-hidden">
            <Image src={urlFor(data.image2).url()}
              alt="Second Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
              />

            </div>

        </div>


      </div>

      {/* buttons */}
      <div className="flex flex-col items-center md:flex-row justify-between gap-8">
        <div className="flex h-12 w-64 rounded-lg border overflow-hidden">
          <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transtion duration-100">Men</Link>
          <Link href="/Women" className="flex w-1/3 items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transtion duration-100">Women</Link>
          <Link href="/Teens" className="flex w-1/3 items-center justify-center text-gray-500 hover:bg-gray-100 active:bg-gray-200 transtion duration-100">Teens</Link>

          
       


        </div>

      </div>
    </section>
  );
}

export default HeroSection;
