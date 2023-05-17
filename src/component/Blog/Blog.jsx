import React, { useEffect, useState } from 'react';
import Pdf from "react-to-pdf";

// import "./styles.css";
const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'px',
    format: [800, 400]
};

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [expandedBlogId, setExpandedBlogId] = useState(null);

    useEffect(() => {
        fetch('https://slice-of-spice-server-nazmulayyan.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.questions))
    }, []);

    const toggleAnswer = (id) => {
        setExpandedBlogId(prevId => (prevId === id ? null : id));
    };


    // const handlePrint = useReactToPrint({
    //     content: () => document.getElementById('blog-content'),
    //   });

    return (
        <div className='pb-14'>
            <div className='flex justify-center items-center h-96 mb-5 bg-gray-100'>
                <h4 className='md:text-5xl text-4xl font-bold capitalize'>Welcome to awesome blogs</h4>
            </div>

            <Pdf targetRef={ref} options={options} filename="code-example.pdf">
                {({ toPdf }) => <button className='py-3 px-5 bg-rose-500 text-white font-semibold rounded-lg' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref} className='p-5'>
                <div className='p-5 mb-5 bg-rose-500 rounded-lg mt-5' >
                    <h3 className='text-white text-2xl'>This will download as a pdf file.</h3>
                    <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate esse facere a illum distinctio ratione neque, sunt dicta ipsum perferendis.</p>
                </div>
            </div>




            <div className='md:grid md:grid-cols-2 grid-cols-1 gap-4'>
                {blogs.map(blog => (
                    <div id='blog-content' className='p-5 bg-gray-100 rounded-lg md:mb-0 mb-6' key={blog.id}>
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
