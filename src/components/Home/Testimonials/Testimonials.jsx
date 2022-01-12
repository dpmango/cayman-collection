import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';

import { SvgIcon } from '@ui';

import styles from './Testimonials.module.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import NyTimes from './assets/NYTimes.svg';
import GlobalPropertyGuide from './assets/GlobalPropertyGuide.png';
import NomdaCapitalist from './assets/NomdaCapitalist.png';
import LloydsBank from './assets/LloydsBank.png';

const LogoImage = {
  NyTimes: NyTimes,
  GlobalPropertyGuide: GlobalPropertyGuide,
  NomdaCapitalist: NomdaCapitalist,
  LloydsBank: LloydsBank,
};

const Testimonials = ({ className, title, list }) => {
  return (
    <div className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className="h5-title tac c-primary-dark">{title}</div>

          <Swiper className={styles.slider} modules={[Navigation]} navigation slidesPerView={'auto'} spaceBetween={20}>
            <div className={styles.sliderIcon}>
              <SvgIcon name="quotes" />
            </div>

            {list &&
              list.map((slide, idx) => (
                <SwiperSlide className={styles.slide} key={slide.id}>
                  <div className={styles.slideContent}>
                    {slide.title && <div className="h2-title c-primary">{slide.title}</div>}
                    {slide.description && <p className="p-huge">{slide.description}</p>}
                    {slide.logo && <img className={styles.slideLogo} src={LogoImage[slide.logo]} />}
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
