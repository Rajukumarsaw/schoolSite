import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form data after submission if needed
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <div className="w-screen h-96">
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="school image"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

        <div className="mb-8">
          <p className="text-lg mb-2"><strong>School Address:</strong> 123 Education Lane, Amanaka, Raipur</p>
          <p className="text-lg mb-2"><strong>Contact Numbers:</strong> +1 (123) 456-7890 | +1 (098) 765-4321</p>
          <p className="text-lg mb-6"><strong>Email:</strong> contact@schooldomain.com</p>
        </div>

        <div className="mb-8">
          <iframe
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.459965092242!2d81.59325897511157!3d21.253252980452835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de0f7c57fdd7%3A0x4500a20b0926d815!2sAmanaka%2C%20Raipur%2C%20Chhattisgarh%20492001!5e0!3m2!1sen!2sin!4v1721877125382!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            title="Raipur, India"
          ></iframe>
        </div>

        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;



