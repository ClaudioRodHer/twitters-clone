import LeftSidebar from "@/components/LeftSidebar"
import MainComponent from "@/components/MainComponent"
import { BsSearch } from "react-icons/bs"



export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        {/**left side bar navigation/ header*/}
        <LeftSidebar />
        {/**main section*/}
        <MainComponent />
        {/**right section*/}
        <section className=" w-full mt-2 flex flex-col items-stretch h-screen px-6 ml-auto sticky top-0">

          {/**search input*/}
          <div>
            <div className="relative w-full h-full group">
             
              <input placeholder="Search twitter" type="text" name="SearchBox" id="SearchBox"
               className="outline-none peer bg-neutral-900/90  w-full h-full rounded-xl py-4 pl-14 pr-4
               focus:border-primarytwitter border focus:border-2" />

                <label htmlFor="SearchBox" 
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4
                peer-focus:text-primarytwitter ">

                <BsSearch className="w-5 h-5" />
              </label>
            </div> 
          </div>

          {/**trending section*/}
          <div className="flex flex-col rounded-xl bg-neutral-900  my-4">{/**en esta linea hace que el hover salga con margene s y redondeado*/}
            <h3 className="font-bold text-xl my-2 px-4">What's happening</h3>
            <div>
              {
                Array.from({length:5}).map((_,i)=>(/*array creado apra poder simular 5 elementos de trending*/
                  <div 
                  key={i} 
                  className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200">
                    <div className="font-bold text-lg">#Trending  {i+1}</div>
                    <div className="text-xs text-neutral-500">350.5k tweets</div>
                  </div>
                ))
              }
            </div>
          </div>

          {/**followers section*/}
          <div></div>
        </section>
      </div>
    </div>
  )
}
export default Home