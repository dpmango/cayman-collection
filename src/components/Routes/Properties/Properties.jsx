import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import { PropertyHeroBanner, QuoteBanner } from '@c/Banners';
import { PropertyList } from '@c/Property';
import { HomeFaq } from '@c/Home';
import { ModalPerson } from '@c/Modal';
import { content } from './Content.js';

const PropertyPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>The Property</title>
      </Helmet>

      <PropertyHeroBanner {...content.hero} />
      <PropertyList {...content.properties} />
      <QuoteBanner {...content.banner} />
      <HomeFaq theme="peach" {...content.faq} />

      <ModalPerson />
    </>
  );
});

export default PropertyPage;
