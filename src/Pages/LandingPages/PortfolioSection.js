import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { constants } from '../../Constant/constants';
import { Link } from 'react-router-dom';
import CustomSwiper from '../../Components/CustomSwiper/CustomSwiper';
import { SwiperResponsive } from '../../Components/CustomSwiper/SwiperResponsive';

const PortfolioSection = ({ portfolios }) => {
  console.log(portfolios);
  return (
    <section className="creative-work portfolio-section-start">
      <div className="creative-work-pulse">
        <img
          src={constants.images.marketImage.imageURL}
          alt={constants.images.marketImage.alt}
        />
      </div>
      <div className="creative-work-in-box">
        <div className="creative-work-heading">
          <button className="creative-work-heading-text">
            Portfolio<span className="creative-work-span-circle"></span>
          </button>
        </div>
        <div className="creative-work-heading">
          <h1 className="creative-work-h1">
            Our Latest Work For Our Best Customer
          </h1>
        </div>
        <div className="loc">
          <div id="horizontal">
            <div className="containe">
              <div className="swiper-wrapper position-relative">
                <CustomSwiper
                  navigationNext=".courselist-button-next"
                  navigationPrev=".courselist-button-prev"
                  noOfSlidesPerView={2}
                  isBreakPoint={true}
                  breakPoint={SwiperResponsive()}
                >
                  {portfolios.map((portfolio) => (
                    <swiper-slide key={portfolio.link}>
                      <div className="swiper-slide position-relative">
                        <Link to={portfolio.link}>
                          <div className="swiper-slide swiper-slide-portfolio">
                            <div className="swiper-slider-box-in-image">
                              <img src={portfolio.image} alt={portfolio.alt} />
                            </div>
                            <h2 className="swiper-slider-h2-heading">
                              {portfolio.title}
                            </h2>
                            <span className="swiper-slider-span">
                              {portfolio.description}
                            </span>
                          </div>
                        </Link>
                      </div>
                    </swiper-slide>
                  ))}
                </CustomSwiper>
                <div className="swiper-button-prev courselist-button-prev"></div>
                <div className="swiper-button-next courselist-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Prop validation for PortfolioSection
PortfolioSection.propTypes = {
  portfolios: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired, // URL of the portfolio
      image: PropTypes.string.isRequired, // Image URL of the portfolio
      alt: PropTypes.string.isRequired, // Alt text for the portfolio image
      title: PropTypes.string.isRequired, // Title of the portfolio item
      description: PropTypes.string.isRequired, // Description of the portfolio item
    }),
  ).isRequired, // Ensures portfolios is an array of portfolio objects
};

export default PortfolioSection;
