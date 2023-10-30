import LeftSidebar from "@/components/LeftSidebar"
import { BsDot } from "react-icons/bs"

export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/**left side bar navigation/ header*/}
        <LeftSidebar />
        {/**main section*/}
        <main className="ml-[275px]  flex w-[600px] h-full min-h-screen flex-col 
        border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold my-4 p-6">Home</h1>
          {/* seccion del top para publicar tweet/post */}
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2
           border-gray-600 relative">
            {/*icono del logo de l usuario*/}
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            {/*contenido par atwittear botones e iconos*/}
            <div className="flex flex-col w-full h-full">
              {/*caja de texto para tweet*/}
              <input type="text" name="" id="" placeholder="¡¿What's happening?!"
                className="w-full h-full bg-transparent outline-none border-none
              border-b-[0.5px] border-gray-600 p-4
              text-2xl placeholder:text-gray-600"/>

              {/*iconos y boton de tweetear*/}
              <div className="w-full justify-between items-center flex">
                <div></div>
                {/*botton twittear*/}
                <div className="w-full max-w-[100px]">
                  <button className="w-full rounded-full bg-primarytwitter  
                  text-lg text-center px-4 py-2
                  hover:bg-opacity-70 transition duration-200 font-bold">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* seccion donde se ven los tweet/post la time line */}
          <div className="flex flex-col">
            {
              /**hace el loop para poder hacer la repeticion ede los divs */
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4 py-4">
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  </div>

                  <div className="flex flex-col space-y-4 ">
                    <div className="flex items-center space-x-1">
                      <div>Claudio_Rod</div>
                      <div>@claudiorod</div>
                      <div>
                        <BsDot />
                      </div>
                      <div>1 hour</div>
                    </div>
                    <div className="text-white text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, placeat! Quisquam repudiandae minus delectus fugit mollitia vero rerum maxime expedita accusantium suscipit modi veniam eos quam, ut at! Soluta, nostrum!
                    </div>
                    <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl">

                    </div>

                    <div className="flex items-center space-x-2 w-full">
                      <div>C</div>
                      <div>R</div>
                      <div>L</div>
                      <div>S</div>
                      <div>SH</div>
                    </div>


                  </div>
                </div>
              ))
            }

          </div>
        </main>

        <section>right section</section>
      </div>
    </div>
  )
}
export default Home