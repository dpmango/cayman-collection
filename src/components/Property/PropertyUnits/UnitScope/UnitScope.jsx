import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import Lightbox from 'react-image-lightbox';

import { Button, SvgIcon } from '@ui';

import st from './UnitScope.module.scss';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const UnitScope = ({ className, unitId }) => {
  const [lightboxOpened, setLightboxOpened] = useState(false);

  if (!unitId) return null;

  return (
    <section className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.grid}>
            <div className={st.body}>
              <div className={st.head}>
                <div className={cns('h1-title', st.title)}>L-3 Block</div>
                <div className={st.price}>
                  <div className={st.priceLabel}>Price</div>
                  <div className={cns('h5-title', st.priceValue)}>$850,000</div>
                </div>
              </div>

              <div className={st.scope}>
                <div className={st.scopeCol}>
                  <div className={st.scopeIcon}>
                    <SvgIcon name="area" />
                  </div>
                  <div className={st.scopeContent}>
                    <div className={cns('h6-title', st.scopeValue)}>1240</div>
                    <div className={st.scopeLabel}>Area m²</div>
                  </div>
                </div>
                <div className={st.scopeCol}>
                  <div className={st.scopeIcon}>
                    <SvgIcon name="bedrooms" />
                  </div>
                  <div className={st.scopeContent}>
                    <div className={cns('h6-title', st.scopeValue)}>3</div>
                    <div className={st.scopeLabel}>Bedrooms</div>
                  </div>
                </div>
                <div className={st.scopeCol}>
                  <div className={st.scopeIcon}>
                    <SvgIcon name="bathrooms" />
                  </div>
                  <div className={st.scopeContent}>
                    <div className={cns('h6-title', st.scopeValue)}>2</div>
                    <div className={st.scopeLabel}>Bathrooms</div>
                  </div>
                </div>
              </div>

              <div className="p-caption">
                <p>
                  Limited-edition is the only way to describe Aqua. Comprised of ten, 4 bedroom, 4.5 bathroom suites.
                  Each residence spans an entire floor, offering completely private elevator access, and unobstructed
                  360-degree views of the island.
                </p>
                <p>
                  Aqua, an exclusive Seven Mile Beach retreat. Inspired architecture meets contemporary interior design,
                  offering a luxurious effortless living. Limited-edition is the only way to describe Aqua.
                </p>
              </div>
            </div>
            <div className={st.sidebar}>
              <Button theme="accent" variant="big" block>
                Add to proposal +
              </Button>
              <div className={st.sidebarImage}>
                <img src="/img/property/gallery-main.jpg" alt="main image" />
              </div>
              <div className={st.floorPlan}>
                <div className={cns(st.floorPlanLabel)}>Floor Plan</div>
                <img src="/img/property/floorPlan.png" srcSet="/img/property/floorPlan@2x.png 2x" alt="" />
                <div className={st.floorPlanZoom} onClick={() => setLightboxOpened(true)}>
                  <SvgIcon name="zoom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpened && (
        <Lightbox mainSrc="/img/property/floorPlan@2x.png" onCloseRequest={() => setLightboxOpened(false)} />
      )}
    </section>
  );
};

export default UnitScope;
