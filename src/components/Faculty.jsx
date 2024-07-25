

const Faculty = () => {
  const facultyMembers = [
    { name: 'John Doe', position: 'Principal', qualifications: 'M.Ed', experience: '20 years of experience in educational administration.' },
    { name: 'Jane Smith', position: 'Vice Principal', qualifications: 'M.Sc. in Physics', experience: '15 years of teaching experience.' },
    { name: 'Emily Johnson', position: 'English Teacher', qualifications: 'M.A. in English', experience: '10 years of teaching experience.' },
    { name: 'Michael Brown', position: 'Mathematics Teacher', qualifications: 'M.Sc. in Mathematics', experience: '8 years of teaching experience.' },
    { name: 'Sophia Davis', position: 'Science Teacher', qualifications: 'M.Sc. in Chemistry', experience: '12 years of teaching experience.' },
    { name: 'David Wilson', position: 'Computer Science Teacher', qualifications: 'B.Tech in Computer Science', experience: '5 years of teaching experience.' },
  ];

  return (
    <>
     <div className="w-screen h-96 "><img src="https://plus.unsplash.com/premium_photo-1671069848132-92977175e560?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="school image"
      loading="lazy"
       className="w-full h-full"/></div>
    <div className="max-w-7xl mx-auto p-6">
      {/* Faculty Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Faculty</h1>
        <p className="mb-8">Profiles of the teaching and administrative staff. Qualifications and experience of the faculty members.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <h3 className="text-xl font-semibold mb-2">{member.position}</h3>
              <p className="mb-2"><strong>Qualifications:</strong> {member.qualifications}</p>
              <p><strong>Experience:</strong> {member.experience}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default Faculty;
