import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { UiStoreContext } from '@store';
import { SvgIcon } from '@ui';

import st from './Points.module.scss';
import PointPasportSvg from './assets/points-passport.svg';
import PointsPortfolioSvg from './assets/points-portfolio.svg';
import PointsStampSvg from './assets/points-stamp.svg';
import PointsBankSvg from './assets/points-bank.svg';
import PointsSafeSvg from './assets/points-safe.svg';
import PointsDesignSvg from './assets/points-design.svg';
import PointsPocketSvg from './assets/points-pocket.svg';
import PointsListSvg from './assets/points-list.svg';

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

const Points = ({ className, title, cols }) => {
  const uiContext = useContext(UiStoreContext);

  return (
    <div className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.grid}>
            {cols &&
              cols.length &&
              cols.map((x) => (
                <div className={st.col} key={x.id} onClick={() => uiContext.setModal('points', x.id)}>
                  <div className={st.colImage}>{x.iconId && <img src={images[x.iconId]} />}</div>

                  <div className={cns('h6-title', st.colTitle)} dangerouslySetInnerHTML={{ __html: x.title }} />
                  <Link className={cns(st.more)} to={x.more.to}>
                    <span>{x.more.label}</span>
                    <SvgIcon name="link-play" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
