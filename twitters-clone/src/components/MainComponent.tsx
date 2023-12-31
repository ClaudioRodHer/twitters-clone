import { BsChat, BsDot, BsThreeDots } from "react-icons/bs"
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai"
import { IoShareOutline, IoStatsChart } from "react-icons/io5"

import React from 'react'

const MainComponent = () => {
    return (
        <main className="flex w-[50%] max-w-[600px] h-full min-h-screen flex-col 
border-l-[0.5px] border-r-[0.5px] border-gray-600">

            <h1 className="text-xl font-bold  p-6 backdrop-blur bg-black/10 sticky top-0">
                Home
            </h1>

            {/* seccion del top para publicar tweet/post */}
            <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">

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
                        <div
                            key={i}
                            className="border-b-[0.5px] p-2 flex space-x-4 border-gray-600">
                            <div>
                                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                            </div>

                            <div className="flex flex-col ">
                                {/**usuario y hora publicacion */}
                                <div className="flex items-center w-full justify-between">
                                    <div className="flex items-center space-x-1 w-full">
                                        <div className="font-bold">Claudio Rod</div>
                                        <div className="text-gray-500">@claudiorod</div>
                                        <div className="text-gray-500">
                                            <BsDot />
                                        </div >
                                        <div className="text-gray-500">1 hour</div>
                                    </div>
                                    <div> <BsThreeDots /> </div>
                                </div>

                                {/**contenido tweet*/}
                                <div className="text-white text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, placeat!
                                    Quisquam repudiandae minus delectus fugit mollitia vero rerum maxime expedita
                                    accusantium suscipit modi veniam eos quam, ut at! Soluta, nostrum!
                                </div>
                                {/**media tweet */}
                                <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2">

                                </div>
                                {/**comentar,retweet,like,share */}
                                <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                                        <BsChat />
                                    </div>
                                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                                        <AiOutlineRetweet />
                                    </div>
                                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                                        <AiOutlineHeart />
                                    </div>
                                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                                        <IoStatsChart />
                                    </div>
                                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                                        <IoShareOutline />
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))
                }

            </div>
        </main>
    )
}

export default MainComponent