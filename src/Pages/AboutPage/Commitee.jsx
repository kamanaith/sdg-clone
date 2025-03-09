import React,{useState} from 'react'

const CommiteeMembers = ({image , position , name}) =>{

    return(
<>
<div className='flex flex-col items-center sm:justify-end'>
<div className=' text-center gap-1'>
    <img src={image} alt="image" />
</div>

<div>
<h3 className='text-2xl font-semibold text-center'>{position}</h3>
    </div>
<div>
<h2 className='text-xl font-semibold text-center'>{name}</h2>

</div>
</div>
</>

    );
};

const Members = () => {

    const Member = [
        {
            image:"./src/assets/aboutus/prakashAdhikari.png",
            position:"President",
            name: "Prakash Adhikari",
        },

        {
            image:"./src/assets/aboutus/pranishPokharel.png",
            position:"Vice-President",
            name: "Pranish Pokhrel",
        },

        {
            image:"./src/assets/aboutus/manishTuladhar.png",
            position:"Secretery",
            name: "Manish Tuladhar",
        },

        {
            image:"./src/assets/aboutus/nimeshGurung.png",
            position:"Vice-Secretary",
            name: "Nimesh Gurung",
        },

        {
            image:"./src/assets/aboutus/surajanPokharel.png",
            position:"Treasurer",
            name: "Surajan Pokhrel",
        },
    ];

    const Bmember = [
        {
            image:"./src/assets/aboutus/utsavPokhrel.png",
            name: "Utsav Pokhrel",
        },

        {
            image:"./src/assets/aboutus/arpanaGhimire.png",
            name: "Arpana Ghimire",
        },

        {
            image:"./src/assets/aboutus/divyapatiBhattarai.png",
            name: "Er. Divyapati Bhattarai",
        },

        {
            image:"./src/assets/aboutus/anujNeupane.png",
            name: "Anuj Neupane",
        },

    ]

    let renderElement;

    if(screen.width<640){
        renderElement=Member.filter((Members, index)=>index===0)
      }else if(screen.width<768){
        renderElement=Member.filter((Members, index)=>index<=1)
      }else if(screen.width<1024){
        renderElement=Member.filter((Members, index)=>index<=2)
      }else if (screen.width<1280) {
        renderElement=Member.filter((Members, index)=>index<=3)
      }else{
        renderElement=Member.filter((Members, index)=>index<=4)
      }

    return(
        <>
<div>
<div className='text-blue-400 text-center font-semibold mt-3 md:text-start'>
                <h1 className='text-2xl '>Executive Committee</h1>
               </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8   xl:grid-cols-5 ">
              {Member.map((Member, index) => (
                <CommiteeMembers key={index} {...Member} />
              ))}
            </div>

</div>

<div>
<div className='text-blue-400 text-center font-semibold mt-3 md:text-start'>
                <h1 className='text-2xl '>Board Members</h1>
               </div>
               <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 pb-5   xl:grid-cols-5 ">
              {Bmember.map((Bmember, index) => (
                <CommiteeMembers key={index} {...Bmember} />
              ))}
            </div> 
    </div> 


    <div>
        <h1 className='text-center text-2xl text-blue-400 underline-offset-4'>Together For Sustanability</h1>
      
    </div>

    <div className='overflow-hidden'>
   <div className=''>
   <marquee behavior="scroll" direction="left" scrollamount="5" loop="infinite"  >
    <div className='flex flex-row gap-4 p-15'>
    {/* <img src="./" alt="Image 1" width="200px" /> */}
    <img src="./src/assets/aboutus/anujNeupane.png" alt="Image 2" width="200px" />
    <img src="./src/assets/aboutus/surajanPokharel.png" alt="Image 3" width="200px" />
    <img src="./src/assets/aboutus/utsavPokhrel.png" alt="Image 4" width="200px" />
    <img src="./src/assets/aboutus/prakashAdhikari.png" alt="Image 5" width="200px" />
    <img src="./src/assets/sponsorFooter.png" alt="Image 6" width="200px" />
    <img src="./src/assets/sponsor1.png" alt="Image 7" width="200px" />
    <img src="./src/assets/sponsor2.png" alt="Image 8" width="200px" />
    <img src="./src/assets/sponsor3.png" alt="Image 9" width="200px" />
    <img src="./src/assets/sponsor4.png" alt="Image 10" width="200px" />
    </div>
</marquee>
   </div>
    </div>
        </>

          );
}



export default Members