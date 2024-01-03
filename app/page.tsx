import SearchForm from "@/components/SearchForm";
import { trending_data } from "@/data/trending";
import { unique_destination } from "@/data/unique";


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#013B94]">
        <section className="max-w-7xl mx-auto px-2">
          <h2 className="font-bold text-5xl text-white">Find your Next Stay</h2>
          <h3 className="text-white py-5 text-xl">
            Search low prices on hotels, homes and much more...
          </h3>
        </section>

        <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
          <SearchForm />
        </section>
      </div>




      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white shadow-md rounded-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <div className="relative">
                <img
                  className="w-80 h-64  object-cover rounded-lg shadow-lg"
                  src={item.src}
                  alt={`${item.title} image`}
                />
                <img
                  className="absolute top-2 right-2 w-12 h-8 object-cover "
                  src={item.flag}
                  alt={`${item.location} flag`}
                  style={{ borderRadius: '3px 3px 3px 3px' }} // Optional, to round the bottom-left corner of the flag
                  
                />
              </div>

              <p className="font-bold">{item.title}</p>
              <p>{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>



      </section>
      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white shadow-md rounded-lg mb-10">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Stay at our top unique properties</h3>
          <p className="font-light">
            From castles and villas to boats and igloos, we have it all
          </p>
        </div>

        <div className="flex  space-x-4 py-5 overflow-x-scroll  shadow-xl">
          {unique_destination.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <div className="relative">
                <img
                  className="w-52 h-24 object-cover rounded-lg"
                  src={item.src}
                  alt={`${item.title} image`}
                />
          
              </div>

              <p className="font-bold text-sm">{item.title}</p>
              <p className="text-xs">{item.location}</p>
              <p className="font-light text-xs">{item.description}</p>
            </div>
          ))}
        </div>

      </section>





    </main>
  );
}
