import React from 'react';

export default function Gallery() {
  const images = [
    {
      src: "/images/im25.jpg",
      title: "Discipline + determination + dedication = success"
    },
    {
      src: "/images/im1.jpg",
      title: "2006-2007, 30th state level inter polytechnic sports meet"
    },
    {
      src: "/images/im2.jpg",
      title: "2009-2010, 33rd state level inter polytechnic sports meet\n@ Mangalore\nunder the captaincy of Manikantan"
    },
    {
      src: "/images/im3.jpg",
      title: "2010-2011 34th state level inter polytechnic sports meet\n@ Davanagere\nunder the captaincy of Jithesh"
    },
    {
      src: "/images/im4.jpg",
      title: "2011-2012 35th state level inter polytechnic sports meet\n@ Chikkodi\nunder the captaincy of Devraj"
    },
    {
      src: "/images/im5.jpg",
      title: "2012-2013 36th state level inter polytechnic sports meet\n@ Tumkur\nunder the captaincy of Ashok"
    },
    {
      src: "/images/im6.jpg",
      title: "2013-2014 37th state level inter polytechnic sports meet\n@ Mangalore\nunder the captaincy of Anitha"
    },
    {
      src: "/images/im7.jpg",
      title: "2014-2015 38th state level inter polytechnic sports meet\n@ Chikkballapura\nunder the captaincy of Darshan"
    },
    {
      src: "/images/im8.jpg",
      title: "2015-2016 39th state level inter polytechnic sports meet\n@ Karkala\nunder the captaincy of Jeevan"
    },
    {
      src: "/images/im9.jpg",
      title: "2016-2017 40th state level inter polytechnic sports meet\n@ Ramnagar\nunder the captaincy of Jeevan"
    },
    {
      src: "/images/im10.jpg",
      title: "2017-2018 41st state level inter polytechnic sports meet\n@ Bangalore\nunder the captaincy of Kaushik"
    },
    {
      src: "/images/im11.jpg",
      title: "2018-2019 42nd state level inter polytechnic sports meet\n@ Hasan\nunder the captaincy of Shivaraj"
    },
    {
      src: "/images/im12.jpg",
      title: "2019-2020 43rd state level inter polytechnic sports meet\n@ Bagalkote\nunder the captaincy of Vishwa"
    },
    {
      src: "/images/im13.jpg",
      title: "2023-2024 44th state level inter polytechnic sports meet\n@ Mysore\nunder the captaincy of Abhishek Miranda"
    },
    {
      src: "/images/im14.jpg",
      title: "2024-2025 45th state level inter polytechnic sports meet\n@ Mangalore\nunder the captaincy of Samith"
    },
    {
      src: "/images/im15.jpg",
      title: "Photo 16"
    },
    {
      src: "/images/im16.jpg",
      title: "College sports meet"
    },
    {
      src: "/images/im17.jpg",
      title: "Photo 18"
    },
    {
      src: "/images/im18.jpg",
      title: "Kpt sports family"
    },
    {
      src: "/images/im19.jpg",
      title: "Photo 20"
    },
    {
      src: "/images/im20.jpg",
      title: "Photo 21"
    },
    {
      src: "/images/im21.jpg",
      title: "Photo 22"
    },
    {
      src: "/images/im22.jpg",
      title: "Photo 23"
    },
    {
      src: "/images/im23.jpg",
      title: "Ayudha Pooja in college"
    },
    {
      src: "/images/im24.jpg",
      title: "Photo 25"
    },
  ];

  return (
    <div
      className="p-8 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
  backgroundImage: `url('/images/bg-background.jpg')`,
  backgroundColor: '#6280c0ff' // fallback color
}}

    >
      <h2 className="text-3xl font-bold text-pink mb-6 text-center drop-shadow-lg">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
            <div className="p-3 text-center font-semibold text-white-700">
              {item.title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
