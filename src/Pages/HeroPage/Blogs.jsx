import React, {useState} from 'react'


const BlogCard = ({ Image,Heading, name, description, link  }) => {

    return (
<>
<div className="w-screen justify-between rounded-xl  overflow-hidden shadow-lg border-4 bg-blue-400 text-white flex flex-col md:w-1/3 md:flex-col lg:w-1/4 lg:grid-cols ">
  <div className='w-full'>
  <img className=" h-65  w-full" src={Image} alt="Blog Cover" />
  </div>
    
    <div className="p-2">
 
      <h2 className="text-xl text-justify font-bold space-y-3 mb-3">{Heading}</h2>

   
      <h3 className="text-md text-justify font-bold mb-3">{name}</h3>

      <p className="text-justify mb-4">{description}</p>

      <a href={link} className="inline-block bg-white text-center cursor-pointer text-blue-400  rounded-sm mb-2 w-full transition">
        Read More
      </a>
    </div>
  </div>

  <div>
    {/* <button className='p-2 px-5 bg-blue-400  rounded-lg'>More Blogs</button> */}
  </div>
</>
      
    );
  };

const BlogList = () =>{

    const blog = [
        {
            Image:"./src/assets/c9.jpeg",
            Heading: "Nepal's  Hidden Heritage",
            name: "15 Tentative World Heritage Sites That Deserve More Attention",
            description :"places like Kathmandu Durbar Square, Lumbini, or Sagarmatha National Park. But did you know .. ",
       link: "#",
        },
      
            {
                Image:"./src/assets/kritipur.jpg",
                Heading: "Kritipur-",
                name: "15 Tentative World Heritage Sites That Deserve More Attention",
                description :" like Kathmandu Durbar Square, Lumbini, or Sagarmatha National Park. But did you know..",
                link: "#",
            },
                {
                    Image:"./src/assets/kokhana.jpg",
                    Heading: "Kkhokhana",
                    name: "15 Tentative World Heritage Sites That Deserve More Attention",
                    description :" like Kathmandu Durbar Square, Lumbini, or Sagarmatha National Park. But did you know.. ",
                },
  
                    {
                        Image:"./src/assets/cave.jpg",
                        Heading: "The Caves's of Upper Mustang",
                        name: "15 Tentative World Heritage Sites That Deserve More Attention",
                        description :" like Kathmandu Durbar Square, Lumbini, or Sagarmatha National Park. But did you know ",
                       
                    },
    ];

    let renderBlog;
    
    if(screen.width<640){
      renderBlog=blog.filter((Blogs, index)=>index===0)
    }else if(screen.width<768){
      renderBlog=blog.filter((blogs, index)=>index<=1)
    }else if(screen.width<1280){
      renderBlog=blog.filter((blogs, index)=>index<=2)
    }else{
      renderBlog=blog.filter((blogs, index)=>index<=3)
    }
    


  return (
    <div className="flex flex-wrap flex-row gap-3  justify-center  bg-gray-100 lg:flex-row ">
      {blog.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};


export default BlogList