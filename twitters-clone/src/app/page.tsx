import {BiHomeCircle} from 'react-icons/bi'
import {HiOutlineHashtag} from 'react-icons/hi'
import {BsBell, BsTwitter} from 'react-icons/bs'
import {HiEnvelope} from 'react-icons/hi2'
import {BsBookmark} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {CiCircleMore} from 'react-icons/ci'
import Link from 'next/link'


const NAVIGATION_ITEMS=[
  {
    title:'Home',
    icon:BiHomeCircle
  },
  {
    title:'Explore',
    icon:HiOutlineHashtag
  },
  {
    title:'Notifications',
    icon:BsBell
  },
  {
    title:'Messages',
    icon:HiEnvelope
  },
  {
    title:'Bookmarks',
    icon:BsBookmark
  },
  {
    title:'Profile',
    icon:BiUser
  },
  {
    title:'More',
    icon:CiCircleMore
  }

]
export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/**left side bar navigation/ header*/}

        <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
          <Link href={'/'} className="p-2 text-2xl">
           <BsTwitter/>
          </Link>
          {
            NAVIGATION_ITEMS.map((item)=>(
              /*los links se deben definir*/
              <Link 
              className="hover:bg-white/10 text-2xl transition duration-200 
              flex items-center justify-start w-fit space-x-2 rounded-3xl 
              py-2 px-6" 
              href={`/${item.title.toLowerCase()}`} 
              key={item.title}>
                <div> 
                  <item.icon/>
                </div>
                <div>
                  {
                    item.title
                  }
                </div>
              </Link>
            ))
          }
        </section>
        
        {/*<main>Home Time line</main>
        <section>right section</section>*/}
      </div>
    </div>
  )
}
export default Home