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
          <div></div>

          {/**followers section*/}
          <div></div>
        </section>
      </div>
    </div>
  )
}
export default Home