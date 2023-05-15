import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [expandedBlogId, setExpandedBlogId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.questions))
    }, []);

    const toggleAnswer = (id) => {
        setExpandedBlogId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className='pb-14'>
            <div className='flex justify-center items-center h-96 mb-5 bg-gray-100'>
                <h4 className='md:text-5xl text-4xl font-bold capitalize'>Welcome to awesome blogs</h4>
            </div>
            <div className='md:grid md:grid-cols-2 grid-cols-1 gap-4'>
                {blogs.map(blog => (
                    <div className='p-5 bg-gray-100 rounded-lg md:mb-0 mb-6' key={blog.id}>
                        <img className='w-full h-96 rounded-lg' src={blog.picture} alt='' />
                        <h4 className='text-2xl font-bold py-5'>{blog.question}</h4>
                        <p className={`text-lg font-semibold ${expandedBlogId === blog.id ? 'block' : 'overflow-hidden'
                            }`}
                            style={{ maxHeight: expandedBlogId === blog.id ? 'none' : '5.6rem' }}>
                            {blog.answer}
                        </p>
                        {blog.answer.length > 200 && (
                            <button
                                className='text-blue-500 font-semibold mt-2'
                                onClick={() => toggleAnswer(blog.id)}
                            >
                                {expandedBlogId === blog.id ? 'See Less' : 'See More'}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
