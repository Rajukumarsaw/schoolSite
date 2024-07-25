

const Academics = () => {
  return (
    <>
    <div className="w-full h-96 "><img src="https://images.unsplash.com/photo-1544830281-1d5169d6b2af?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     alt="school image"
     loading="lazy"
      className="w-full h-full"/></div>
    <div className="max-w-7xl mx-auto p-6">
      {/* Academics Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Academics</h1>

        {/* Curriculum Section */}
        <div className="bg-gray-100 p-6 rounded-md mb-8">
          <h2 className="text-3xl font-bold mb-4">Curriculum</h2>
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-2">Primary (Grades 1-5):</h3>
            <p className="mb-4">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
            <h3 className="text-2xl font-semibold mb-2">Secondary (Grades 6-10):</h3>
            <p className="mb-4">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
            <h3 className="text-2xl font-semibold mb-2">Senior Secondary (Grades 11-12):</h3>
            <h4 className="text-xl font-medium mb-2">Science Stream:</h4>
            <p className="mb-4">Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
            <h4 className="text-xl font-medium mb-2">Commerce Stream:</h4>
            <p className="mb-4">Accountancy, Business Studies, Economics, Mathematics, English</p>
          </div>
        </div>

        {/* Teaching Methodologies Section */}
        <div className="bg-white p-6 rounded-md shadow-md mb-8">
          <h2 className="text-3xl font-bold mb-4">Teaching Methodologies</h2>
          <p className="text-left">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </div>

        {/* Educational Resources Section */}
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
          <p className="text-left">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Academics;
