import React from 'react';

const Team = ({tabs, sectionRefs}) => {
  const members = [
    {
      name: 'Rohit Sharma',
      designation: 'MTS AT ZL',
      description:
        'I am Rohit Sharma, a B.Tech student in Computer Science at IIIT Lucknow with expertise in full-stack development using React.js and Node.js. I have built impactful projects like Influencia and Bro Code, showcasing skills in real-time communication, collaboration, and data-driven solutions. With a solid foundation in C++, CS fundamentals, and competitive programming, I hold a 4-star rating on CodeChef and an expert rating on cf.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-BnQhZr2DydEEWe69H0MnGwe3yBo8kAliA&s',
      },
    {
      name: 'Virat Kohli',
      designation: 'SDE Intern',
      description:
        'With a solid foundation in C++, CS fundamentals, and competitive programming, I hold a 4-star rating on CodeChef and an Expert rank on Codeforces. Additionally, I have research and internship experience, blending technical proficiency with problem-solving capabilities.With a solid foundation in C++, CS fundamentals, and competitive programming, I hold a 4-star rating on CodeChef and an expert at cf.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-BnQhZr2DydEEWe69H0MnGwe3yBo8kAliA&s',
      },
    {
      name: 'Suryakumar Yadav',
      designation: 'Idle',
      description:
        'Need 3rd offer,I am Surya, a B.Tech student in Computer Science at IIIT Lucknow with expertise in full-stack development using React.js and Node.js. I have built impactful projects like Influencia and Bro Code.With a solid foundation in C++, CS fundamentals, and competitive programming, I hold a 4-star rating on CodeChef and an expert on cf.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-BnQhZr2DydEEWe69H0MnGwe3yBo8kAliA&s',
    },
  ];

  return (
    <div key={tabs.Team} ref={sectionRefs.Team} className="bg-white mx-auto p-6 rounded shadow-lg">
      <h2 className="text-2xl font-normal mb-4">Team</h2>
      <p className="text-gray-800 mb-6">
        This is team introduction of Koinx . We have made a fully responsive website. 
      </p>
      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 border rounded-lg shadow-sm bg-blue-50">
            <div className='md:w-1/5 flex flex-col items-center'>
            <img
              src={member.image}
              alt={member.name}
              className="h-24 w-24 rounded object-cover"
            />
            <h3 className="text-center text-sm font-semibold">{member.name}</h3>
            <p className="text-xs text-center text-gray-500 mb-2">{member.designation}</p>
            </div>
            <div className='md:w-4/5'>
              <p className="text-sm text-gray-800 leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
