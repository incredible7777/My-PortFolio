// import React, { useState } from 'react'

// const Experience = () => {
//   const [activeTab, setActiveTab] = useState(0)

//   const experiences = [
//     {
//       company: 'Google',
//       title: 'Senior Software Engineer',
//       duration: 'January 2020 - Present',
//       points: [
//         'Developed and maintained critical features for Google Cloud Platform',
//         'Led a team of 5 engineers in redesigning the authentication system',
//         'Improved application performance by 40% through code optimization',
//         'Implemented CI/CD pipelines reducing deployment time by 60%'
//       ]
//     },
//     // {
//     //   company: 'Microsoft',
//     //   title: 'Software Engineer',
//     //   duration: 'June 2018 - December 2019',
//     //   points: [
//     //     'Built responsive web applications using React and TypeScript',
//     //     'Collaborated with designers to implement pixel-perfect UI components',
//     //     'Optimized database queries improving response time by 30%',
//     //     'Mentored junior developers and conducted code reviews'
//     //   ]
//     // },
//     // {
//     //   company: 'Amazon',
//     //   title: 'Software Developer Intern',
//     //   duration: 'May 2017 - August 2017',
//     //   points: [
//     //     'Developed new features for Amazons internal tool',
//     //     'Created automated testing scripts reducing QA time by 25%',
//     //     'Participated in agile development processes and sprint planning',
//     //     'Received full-time offer after internship completion'
//     //   ]
//     // }
//   ]

//   return (
//     <section id="experience" className="py-20">
//       <h2 className="text-3xl font-bold flex items-center mb-8">
//   <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
//         Where I've Worked
//         <div className="ml-4 flex-1 h-px bg-gray-700"></div>
//       </h2>

//       <div className="flex flex-col md:flex-row gap-4">
//         <div className="md:w-32 flex md:flex-col overflow-x-auto md:overflow-x-visible">
//           {experiences.map((exp, index) => (
//             <button
//               key={exp.company}
//               className={`px-4 py-2 text-sm font-medium border-b-2 md:border-l-2 md:border-b-0 transition-colors duration-300 min-w-[120px] md:min-w-0 ${
//                 activeTab === index
//                   ? 'text-[#64ffda] border-[#64ffda] bg-[#112240]'
//                   : 'text-gray-400 border-gray-700 hover:text-[#64ffda] hover:bg-[#112240]'
//               }`}
//               onClick={() => setActiveTab(index)}
//             >
//               {exp.company}
//             </button>
//           ))}
//         </div>

//         <div className="flex-1 p-4">
//           <h3 className="text-xl font-bold text-gray-200">
//             {experiences[activeTab].title}{' '}
//             <span className="text-[#64ffda]">@ {experiences[activeTab].company}</span>
//           </h3>
//           <p className="text-gray-400 mt-1 font-fira-code">
//             {experiences[activeTab].duration}
//           </p>
//           <ul className="mt-4 space-y-4">
//             {experiences[activeTab].points.map((point, index) => (
//               <li key={index} className="flex items-start space-x-2 text-gray-400">
//                 <span className="text-[#64ffda] mt-1">▹</span>
//                 <span>{point}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Experience