import React from 'react';
import { images } from '../../Constant/images';
import PropTypes from 'prop-types';

const ServiceSection = ({
  title,
  description,
  imageSrc,
  altText,
  points,
  imageSide = 'left', // can be 'left' or 'right'
  pulseImageSrc,
  pulseAltText,
  classesToToggle,
}) => {
  const { checkedImage } = images;

  return (
    <>
      <div>
        {imageSide === 'left' && (
          <section className="in-bangalore">
            <div className={classesToToggle.pulse}>
              <img src={pulseImageSrc} alt={pulseAltText} />
            </div>
            <div className={classesToToggle.box}>
              <div className="in-bangalore-wraper">
                <div className="in-bangalore-imgbox">
                  <img src={imageSrc} alt={altText} />
                </div>
                <div className="in-bangalore-textbox">
                  <h1 className={classesToToggle.heading}>{title}</h1>
                  <p className="in-bangalore-p">{description}</p>
                </div>
              </div>

              {points.length > 0 && (
                <div className="in-bangalore-down-box-parent">
                  <div className={classesToToggle.downBox}>
                    {points.map((text, index) => (
                      <div className="in-bangalore-down-box-i-text" key={index}>
                        <div className="in-bangalore-down-box-i">
                          <img src={checkedImage} alt="" />
                        </div>
                        <div className="in-bangalore-down-box-text">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {imageSide !== 'left' && (
          <section className="in-bangalore2">
            <div className={classesToToggle.pulse}>
              <img src={pulseImageSrc} alt={pulseAltText} />
            </div>
            <div className={classesToToggle.box}>
              <div className="in-bangalore2-wraper">
                <div className="in-bangalore2-textbox">
                  <h1 className={classesToToggle.heading}>{title}</h1>
                  <p className="in-bangalore2-p">{description}</p>
                </div>
                <div className="in-bangalore2-imgbox">
                  <img src={imageSrc} alt="best-company-image" />
                </div>
              </div>

              {points.length > 0 && (
                <div className="in-bangalore2-down-box-parent">
                  <div className={classesToToggle.downBox}>
                    {points.map((text, index) => (
                      <div
                        className="in-bangalore2-down-box-i-text"
                        key={index}
                      >
                        <div className="in-bangalore2-down-box-i">
                          <img src={checkedImage} alt="" />
                        </div>
                        <div className="in-bangalore2-down-box-text">
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

ServiceSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired,
  imageSide: PropTypes.string,
  pulseImageSrc: PropTypes.string.isRequired,
  pulseAltText: PropTypes.string.isRequired,
  classesToToggle: PropTypes.object.isRequired,
};

export default ServiceSection;
