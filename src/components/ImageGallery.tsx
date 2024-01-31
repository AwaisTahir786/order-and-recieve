"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/lib/sanity';

interface iAppprops{
    images:any
}

function ImageGallery({images}:iAppprops) {
    const[bigimage,setbigImage]=useState(images[0])

    function handleImagechange(image:string) {
        setbigImage(image);
        
    }
  return (
    <div className='grid gap-4 lg:grid-cols-5 '>
        <div className='order-last flex lg:flex-col gap-4 lg:order-none'>
        {images.map((image:any,idx:any)=>(
            <div key={idx} className='overflow-hidden rounded-lg bg-gray-100'>
                <Image 
                src={urlFor(image).url()}
                alt="product image"
                width={200}
                height={200}
                className='object-center object-cover w-full h-full cursor-pointer'
                onClick={()=>handleImagechange(image)}
                 />

            </div>

        ))}
        </div>

        <div className='relative overflow-hidden lg:col-span-4 rounded-lg bg-gray-100 '>
            <Image 
            src={urlFor(bigimage).url()}
            alt="photo"
            width={500}
            height={500}
            className='w-full h-full object-cover object-center '
            />

<span className='absolute top-0 left-0 bg-red-500 rounded-br-lg px-3 py-1.3 text-sm uppercase tracking-wider text-white'>Sale</span>


        </div>

       
    </div>
  )
}

export default ImageGallery;