import { BiHomeCircle } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { BsBell, BsThreeDots, BsTwitter } from 'react-icons/bs'
import { BsEnvelope } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { CiCircleMore } from 'react-icons/ci'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
    {
      title: 'Twitter',
      icon: BsTwitter
    },
    {
      title: 'Home',
      icon: BiHomeCircle
    },
    {
      title: 'Explore',
      icon: HiOutlineHashtag
    },
    {
      title: 'Notifications',
      icon: BsBell
    },
    {
      title: 'Messages',
      icon: BsEnvelope
    },
    {
      title: 'Bookmarks',
      icon: BsBookmark
    },
    {
      title: 'Profile',
      icon: BiUser
    },
    {
      title: 'More',
      icon: CiCircleMore
    }
  
  ]
const LeftSidebar = () => {
  return (
    <section className="w-[23%] sticky top-0 flex flex-col items-stretch h-screen px-4">
    {/**division para el menu de la izquierda twitter */}
    <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
      {
        NAVIGATION_ITEMS.map((item) => (
          /*los links se deben definir*/
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 
        flex items-center justify-start w-fit space-x-2 rounded-3xl 
        py-2 px-6"
            href={`/${item.title.toLowerCase()}`}
            key={item.title}>
            <div>
              <item.icon />
            </div>
            {/*esta condicion nos dice que cuando el texto sea igual a twitter no va a renderizar el texto*/
              item.title !== "Twitter" &&
              <div>
                {
                  item.title
                }
              </div>
            }
          </Link>
        ))
      }
      <button className="w-full rounded-full bg-primarytwitter p-4 
    text-2xl text-center 
    hover:bg-opacity-70 transition duration-200">
        Tweet
      </button>
    </div>
    {/**division para el ususriuo de la aprte inferior izquierda twitter */}
    <div>
      <button className="rounded-full bg-transparent p-4
      flex items-center space-x-2
      text-center 
      hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          {/**logo de usuariio */}
          <div className="rounded-full bg-slate-400 w-12 h-12">
          </div>
          {/**nombre y correo usuario */}
          <div className="text-left text-xs">
            <div className="font-semibold ">claudio rodriguez</div>
            <div className="">@claudiorod</div>
          </div>
        </div>
        {/**tres puntos menu desplegable */}
        <div>
          <BsThreeDots />
        </div>
      </button>
    </div>
  </section>
  )
}

export default LeftSidebar