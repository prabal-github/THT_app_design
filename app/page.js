'use client';
import Image from 'next/image'
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
import readingTime from 'reading-time'
import { toPlainText } from '@portabletext/react'
import { BellAlertIcon, NewspaperIcon, ArrowTopRightOnSquareIcon, PhotoIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://the-hit-times-admin-production.up.railway.app/api/posts?limit=10",
    fetcher
  );
  const categories = ['Monday Hues',
    'Campus Raid', 'Thursday Article', 'Funny Friday', 'Viral Corner', 'Word Worth Millions', 'College Heracles', 'Nanotips', 'Vernacular']
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <header className='sticky top-1.5 z-20 bg-purple-100 w-full flex justify-between px-5 py-3 items-center rounded-xl shadow-xl'>
        <div className='font-bold text-3xl'>
          The HIT Times
        </div>
        <BellAlertIcon className="h-6 w-6 cursor-pointer" />
      </header>
      <div className='p-2'>
        <div className='flex gap-2 p-2 justify-center items-center overflow-x-scroll scrollbar-hide w-full'>
          {categories.map((category) => (
            <div key={category} className='border-2 rounded-xl px-2 py-1 w-full'>
              {category}
            </div>
          ))}
        </div>
        <div className='h-full'>
          {!isLoading && data.map((post) => (
            <div key={post._id} className='flex bg-purple-300 my-5 items-center justify-center rounded-2xl shadow-lg gap-3'>
              <div className='w-1/2'>
                <img src={post.link} className=' rounded-l-2xl' />
              </div>
              <div className='w-2/3 line-clamp-5 p-5 h-full flex flex-col gap-10 justify-center items-center'>
                <div>
                  <div className='text-center font-bold text-lg'>{post.title}</div>
                  <div className=''>{post.body}</div>
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

      <footer className='sticky bottom-0 z-20 bg-purple-100 w-full flex justify-between px-10 py-3 items-center rounded-xl shadow-xl'>
        <div className='flex flex-col justify-center items-center'>
          <PhotoIcon className="h-6 w-6 cursor-pointer" />
          <div>Weeklies</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <NewspaperIcon className="h-6 w-6 cursor-pointer" />
          <div>News</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <ArrowTopRightOnSquareIcon className="h-6 w-6 cursor-pointer" />
          <div>App Exclusive</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <BellAlertIcon className="h-6 w-6 cursor-pointer" />
          <div>About Us</div>
        </div>
      </footer>
    </main>
  )
}