import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import { PropertyGallery, PropertyUnits, PropertyFigures } from '@c/Property';
import { ModalPerson } from '@c/Modal';
import { content } from './Content.js';

const PropertyPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>The Property</title>
      </Helmet>

      <PropertyGallery {...content.gallery} />
      <PropertyUnits {...content.units} />
      <PropertyFigures {...content.figures} />

      <ModalPerson />
    </>
  );
});

export default PropertyPage;
