
const StudentPage = () => {
  return (
    <>
     <div className="w-screen h-96 "><img src="https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
     alt="school image"
     loading="lazy" 
     className="w-full h-full"/></div>
    <div className="max-w-7xl mx-auto p-6">
      {/* Life at Springdale Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Life at Springdale</h2>
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-2">Extracurricular Activities</h3>
          <p className="mb-4">
            Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
          </p>
          <h3 className="text-2xl font-bold mb-2">Clubs and Societies</h3>
          <p>
            Literary Society, Environmental Club, Astronomy Club, Coding Club
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Achievements</h2>
        <ul className="list-disc list-inside text-left md:w-1/2 mx-auto">
          <li className="mb-2">John Smith - National Level Math Olympiad Winner</li>
          <li className="mb-2">Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>

      {/* Student Council Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Student Council</h2>
        <ul className="list-disc list-inside text-left md:w-1/2 mx-auto">
          <li className="mb-2">President: Amy Parker, Grade 12</li>
          <li className="mb-2">Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default StudentPage;
