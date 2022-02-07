import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import Lightbox from 'react-image-lightbox';

import { Button, SvgIcon } from '@ui';

import styles from './UnitScope.module.scss';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const UnitScope = ({ className, unitId }) => {
  const [lightboxOpened, setLightboxOpened] = useState(false);

  if (!unitId) return null;

  return (
    <section className={cns(styles.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.grid}>
            <div className={styles.body}>
              <div className={styles.head}>
                <div className={cns('h1-title', styles.title)}>L-3 Block</div>
                <div className={styles.price}>
                  <div className={styles.priceLabel}>Price</div>
                  <div className={cns('h5-title', styles.priceValue)}>$850,000</div>
                </div>
              </div>

              <div className={styles.scope}>
                <div className={styles.scopeCol}>
                  <div className={styles.scopeIcon}>
                    <SvgIcon name="area" />
                  </div>
                  <div className={styles.scopeContent}>
                    <div className={cns('h6-title', styles.scopeValue)}>1240</div>
                    <div className={styles.scopeLabel}>Area m²</div>
                  </div>
                </div>
                <div className={styles.scopeCol}>
                  <div className={styles.scopeIcon}>
                    <SvgIcon name="bedrooms" />
                  </div>
                  <div className={styles.scopeContent}>
                    <div className={cns('h6-title', styles.scopeValue)}>3</div>
                    <div className={styles.scopeLabel}>Bedrooms</div>
                  </div>
                </div>
                <div className={styles.scopeCol}>
                  <div className={styles.scopeIcon}>
                    <SvgIcon name="bathrooms" />
                  </div>
                  <div className={styles.scopeContent}>
                    <div className={cns('h6-title', styles.scopeValue)}>2</div>
                    <div className={styles.scopeLabel}>Bathrooms</div>
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
            <div className={styles.sidebar}>
              <Button theme="accent" variant="big" block>
                Add to proposal +
              </Button>
              <div className={styles.sidebarImage}>
                <img src="/img/property/gallery-main.jpg" alt="main image" />
              </div>
              <div className={styles.floorPlan}>
                <div className={cns(styles.floorPlanLabel)}>Floor Plan</div>
                <img src="/img/property/floorPlan.png" srcSet="/img/property/floorPlan@2x.png 2x" alt="" />
                <div className={styles.floorPlanZoom} onClick={() => setLightboxOpened(true)}>
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
