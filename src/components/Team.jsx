import React from 'react';

const Team = ({tabs, sectionRefs}) => {
  const members = [
    {
      name: 'Aanand Surana',
      designation: 'MTS AT ZL TECHNOLOGY',
      description:
        'I am Aanand Surana, a B.Tech student in Computer Science at IIIT Lucknow with expertise in full-stack development using React.js and Node.js. I have built impactful projects like Influencia and Bro Code, showcasing skills in real-time communication, collaboration, and data-driven solutions. ',
      image: 'https://media.licdn.com/dms/image/v2/D4D35AQHJn5Xp3cj0Pg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1724435715480?e=1737212400&v=beta&t=l15z3ofBEjqds9Db29oULmCovUmaFGbnzHYHQHCoOas',
    },
    {
      name: 'Aanand Surana',
      designation: 'SDE Intern at LazyYatra',
      description:
        'With a solid foundation in C++, CS fundamentals, and competitive programming, I hold a 4-star rating on CodeChef and an Expert rank on Codeforces. Additionally, I have research and internship experience, blending technical proficiency with problem-solving capabilities.',
      image: 'https://media.licdn.com/dms/image/v2/D4D35AQHJn5Xp3cj0Pg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1724435715480?e=1737212400&v=beta&t=l15z3ofBEjqds9Db29oULmCovUmaFGbnzHYHQHCoOas',
    },
    {
      name: 'Aanand Surana',
      designation: 'GentleMan',
      description:
        'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra.',
      image: 'https://media.licdn.com/dms/image/v2/D4D35AQHJn5Xp3cj0Pg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1724435715480?e=1737212400&v=beta&t=l15z3ofBEjqds9Db29oULmCovUmaFGbnzHYHQHCoOas',
    },
  ];

  return (
    <div key={tabs.Team} ref={sectionRefs.Team} className="bg-white mx-auto p-6 rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Team</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      <div className="space-y-4">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 border rounded-lg shadow-sm bg-blue-50">
            <div>
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-40 rounded object-cover"
            />
            <h3 className="text-center text-sm font-semibold">{member.name}</h3>
            <p className="text-xs text-center text-gray-500 mb-2">{member.designation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 leading-relaxed">
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
