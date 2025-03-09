import React, {useState} from 'react'
import { Plus,Minus, MoveRight,} from 'lucide-react'






const QnS = ({ qn,description}) => {

    const [isOpen,setIsOpen] = useState(false)


    const toggleButton = () => {
      setIsOpen(!isOpen);
    }

    return(
        <>


        <div className='bg-gray-600 text-white  justify-between'>
           
<div className='flex flex-row justify-between'>
<h3 className="text-sm text-justify p-2 font-semibold  xl:text-3xl xl:p-4">{qn}</h3>     
            
            <button onClick={toggleButton} className='text-5xl' >
                {isOpen ? <Minus />:<Plus/>}
            </button>
            
</div>
            
           

            {isOpen && 
            <div className='bg-gray-600 p-2 border-t-2
            text-justify'>
                {description}
                </div>}
                </div>
        </>
    );
};

const Info = () => {
    const question = [
        {
            qn:"How does the sdg foundation work?",
            
            description: "We work to identify and preserve lesser-known cultural sites, traditions, and artifacts. Our programs aim to raise awareness and foster appreciation for hidden heritage by involving communities and promoting these treasures on national and global platforms.",
        },
        {
            qn:"Are there any additional fees?",
            description: " Most of our activities, including exhibitions and workshops, are free of charge. However, some specialized programs or tours may have a nominal fee to cover operational costs.",
        },
        {
            qn:"How does the sdg foundation work?",
            description: " You can participate by attending our events, volunteering for heritage restoration projects, or joining our workshops. Stay updated through our website and social media to know about upcoming opportunities.",
        },
        {
            qn:"How does the sdg foundation work?",
            description: " Our primary focus is on discovering hidden heritage sites and safeguarding endangered traditions. We organize community-driven projects, educational campaigns, and exhibitions to bring national heritage to the forefront.",
        },
    ];





  return (
<>
<div className='bg-blue-400 text-white p-4 gap-2 lg:flex lg:flex-row lg:p-10  '>
<div className='lg:w-1/2 xl:text-3xl'>
    <h1 className='text-xl font-semibold text-center lg:text-2xl xl:text-4xl'>You got Questions?</h1>
    <p className='text-justify text-xl m-1 xl:text-3xl'>The SDG Foundation is committed to uncovering hidden heritage and showcasing the rich potential of our national heritage through various programs and initiatives. Below, we've answered some of the most common questions you might have.</p>

<span>    <button className='text-2xl ' >FAQs</button><MoveRight /></span>
</div>
    <div className="flex flex-col p-6 gap-1 bg-blue-400 lg:flex-col lg:w-200   ">
      {question.map((question, index) => (
        <QnS key={index} {...question} />
      ))}
    </div>
</div>
</>
    
  );
};
  export default  Info
