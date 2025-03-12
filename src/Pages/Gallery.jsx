import React from 'react'

export default function Gallery() {
  const images = [
    "/src/assets/gallery/gallery2.jpg",
   "/src/assets/gallery/gallery3.jpg ",
   "/src/assets/gallery/gallery4.jpg",
   "/src/assets/gallery/gallery5.jpg ",
   "/src/assets/gallery/gallery6.jpg",
   "/src/assets/gallery/gallery7.jpg ",
   "/src/assets/gallery/gallery8.jpg ",
   "/src/assets/gallery/gallery9.jpg ",
  "/src/assets/gallery/gallery10.jpg ",
  "/src/assets/gallery/gallery11.jpg ",
  "/src/assets/gallery/gallery12.jpg ",
  "/src/assets/gallery/gallery13.jpg ",
  "/src/assets/gallery/gallery14.jpg" ,
  "/src/assets/gallery/gallery15.jpg ",
  "/src/assets/gallery/gallery16.jpg" ,
  "/src/assets/gallery/gallery17.jpg ",
  "/src/assets/gallery/gallery18.jpg ",
  "/src/assets/gallery/gallery19.jpg",
  "/src/assets/gallery/gallery20.jpg",
  "/src/assets/gallery/gallery21.jpg",
  "/src/assets/gallery/gallery22.jpg ",
  "/src/assets/gallery/gallery23.jpg",
  "/src/assets/gallery/gallery24.jpg ",
  "/src/assets/gallery/gallery25.jpg",
  "/src/assets/gallery/gallery26.jpg ",
  "/src/assets/gallery/gallery27.jpg ",
  "/src/assets/gallery/gallery28.jpg ",
 "/src/assets/gallery/gallery29.jpg ",
 "/src/assets/gallery/gallery30.jpg ",
 "/src/assets/gallery/gallery31.jpg ",
 "/src/assets/gallery/gallery32.jpg ",
 "/src/assets/gallery/gallery33.jpg" ,
 "/src/assets/gallery/gallery34.jpg ",
 "/src/assets/gallery/gallery35.jpg" ,
 "/src/assets/gallery/gallery36.jpg ",
 "/src/assets/gallery/gallery37.jpg ",
 "/src/assets/gallery/gallery38.jpg",
 "/src/assets/gallery/gallery39.jpg",
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