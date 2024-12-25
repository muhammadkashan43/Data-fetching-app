import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer  from "@/components/Footer";
interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}
type imagetype = {
  [key: number]: string;
};

const imageMap: imagetype = {
  1: "/Therussian.jpg",
  2: "/Justasiam.jpg",
  3: "/Thevanishinghalf.jpg",
  4: "/The_Midnight_Library.jpeg",
  5: "/Untamed.jpg",
  6: "/Theviscountwholovedme.jpg",
};

const getbook = async () => {
  let data: Book[] = []
  try {
    const response = await fetch('https://simple-books-api.glitch.me/books');
    data = await response.json();  // Ensuring the type here
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (<>
    <Navbar />
    <div data-aos="fade-down" className="text-4xl py-9 font-black text-white tracking-widest text-center">SERVER SIDE RENDERED</div>
    <div  className="min-h-screen  flex flex-wrap items-center gap-4 justify-center p-4">
      {data && data.map((book) => (
        <div data-aos="fade-up"
          key={book.id}
          className="w-[340px] h-[510px] outline-none relative cursor-pointer shadow-xl group"
        >
          <Image
            src={imageMap[book.id]}
            alt={`Cover of ${book.name}`}
            fill={true}
            style={{ objectFit: "cover" }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid grid-rows-4 text-[#FEF5DF] font-sans ">
            <div className="items head pl-5 mb-16 mt-9 pr-5 font-sans text-4xl leading-9 transform translate-y-10 group-hover:translate-y-0 transition-all duration-700 font-bold">
              <p>{book.name}</p>
              <hr className={`w-0 group-hover:w-[75px] border-b-2 border-[#FEF5DF] absolute ${book.id == 3 || book.id == 4 || book.id == 6 ? "top-20" : "top-12"} left-5 transition-all duration-500 delay-400 rounded-full`} />
            </div>
            <div className="items head pl-5 pr-5 absolute top-44 text-sm leading-6 transform translate-y-10 group-hover:translate-y-0 transition-all duration-700">
              <p>
                <span className="font-bold"> Type:</span> {book.type}
              </p>
            </div>
            <div
              className={`items head pl-5 pr-5 absolute top-52 text-sm leading-6 transform translate-y-10 group-hover:translate-y-0 transition-all duration-700 font-bold ${book.available ? "text-green-400" : "text-red-500"}`}
            >
              <p>{book.available ? "Available" : "Unavailable"}</p>
            </div>
            <div className="items cart pl-3 absolute top-36 text-md opacity-0 transform translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-600">
              <span className="ml-2.5">
                <span className="font-bold"> ID:</span> {book.id}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
}
export default getbook;