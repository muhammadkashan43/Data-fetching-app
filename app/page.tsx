import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div data-aos="zoom-in" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
        <div className="relative mb-20 z-20 transform w-[97%]  max-w-xl bg-white bg-opacity-60 p-8 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-3xl">
          <div className="transform text-xl sm:text-3xl font-bold text-center text-[#124b6a]">
            Welcome to your data hub!
          </div>
          <div className="transform text-base sm:text-lg  py-6 font-semibold text-center text-black tracking-wide">
            - How would you like to fetch your data?
          </div>
          <div className="flex flex-col text-base items-center sm:flex-row justify-center gap-4">
            <Link href="/csr">
              {" "}
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Client Side Rendered
              </button>
            </Link>
            <Link href="/ssr">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Server Side Rendered
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
