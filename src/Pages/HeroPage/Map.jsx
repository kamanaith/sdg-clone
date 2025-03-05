import React from "react";

function Map() {
  return (
    <>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5518372284278!2d85.3770725752535!3d27.700243176186625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1ba2d8b45f63%3A0x930215b0edb5ab71!2sTimro%20ghar!5e0!3m2!1sen!2snp!4v1740904101751!5m2!1sen!2snp"
         className="w-screen"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
