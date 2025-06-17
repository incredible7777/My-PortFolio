// import React from 'react';

const educationData = [
  {
    logo: 'Pic/vidhya-bharti-logo-png_seeklogo-501143.png',
    title: 'JDSVM Inter College, Prayagraj',
    subtitle: 'Intermediate',
    date: '2020-2022',
    side: 'left',
  },
  {
    logo: 'Pic/IIIT_Kota-6cf82b4c (1).png',
    title: 'Indian Institute of Information Technology, Kota, Rajasthan',
    subtitle: 'B.Tech. in Computer Science',
    date: '2023 - 2027',
    side: 'right',
  },
  // Add more entries here if needed
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold flex items-center justify-center mb-12">
        <span className="relative flex items-center justify-center mr-3">
          {/* Removed solid dot */}
          {/* <span className="absolute inline-flex h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 via-blue-400 to-cyan-400 opacity-70 animate-pulse"></span> */}
        </span>
        Education
      </h2>
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400 transform -translate-x-1/2 z-0"></div>
        <div className="flex flex-col gap-24">
          {educationData.map((item, idx) => (
            <div key={idx} className={`flex items-center w-full relative group ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}>
              {/* Left side card */}
              {item.side === 'left' && (
                <>
                  <div className="w-1/2 pr-8 flex justify-end">
                    <div className="relative">
                      {/* Connector line from dot to card */}
                      <div className="absolute right-[-32px] top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 z-10"></div>
                      <div className="inline-block bg-[#112240] p-6 rounded-lg shadow-lg transition transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:ring-4 group-hover:ring-blue-600/40">
                        <img src={item.logo} alt="Logo" className="w-14 h-14 mx-auto mb-3 rounded-full shadow-md border-2 border-blue-500" />
                        <h3 className="text-xl font-semibold text-blue-400">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.subtitle}</p>
                        <p className="text-sm text-gray-400">{item.date}</p>
                      </div>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="w-0 flex flex-col items-center z-20">
                    <span className="relative">
                      {/* Removed solid dot */}
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 via-blue-400 to-cyan-400 opacity-70 animate-pulse -left-3 -top-3"></span>
                    </span>
                  </div>
                  <div className="w-1/2"></div>
                </>
              )}
              {/* Right side card */}
              {item.side === 'right' && (
                <>
                  <div className="w-1/2"></div>
                  {/* Timeline Dot */}
                  <div className="w-0 flex flex-col items-center z-20">
                    <span className="relative">
                      {/* Removed solid dot */}
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 via-blue-400 to-cyan-400 opacity-70 animate-pulse -left-3 -top-3"></span>
                    </span>
                  </div>
                  <div className="w-1/2 pl-8 flex justify-start">
                    <div className="relative">
                      {/* Connector line from dot to card */}
                      <div className="absolute left-[-32px] top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-l from-blue-500 to-cyan-400 z-10"></div>
                      <div className="inline-block bg-[#112240] p-6 rounded-lg shadow-lg transition transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:ring-4 group-hover:ring-blue-600/40">
                        <img src={item.logo} alt="Logo" className="w-14 h-14 mx-auto mb-3 rounded-full shadow-md border-2 border-blue-500" />
                        <h3 className="text-xl font-semibold text-blue-400">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.subtitle}</p>
                        <p className="text-sm text-gray-400">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;