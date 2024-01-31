import { FullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import React from "react";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import AddToBag from "@/components/AddToBag";

async function getData(slug: string) {
  const query = ` *[_type == "product" && slug.current == "${slug}"][0]{
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name
      }`;

  const data = await client.fetch(query);
  return data;
}

async function Page({ params }: { params: { slug: string } }) {
  const data: FullProduct = await getData(params.slug);
  // console.log(data);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <ImageGallery images={data.images} />

          {/* right side data */}

          <div className="md:py-8">
            <div className="mb-2 md:mb:3">
              <span className="mb-0.5 inline-block text-gray-500">
                {" "}
                {data.categoryName}
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold">{data.name}</h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-end gap-2">
                <span className="text-gray-800 font-bold text-xl md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5  text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>
              <span className="text-sm text-gray-500">Incl. Vat plus Shipping</span>
            </div>

            <div className="flex items-center gap-2 mb-6 text-gray-500">
                <Truck className="h-6 w-6"/>
                <span className="text-sm">2-4 Days Shipping</span>
            </div>

            {/* buttons */}
            <div className="flex gap-2.5">
              <AddToBag currency="USD" price={data.price} description={data.description} name={data.name} key={data._id} image={data.images[0]} />
                <Button variant="secondary">Checkout now</Button>


            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
                {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
