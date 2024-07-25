

const Admissions = () => {
  return (
    <>
     <div className="w-screen h-96 "><img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
     alt="school image" 
     loading="lazy"
     className="w-full h-full"/></div>
    <section className="bg-gray-50 text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Admissions</h1>

        {/* Admission Process and Criteria */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Admission Process and Criteria</h2>
          <p className="text-lg">
            Our admission process is designed to ensure that students who join Springdale Public School are the right fit for our academic environment and ethos. The criteria for admission include academic performance, extracurricular involvement, and an interview with the admissions committee.
          </p>
        </div>

        {/* Downloadable Admission Forms */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Downloadable Admission Forms</h2>
          <p className="text-lg">
            To apply for admission, please download and complete the following forms:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2 mt-4">
            <li>
              <a href="/path-to-admission-form-1.pdf" className="text-teal-500 hover:text-teal-700" download>Admission Form for Grade 1-5</a>
            </li>
            <li>
              <a href="/path-to-admission-form-2.pdf" className="text-teal-500 hover:text-teal-700" download>Admission Form for Grade 6-8</a>
            </li>
            <li>
              <a href="/path-to-admission-form-3.pdf" className="text-teal-500 hover:text-teal-700" download>Admission Form for Grade 9-12</a>
            </li>
          </ul>
        </div>

        {/* Important Dates and Deadlines */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Important Dates and Deadlines</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Application submission opens: January 1, 2024</li>
            <li>Application submission deadline: March 31, 2024</li>
            <li>Entrance exam: April 15, 2024</li>
            <li>Interviews: April 20-25, 2024</li>
            <li>Admission decisions: May 1, 2024</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}

export default Admissions;
