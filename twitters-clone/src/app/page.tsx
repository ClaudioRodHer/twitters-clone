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
        <section className=" w-full  flex flex-col items-stretch h-screen px-6 ml-auto sticky top-0">

          {/**search input*/}
          <div>
            <div className="relative w-full h-full">
              <label htmlFor="SearchBox" className="absolute top-0 left-0 h-full flex items-center justify-center">
                <BsSearch className="w-5 h-5 text-gray-500"/>
              </label>
              <input placeholder="Search" type="text" name="SearchBox" id="SearchBox"
               className="outline-none bg-transparent border-none w-full h-full rounded-xl py-4 px-8" />
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