import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';

import { Button } from '@ui';
import { get2xImage } from '@helpers';

import styles from './PropertyGallery.module.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';

const PropertyGallery = ({ className, title, description, price, availability, list }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={cns('row', styles.main)}>
            <div className="col col-6">
              <div className={styles.galleryMain}>
                <img src={list[0].main} srcSet={get2xImage(list[0].main)} />
              </div>
            </div>
            <div className="col col-6">
              <div className={styles.content}>
                <h1 className={cns('h0-title', styles.title)}>{title}</h1>
                <p className={cns('p-regular', styles.description)}>{description}</p>
                <div className={styles.meta}>
                  <div className={styles.metaCol}>
                    <span className={styles.metaLabel}>Starting from:</span>
                    <span className={cns('h3-title', styles.metaValue)}>{price}</span>
                  </div>
                  <div className={styles.metaCol}>
                    <span className={styles.metaLabel}>Available:</span>
                    <span className={cns('h3-title', styles.metaValue)}>{availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Swiper className={styles.slider} modules={[Navigation]} navigation slidesPerView={4} spaceBetween={40}>
            {list &&
              list.map((slide, idx) => (
                <SwiperSlide className={styles.slide} key={slide.id || idx}>
                  <div className={styles.slideImage}>
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
