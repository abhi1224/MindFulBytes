import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blog_data }  from '../assets/MindFulBytes-assests/assets.js'
import gradientBackground from '../assets/MindFulBytes-assests/gradientBackground.png'
import Loader from '../components/Loader.jsx';


function Blog() {
  const {id} = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const data = blog_data.find(item => item._id === id);
    setData(data)
  }
  useEffect(() => {
    fetchBlogData();
  }, [])
  
  return data ? (
    <>
      <div className='relative'>
        <img 
          src={gradientBackground} 
          alt="Body background"                 
          className='absolute -top-50 -z-1 opacity-50'
        />
        <div className='text-center mt-20 text-gray-600'>
          <p className='text-primary py-4 font-medium'>Published on {data.createdAt}</p>
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">{data.title}</h1>
          <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
          <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Robert Steve</p>
        </div>

        <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
          <img 
            src={data.image} 
            alt="Thumbnail image"             
            className='rounded-3xl mb-5'
          />
          <div className="rich-text mx-auto max-w-3xl" dangerouslySetInnerHTML={{__html: data.description}}></div>
        </div>

        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          {/* Comment Section */}
          <div className="max-w-3xl mx-auto">
            <p className="font-semibold mb-4">Add your comment</p>
            <form className='flex flex-col items-start gap-4 max-w-lg'>
              <input 
                type="text"
                placeholder='Name' 
                required
                className='w-full p-2 border border-gray-300 rounded outline-none' 
              />
              <textarea 
                placeholder='Comment'
                className='w-full p-2 border border-gray-300 rounded outline-none h-48'
                required
              >

              </textarea>
              <button 
                type="submit"
                className='bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'
                >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : <Loader />
}

export default Blog