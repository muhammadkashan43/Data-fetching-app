"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/components/Navbar";
import Footer  from "@/components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";


type Datatype = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ClientSideRender = () => {
  const [data, setData] = useState<Datatype[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    Aos.init({
      duration:1000,
      easing:"ease-in-out",
      mirror:false,
    });
  },[]);
  useEffect(() => {
    const datafetch = async () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      try {
        const response = await fetch(
          "https://fakestoreapiserver.reactbd.com/amazonproducts"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Datatype[] = await response.json();
        setData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    datafetch();
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <Image
            src={"/load.gif"}
            alt="Loading..."
            width={300}
            height={40}
            unoptimized={true}
            className="bg-white px-[2px] rounded-[100px]"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <div data-aos="fade-down"  className="text-4xl py-9 font-black text-white tracking-widest text-center">
            CLIENT SIDE RENDERED
          </div>
          <div className="min-h-screen flex flex-wrap items-center gap-6 justify-center p-8">
            {data.map((val) => (
              <div data-aos="fade-up"
                key={val.id}
                className="w-[340px] h-[510px] relative cursor-pointer shadow-md group bg-white rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image
                    src={val.image}
                    alt={val.title}
                    width={300}
                    height={300}
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    onError={(e) => {
                      e.currentTarget.src = "/fallback-image.jpg";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-[rgba(77,77,77,0.9)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid grid-rows-[1fr_2fr_2fr_1fr] text-[#FEF5DF] font-sans p-5">
                  <div className="items head font-sans text-[10px] tracking-[2px] transform translate-y-10 group-hover:translate-y-0 pt-7 uppercase transition-all duration-700">
                    <p>{val.category}</p>
                    <hr
                      className={`w-0 group-hover:w-[75px] border-b-2 border-[#FEF5DF] absolute ${val.id == 0 || val.id == 1 || val.id == 2 || val.id == 18 || val.id == 19 || val.id == 20 ? "top-40" : val.id == 5 || val.id == 8 || val.id == 9 || val.id == 10 || val.id == 11 || val.id == 12 || val.id == 13 || val.id == 17 || val.id == 14 || val.id == 15 || val.id == 16 ? "top-[185px]" : "top-[120px]"} transition-all duration-500 delay-400 rounded-full`}
                    />
                  </div>
                  <div className="items head font-sans text-2xl leading-8 transform translate-y-10 group-hover:translate-y-0 transition-all duration-700 line-clamp-3">
                    <p>{val.title}</p>
                  </div>
                  <div
                    className={`items head absolute ${val.id == 1 || val.id == 2 || val.id == 19 || val.id == 18 || val.id == 20 ? "top-56" : val.id == 5 || val.id == 8 || val.id == 9 || val.id == 10 || val.id == 11 || val.id == 12 || val.id == 13 || val.id == 14 || val.id == 15 || val.id == 16 || val.id == 17 ? "top-60" : "top-48"} w-[90%] m-auto left-5  text-base leading-6 transform translate-y-10 group-hover:translate-y-0 transition-all duration-700 overflow-hidden line-clamp-6 `}
                  >
                    <p>{val.description}</p>
                  </div>
                  <div className="items head absolute bottom-20 text-sm leading-6 transform translate-y-10 left-5  group-hover:translate-y-0 transition-all duration-700">
                    <p className="flex items-center gap-2">
                      <span className="text-xl">★</span>
                      <span className="text-sm ">
                        {val.rating.rate} ( {val.rating.count} Reviews )
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center absolute bottom-8 left-5 right-5 transform translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-600">
                    {/* Add to Cart Button */}
                    <div className="items cart relative text-base opacity-100 py-2 font-normal  text-white transition duration-700 ease-in-out hover:transition">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="text-base mr-2"
                      />
                      ADD TO CART
                    </div>

                    {/* Price */}
                    <div className="items cart text-md opacity-0 group-hover:opacity-100 transition-all duration-700 delay-600">
                      <span>${val.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default ClientSideRender;
