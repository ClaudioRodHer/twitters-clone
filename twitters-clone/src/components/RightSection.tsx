import React from 'react'
import { BsSearch } from "react-icons/bs"
const RightSection = () => {
    return (
        <section className=" w-full mt-2 flex flex-col items-stretch h-screen px-6 ml-auto 
        sticky top-2 overflow-scroll">

            {/**search input*/}
            <div >
                <div className="relative w-full h-full group ">

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
                        Array.from({ length: 5 }).map((_, i) => (/*array creado apra poder simular 5 elementos de trending*/
                            <div
                                key={i}
                                className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200">
                                <div className="font-bold text-lg">#Trending  {i + 1}</div>
                                <div className="text-xs text-neutral-500">350.5k tweets</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/**followers section*/}
            <div className="flex flex-col rounded-xl bg-neutral-900  my-4">{/**en esta linea hace que el hover salga con margene s y redondeado*/}
                <h3 className="font-bold text-xl my-2 px-4">Who to follow</h3>
                <div>
                    {
                        Array.from({ length: 3 }).map((_, i) => (/*array creado apra poder simular 4 osibles follows*/
                            <div
                                key={i}
                                className="hover:bg-white/10 p-4 flex justify-between items-center 
                                            last:rounded-b-xl transition duration-200"
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                                    <div className="flex flex-col">
                                        <div className="font-bold text-white ">Other user {i + 1}</div>
                                        <div className="text-gray-500 text-xs">@otheruser{i + 1}</div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <button className="rounded-full  px-6 py-2 bg-white text-neutral-950
                                                    hover:bg-neutral-300 transition duration-200" >
                                        Follow
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default RightSection