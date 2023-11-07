import LeftSidebar from "@/components/LeftSidebar"
import MainComponent from "@/components/MainComponent"
import RightSection from "@/components/RightSection"




export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        {/**left side bar navigation/ header*/}
        <LeftSidebar />
        {/**main section*/}
        <MainComponent />
        {/**right section*/}
        <RightSection/>
      </div>
    </div>
  )
}
export default Home