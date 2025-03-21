import React,{useState} from 'react'
import Prakash from '../../assets/aboutus/prakashAdhikari.png'
import Pranish from '../../assets/aboutus/pranishPokharel.png'
import Manish from '../../assets/aboutus/manishTuladhar.png'
import Nimesh from '../../assets/aboutus/nimeshGurung.png'
import Surajan from '../../assets/aboutus/surajanPokharel.png'
import Utsav from '../../assets/aboutus/utsavPokhrel.png'
import Divyapati from '../../assets/aboutus/divyapatiBhattarai.png'
import Arpana from '../../assets/aboutus/arpanaGhimire.png'
import Anuj from '../../assets/aboutus/anujNeupane.png'
import sponsor1 from '../../assets/sponsers/sponsor1.png'
import sponsor2 from '../../assets/sponsers/sponsor2.png'
import sponsor3 from '../../assets/sponsers/sponsor3.png'
import sponsor4 from '../../assets/sponsers/sponsor4.png'


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
            image: Prakash,
            position:"President",
            name: "Prakash Adhikari",
        },

        {
            image: Pranish,
            position:"Vice-President",
            name: "Pranish Pokhrel",
        },

        {
            image: Manish,
            position:"Secretery",
            name: "Manish Tuladhar",
        },

        {
            image: Nimesh,
            position:"Vice-Secretary",
            name: "Nimesh Gurung",
        },

        {
            image: Surajan,
            position:"Treasurer",
            name: "Surajan Pokhrel",
        },
    ];

    const Bmember = [
        {
            image:Utsav,
            name: "Utsav Pokhrel",
        },

        {
            image: Arpana,
            name: "Arpana Ghimire",
        },

        {
            image: Divyapati,
            name: "Er. Divyapati Bhattarai",
        },

        {
            image: Anuj,
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
<div className='text-[#329BD5] text-center font-semibold mt-3 md:text-start'>
                <h1 className='text-3xl text-center '>Executive Committee</h1>
               </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8   xl:grid-cols-5 ">
              {Member.map((Member, index) => (
                <CommiteeMembers key={index} {...Member} />
              ))}
            </div>

</div>

<div>
<div className='text-[#329BD5] text-center font-semibold mt-3 md:text-start'>
                <h1 className='text-3xl text-center '>Board Members</h1>
               </div>
               <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 pb-5   xl:grid-cols-5 ">
              {Bmember.map((Bmember, index) => (
                <CommiteeMembers key={index} {...Bmember} />
              ))}
            </div> 
    </div> 


    <div>
        <h1 className='text-center text-3xl font-semibold text-[#329BD5] underline-offset-4'>Together For Sustanability</h1>
      
    </div>

    <div className='overflow-hidden'>
   <div className=''>
   <marquee behavior="scroll" direction="left" scrollamount="5" loop="infinite"  >
    <div className='flex flex-row gap-4 p-15'>
    <img src={Anuj} alt="Image 2" width="200px" />
    <img src={Surajan} alt="Image 3" width="200px" />
    <img src={Utsav} alt="Image 4" width="200px" />
    <img src={Prakash} alt="Image 5" width="200px" />
    <img src="./src/assets/sponsorFooter.png" alt="Image 6" width="200px" />
    <img src={sponsor1} alt="Image 7" width="200px" />
    <img src={sponsor2} alt="Image 8" width="200px" />
    <img src={sponsor3} alt="Image 9" width="200px" />
    <img src={sponsor4} alt="Image 10" width="200px" />
    </div>
</marquee>
   </div>
    </div>
        </>

          );
}



export default Members