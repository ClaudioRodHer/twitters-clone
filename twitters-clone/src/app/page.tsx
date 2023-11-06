import LeftSidebar from "@/components/LeftSidebar"
import MainComponent from "@/components/MainComponent"



export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/**left side bar navigation/ header*/}
        <LeftSidebar />
        {/**main section*/}
        <MainComponent />
        {/**right section*/}
        <section className="fixed flex flex-col space-y-4">
          <div></div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  )
}
export default Home