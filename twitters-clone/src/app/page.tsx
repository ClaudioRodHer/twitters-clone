import {BiHomeCircle} from 'react-icons/bi'
import {HiOutlineHashtag} from 'react-icons/hi'
import {BsBell} from 'react-icons/bs'
import {HiEnvelope} from 'react-icons/hi2'
import {BsBookmark} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
import {CiCircleMore} from 'react-icons/ci'
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
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-scree-lg w-full h-full flex relative '>
        {/**left side bar navigation/ header */}
        <section className='fixed w-72 flex flex-col'>left section
          {
            NAVIGATION_ITEMS.map((item)=>(
              <link className='bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4' href={`/${item.title.toLowerCase}`} key={item.title}>
                <div> 
                  <item.icon />
                </div>
                <div>
                  {
                    item.title
                  }
                </div>
              </link>
            ))
          }
        </section>
        <main>Home Time line </main>
        <section>right section</section>
      </div>
    </div>
  )
}
export default Home