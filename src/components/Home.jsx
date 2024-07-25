import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import culturalFest from "../assets/culturalFest.png";
import annualSportDay from "../assets/AnnualSportDay.png";
import ScienceExhibition from "../assets/scienceExhibition.png";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        {/* Carousel */}
        <section className="mb-12">
          <div className="h-64 md:h-96 relative">
            <Carousel 
              showThumbs={false} 
              infiniteLoop 
              autoPlay 
              showStatus={false} 
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                const defStyle = { marginLeft: 10, cursor: 'pointer' };
                const style = isSelected ? { ...defStyle, color: 'blue' } : { ...defStyle, color: 'gray' };
                return (
                  <span
                    style={style}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                  >
                    •
                  </span>
                );
              }}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    ‹
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    ›
                  </button>
                )
              }
            >
              <div className="h-64 md:h-96">
                <img src={annualSportDay} alt="Annual Sports Day" className="object-cover h-full w-full rounded-lg shadow-lg" />
                <p className="legend bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Annual Sports Day - Celebrating Excellence in Sports</p>
              </div>
              <div className="h-64 md:h-96">
                <img src={ScienceExhibition} alt="Science Exhibition" className="object-cover h-full w-full rounded-lg shadow-lg" />
                <p className="legend bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Science Exhibition - Showcasing Student Innovations</p>
              </div>
              <div className="h-64 md:h-96">
                <img src={culturalFest} alt="Cultural Fest" className="object-cover h-full w-full rounded-lg shadow-lg" />
                <p className="legend bg-black bg-opacity-50 text-white p-2 rounded-b-lg">Cultural Fest - Embracing Diversity and Creativity</p>
              </div>
            </Carousel>
          </div>
        </section>
         
           {/* Introduction */}
  <section className="bg-teal-100 text-gray-800 py-20 px-4">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Welcome to Springdale Public School</h2>
    <p className="text-lg mb-6">Where we nurture young minds for a brighter future.</p>
    <Link to="/about-us" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded shadow-md transition-transform duration-300 transform hover:scale-105">
      Learn More
    </Link>
  </div>
</section>
    </div>
  );
};

const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '30px',
};

export default Home;




