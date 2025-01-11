import React from 'react';

const Team = ({tabs, sectionRefs}) => {
  const members = [
    {
      name: 'Rohit Sharma',
      designation: 'MTS AT ZL',
      description:
        'I am Rohit Sharma, a B.Tech student in Computer Science at IIIT Lucknow with expertise in full-stack development using React.js and Node.js. I have built impactful projects like Influencia and Bro Code, showcasing skills in real-time communication, collaboration, and data-driven solutions. With a solid foundation in C++, CS fundamentals, and competitive programming, I hold a 4-star rating on CodeChef and an expert rating on cf.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7j2XM17TGBFFFmCY90pBlxm8vlCOzY-AFw&s',
    },
    {
      name: 'Virat Kohli',
      designation: 'SDE Intern',
      description:
        'With a solid foundation in C++, CS fundamentals, and competitive programming, I hold a 4-star rating on CodeChef and an Expert rank on Codeforces. Additionally, I have research and internship experience, blending technical proficiency with problem-solving capabilities.With a solid foundation in C++, CS fundamentals, and competitive programming, I hold a 4-star rating on CodeChef and an expert at cf.',
      image: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Suryakumar Yadav',
      designation: 'Idle',
      description:
        'Need 3rd offer,I am Aanand Surana, a B.Tech student in Computer Science at IIIT Lucknow with expertise in full-stack development using React.js and Node.js. I have built impactful projects like Influencia and Bro Code.With a solid foundation in C++, CS fundamentals, and competitive programming, I hold a 4-star rating on CodeChef and an expert on cf.',
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
            <div>
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-20 md:w-40 rounded object-cover"
            />
            <h3 className="text-center text-sm font-semibold">{member.name}</h3>
            <p className="text-xs text-center text-gray-500 mb-2">{member.designation}</p>
            </div>
            <div>
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
