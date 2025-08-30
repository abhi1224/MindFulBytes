import React from 'react'
import tick_icon from '../../assets/MindFulBytes-assests/tick_icon.svg'
import bin_icon from '../../assets/MindFulBytes-assests/bin_icon.svg'

const CommentTableItem = ({comment, fetchComments}) => {
    const {blog, createdAt, _id} = comment;
    const BlogDate = new Date(createdAt);
  return (
    <>
        <tr className="order-y border-gray-300">
            <td className='px-6 py-4'>
                <b className='font-medium to-gray-600'>Blog</b> : {blog.title}
                <br />
                <br />
                <b className='font-medium to-gray-600'>Name</b> : {comment.name}
                <br />
                <b className='font-medium to-gray-600'>Comment</b> : {comment.content}
            </td>

            <td className='px-6 py-4 max-sm:hidden'>
                {BlogDate.toLocaleDateString()}
            </td>
            <td className='px-6 py-4'>
                <div className="inline-flex gap-4 items-center">
                    {!comment.isApproved                    
                        ?<img src={tick_icon} alt='tick icon' className='w-5 hover:scale-110 transition-all cursor-pointer'/> 
                        : <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p>
                    }
                    <img src={bin_icon} alt="Delete Icon" className='w-5 hover:scale-110 transition-all cursor-pointer'/>
                </div>
            </td>
        </tr>
    </>
  )
}

export default CommentTableItem