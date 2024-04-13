import { SimplifiedProduct } from '@/app/interface';
import { client, urlFor } from '@/app/lib/sanity';
import React from 'react'
import Link from 'next/link';
import { ArrowBigRight } from 'lucide-react';
import Image from 'next/image';

async function getData() {
    const query=`*[_type=="product"][0...20] | order(_createdAt desc){
        _id,
          price,
            name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
          
      }`;

    const data= await client.fetch(query);
    return data;

    
}

async function Newest() {
    const data:SimplifiedProduct[] = await getData();
    // console.log(data)


  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold tracking-tight text-gray-900 text-2xl'>Our Newest Product</h2>
                <Link className='flex items-center gap-x-1 text-primary' href={"/"}>See All{""} <ArrowBigRight/></Link>

            </div>

            {/* products section */}
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8'>
                {data.map((product)=>(
                    <div key={product._id} className='group relative'>
                        <div className='ascept-square w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80'>
                            <Image 
                            src={product.imageUrl}
                            alt="product image"
                            className='w-full h-full object-cover object-center lg:h-full lg:w-full'
                            width={300}
                            height={300}
                             />

                        </div>

                        <div className='flex justify-between'>
                            <div className=''>
                                <h2 className='text-sm text-gray-700'>
                                <Link href={`/product/${product.slug}`}>{product.name}</Link>
                                </h2>
                                <p className='text-sm text-gray-500 mt-1'>{product.categoryName}</p>


                            </div>
                            <p className='text-sm font-medium text-gray-900'>${product.price}</p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    </div>
  )
}

export default Newest;