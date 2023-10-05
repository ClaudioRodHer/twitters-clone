import LeftSidebar from "@/components/LeftSidebar"

export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/**left side bar navigation/ header*/}
          <LeftSidebar />
        {/**main section*/}
        <main>Home Time line</main>
        <section>right section</section>
      </div>
    </div>
  )
}
export default Home