import React from 'react';
import './TeamSection.css';

const teamMembers = [
  {
    id: 1,
    name: 'Vishal Sir',
    role: 'CEO',
    photo: '',
    bio: 'Experienced leader with a passion for innovation and growth.',
  },
  {
    id: 2,
    name: 'Neeraj Sir',
    role: 'CTO',
    photo: '',
    bio: 'Tech guru driving our product development and architecture.',
  },
  {
    id: 3,
    name: 'Kartik Sir',
    role: 'Marketing Head',
    photo: '',
    bio: 'Creative strategist focused on brand growth and engagement.',
  },
  {
    id: 4,
    name: "Swati Ma'am",
    role: 'Lead Designer',
    photo: '/assets/team/david.jpg',
    bio: 'Crafting user experiences that delight and inspire.',
  },
];

function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-section-inner">
        <h2>My Mentors</h2>
        <div className="team-carousel">
          {teamMembers.map(member => (
            <div className="team-card" key={member.id}>
              <img src={member.photo} alt={member.name} className="team-photo" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
