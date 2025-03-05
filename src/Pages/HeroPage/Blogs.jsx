import React, {useState} from 'react'


const BlogCard = ({ Image,Heading, name, description, link  }) => {



    return (


<>
<div className="w-screen max-h-160  rounded-xl m-5 overflow-hidden shadow-lg border-4 bg-blue-400 text-white flex flex-col md:flex-col md:w-1/3 lg:grid-cols lg:1/3 ">
    
  <div className='w-full'>
  <img className=" h-70  w-fit p-4" src={Image} alt="Blog Cover" />
  </div>
    
    <div className="p-2">
 
      <h2 className="text-xl text-justify font-bold space-y-3 mb-3">{Heading}</h2>

   
      <h3 className="text-md text-justify font-bold mb-3">{name}</h3>

      <p className="text-justify mb-4">{description}</p>

      <a href={link} className="inline-block bg-white text-center cursor-pointer text-blue-400 px-4 py-2 rounded-sm mb-4 w-full transition">
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
            description :"When people think of Nepal’s heritage, they mostly think of places like Kathmandu Durbar Square, Lumbini, or Sagarmatha National Park. But did you know Nepal has 15 incredible sites ",
       link: "#",
        },
      
            {
                Image:"./src/assets/kritipur.jpg",
                Heading: "Kritipur- Hidden Gem Waiting for its Spotlight",
                name: "15 Tentative World Heritage Sites That Deserve More Attention",
                description :"When people think of Nepal’s heritage, they mostly think of places like Kathmandu Durbar Square, Lumbini, or Sagarmatha National Park. But did you know Nepal has 15 incredible sites ",
                link: "#",
            },
                {
                    Image:"./src/assets/kokhana.jpg",
                    Heading: "Kkhokhana- Where Dashain isn't Celebrated",
                    name: "15 Tentative World Heritage Sites That Deserve More Attention",
                    description :"When people think of Nepal’s heritage, they mostly think of places like Kathmandu Durbar Square, Lumbini, or Sagarmatha National Park. But did you know Nepal has 15 incredible sites ?",
                    link: "#",
                },
  
                    // {
                    //     Image:"./src/assets/cave.jpg",
                    //     Heading: "The Caves's of Upper Mustang",
                    //     name: "15 Tentative World Heritage Sites That Deserve More Attention",
                    //     description :"When people think of Nepal’s heritage, they mostly think of places like Kathmandu Durbar Square, Lumbini, or Sagarmatha National Park. But did you know Nepal has 15 incredible sites sitting on UNESCO’s tentative list for years—some since 1996?",
                    //     link: "#",
                    // },
    ];

    let renderBlog;
    
    if(screen.width<768){
      renderBlog=blog.filter((blogs, index)=>index===0)
    }else if(screen.width<1024){
      renderBlog=blog.filter((blogs, index)=>index<=1)
    }else{
      renderBlog=blog.filter((blogs, index)=>index<=2)
    }
    


  return (
    <div className="flex flex-wrap flex-row gap-6  justify-center p-6 bg-gray-100 lg:flex-row">
      {blog.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};


export default BlogList