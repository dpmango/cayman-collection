import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import cns from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';

import { Modal, SvgIcon, Button } from '@ui';
import { UiStoreContext } from '@store';

import st from './Points.module.scss';
import { content } from './Content.js';
import PointPasportSvg from '@c/Plan/Points/assets/points-passport.svg';
import PointsPortfolioSvg from '@c/Plan/Points/assets/points-portfolio.svg';
import PointsStampSvg from '@c/Plan/Points/assets/points-stamp.svg';
import PointsBankSvg from '@c/Plan/Points/assets/points-bank.svg';
import PointsSafeSvg from '@c/Plan/Points/assets/points-safe.svg';
import PointsDesignSvg from '@c/Plan/Points/assets/points-design.svg';
import PointsPocketSvg from '@c/Plan/Points/assets/points-pocket.svg';
import PointsListSvg from '@c/Plan/Points/assets/points-list.svg';

const images = {
  pasport: PointPasportSvg,
  portfolio: PointsPortfolioSvg,
  stamp: PointsStampSvg,
  bank: PointsBankSvg,
  safe: PointsSafeSvg,
  design: PointsDesignSvg,
  pocket: PointsPocketSvg,
  list: PointsListSvg,
};

const Points = observer(({ className }) => {
  const { modalParams } = useContext(UiStoreContext);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && modalParams) {
      swiperInstance.slideTo(modalParams, 0);
    }
  }, [modalParams]);

  return (
    <Modal name="points" className={cns(st.modal, className)}>
      <div className={cns(st.container, className)}>
        <Swiper
          className={st.slider}
          modules={[Navigation]}
          loop
          navigation
          slidesPerView={1}
          onSwiper={(swiper) => setSwiperInstance(swiper)}>
          {content &&
            content.map((slide, idx) => (
              <SwiperSlide className={st.slide} key={slide.id}>
                <div className={cns('h2-title c-gray md-hidden')}>{slide.title}</div>

                <div className={st.slideWrapper}>
                  <div className={st.slideImage}>{slide.iconId && <img src={images[slide.iconId]} />}</div>
                  <div className={st.slideContent}>
                    <div className={cns('h2-title c-gray md-visible')}>{slide.title}</div>
                    <p className={cns('p-caption color-font', st.slideDescription)}>{slide.description}</p>
                    <ul className={st.socialsList}>
                      <li>
                        <a href="#" target="_blank">
                          <SvgIcon name="social-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <SvgIcon name="social-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <SvgIcon name="social-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Modal>
  );
});

export default Points;
