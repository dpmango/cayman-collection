import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';

import { useWindowSize } from '@hooks';
import { Button } from '@ui';
import { get2xImage } from '@helpers';

import st from './PropertyGallery.module.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';

const PropertyGallery = ({ className, title, description, price, availability, list }) => {
  const { width } = useWindowSize();

  const slidesPerView = useMemo(() => {
    if (width <= 575) {
      return 1;
    } else if (width <= 767) {
      return 2;
    } else if (width <= 1440) {
      return 3;
    }

    return 4;
  }, [width]);

  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns('row', st.main)}>
            <div className="col col-6 lg-hidden">
              <div className={st.galleryMain}>
                <img src={list[0].main} srcSet={get2xImage(list[0].main)} />
              </div>
            </div>
            <div className="col col-6 col-lg-12">
              <div className={st.content}>
                <h1 className={cns('h0-title', st.title)}>{title}</h1>
                <p className={cns('p-regular', st.description)}>{description}</p>
                <div className={st.meta}>
                  <div className={st.metaCol}>
                    <span className={st.metaLabel}>Starting from:</span>
                    <span className={cns('h3-title', st.metaValue)}>{price}</span>
                  </div>
                  <div className={st.metaCol}>
                    <span className={st.metaLabel}>Available:</span>
                    <span className={cns('h3-title', st.metaValue)}>{availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Swiper
            className={st.slider}
            modules={[Navigation]}
            navigation
            slidesPerView={slidesPerView}
            spaceBetween={40}>
            {list &&
              list.map((slide, idx) => (
                <SwiperSlide className={st.slide} key={slide.id || idx}>
                  <div className={st.slideImage}>
                    <img src={slide.thumb} srcSet={get2xImage(slide.thumb)} alt="thumb" />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
