import React from 'react'
import G1 from '../assets/gallery/gallery1.jpg'
import G2 from '../assets/gallery/gallery2.jpg'
import G3 from '../assets/gallery/gallery3.jpg'
import G4 from '../assets/gallery/gallery4.jpg'
import G5 from '../assets/gallery/gallery5.jpg'
import G6 from '../assets/gallery/gallery6.jpg'
import G7 from "../assets/gallery/gallery7.jpg"
import G8 from "../assets/gallery/gallery8.jpg"
import G9 from "../assets/gallery/gallery9.jpg"
import G10 from "../assets/gallery/gallery10.jpg"
import G11 from '../assets/gallery/gallery11.jpg'
import G12 from '../assets/gallery/gallery12.jpg'
import G13 from '../assets/gallery/gallery13.jpg'
import G14 from '../assets/gallery/gallery14.jpg'
import G15 from '../assets/gallery/gallery15.jpg'
import G16 from '../assets/gallery/gallery16.jpg'
 import G17 from "../assets/gallery/gallery17.jpg"
import G18 from "../assets/gallery/gallery18.jpg"
import G19 from "../assets/gallery/gallery19.jpg"
import G20 from "../assets/gallery/gallery20.jpg"
import G21 from '../assets/gallery/gallery21.jpg'
import G22 from '../assets/gallery/gallery22.jpg'
import G23 from '../assets/gallery/gallery23.jpg'
import G24 from '../assets/gallery/gallery24.jpg'
import G25 from '../assets/gallery/gallery25.jpg'
import G26 from '../assets/gallery/gallery26.jpg'
 import G27 from "../assets/gallery/gallery27.jpg"
import G28 from "../assets/gallery/gallery28.jpg"
import G29 from "../assets/gallery/gallery29.jpg"
import G30 from "../assets/gallery/gallery30.jpg"

export default function Gallery() {
  const images = [
G1 ,G2,G3,G4,G5,G6,G7,G8,G9,G10,G11,G12,G13,G14,G15,G16,G17,G18,G19,G20,G21,G22,G23,G24,G25,G26,G27,G28,G29,G30,
  
  ];

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-center text-[#329BD5]   mb-6">Memories</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 rounded-2xl lg:columns-4 gap-4 space-y-4">



        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid rounded-lg overflow-hidden shadow-lg">
            <img src={src} alt= " images" className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}