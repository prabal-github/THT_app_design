'use client';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Image from 'next/image'
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
import readingTime from 'reading-time'
import Moment from 'react-moment'

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://the-hit-times-admin-production.up.railway.app/api/posts?limit=10",
    fetcher
  );
  const categories = ['Monday Hues',
    'Campus Raid', 'Thursday Article', 'Funny Friday', 'Viral Corner', 'Word Worth Millions', 'College Heracles', 'Nanotips', 'Vernacular']
  return (
    <main className=''>
      <Header />
      <div className='p-2'>
        {!isLoading && <div className='flex gap-2 p-2 justify-center items-center overflow-x-scroll scrollbar-hide w-full'>
          {categories.map((category) => (
            <div key={category} className='border-2 rounded-xl px-2 py-1 w-full'>
              {category}
            </div>
          ))}
        </div>}
        <div className='h-full'>
          {!isLoading && data.map((post) => (
            <div key={post._id} className='flex bg-purple-300 my-5 items-center justify-center rounded-2xl shadow-lg gap-3'>
              <div className='w-1/2'>
                <img src={post.link} className=' rounded-l-2xl' />
              </div>
              <div className='w-2/3 p-5 h-full flex flex-col justify-center gap-3'>
                <div>
                  <div className='font-bold text-lg'>{post.title}</div>
                  <div className='line-clamp-3'>{post.body}</div>
                </div>
                <div className='flex gap-2 text-xs'>
                  <span>
                    <Moment date={post.updatedAt} format='MMM DD' />
                  </span>
                  <div className='mx-1.5'>&#x2022;</div>
                  <div className='text-xs'>
                    {readingTime(post.body).text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav aria-label="Page navigation example" className='mb-10 flex items-center justify-center'>
        <ul className="inline-flex -space-x-px">
          <li>
            <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul>
      </nav>

      <Footer />
    </main>
  )
}