import React from 'react';
import './TeamSection.css';

import vishalSir from '../assets/team/vishalSir-img.jpeg';

import neerajSir from '../assets/team/neerajSir-img.jpeg';
import kartikSir from '../assets/team/kartikSir-img.png';
import rahulSir from '../assets/team/rahulSir-img.jpeg';
import swatiMaam from '../assets/team/swatiMaam-img.jpeg';


const teamMembers = [
  {
    id: 1,
    name: 'Vishal Sir',
    role: 'Project Mentor',
    photo: vishalSir,
    bio: 'Encouraged me to think critically about user experience and flow.',
  },
  {
    id: 2,
    name: 'Neeraj Sir',
    role: 'Project Mentor',
    photo: neerajSir,
    bio: 'Guided me with valuable feedback during the early planning phase.',
  },
  {
    id: 3,
    name: 'Kartik Sir',
    role: 'Mid-Evaluation Mentor',
    photo: kartikSir,
    bio: 'Provided me with helpful tips during mid-evaluation.',
  },
  {
    id: 4,
    name: "Rahul Sir",
    role: 'Subject Guide',
    photo: rahulSir,
    bio: 'Clarified technical doubts that helped me fix key bugs in the app.',
  },
  {
    id: 5,
    name: "Swati Ma'am",
    role: 'Subject Guide',
    photo: swatiMaam,
    bio: 'Helped me improve the UI design by suggesting layout improvements.',
  }
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
