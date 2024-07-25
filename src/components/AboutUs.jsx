import { useEffect } from 'react';


  
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full h-96">
        <img
          src="https://plus.unsplash.com/premium_photo-1664110691200-0d37f5d0aea5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="school image"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="max-w-7xl mx-auto p-6">
        {/* School Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://images.unsplash.com/photo-1616964361016-4dadd4cc67ca?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x400"
              alt="School Building"
              className="w-full md:w-1/2 h-auto mb-8 md:mb-0 md:mr-8"
              loading="lazy"
            />
            <div className="text-left md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-red-700">SPRINGDALE SCHOOL</h2>
              <p className="mb-4">
                Springdale School has been providing outstanding education and support to students across the globe. Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
              </p>
              <p className="mb-4">
                With an aim to be one of the finest educational institutions, Springdale School features state-of-the-art classrooms and innovation studios. We encourage creation and collaboration in arts, science and technology. In addition to unrivalled academic standards, we also encourage a healthy combination of sports and extra-curricular activities - providing a holistic education that prepares our students for life, as well as examinations. We pride ourselves in offering an all-encompassing learning experience that moulds our students into young adults who are achievers of the highest order in almost every field.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16 text-center">
          <div className="bg-gray-300 p-6 rounded-md">
            <h2 className="text-3xl font-bold mb-4">VISION</h2>
            <p>
              To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661767552224-ef72bb6b671f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x200"
              alt="Student with Microscope"
              className="w-full md:w-1/2 h-auto mb-8 md:mb-0 md:mr-8"
              loading="lazy"
            />
            <div className="text-left md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">MISSION</h2>
              <p className="mb-4">
                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
              </p>
            </div>
          </div>
        </section>

        {/* Principal's Message Section */}
        <section className="mb-16 text-center">
          <div className="bg-gray-300 p-6 rounded-md">
            <h2 className="text-3xl font-bold mb-4">PRINCIPAL'S MESSAGE</h2>
            <p>
              At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
            </p>
          </div>
        </section>

        {/* Infrastructure and Facilities Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">INFRASTRUCTURE AND FACILITIES</h2>
          <ul className="list-disc list-inside text-left md:w-1/2 mx-auto">
            <li className="mb-2">State-of-the-art science and computer labs</li>
            <li className="mb-2">Spacious and well-equipped classrooms</li>
            <li className="mb-2">Library with a vast collection of books and digital resources</li>
            <li className="mb-2">Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x400"
            alt="Infrastructure"
            className="w-full h-auto mt-8"
            loading="lazy"
          />
        </section>
      </div>
    </>
  );
};

export default AboutUs;




