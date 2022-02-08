import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout/';
import { PropertyGallery, PropertyUnits, PropertyFigures, PropertyProposal } from '@c/Property';
import { ModalPerson } from '@c/Modal';
import { content } from './Content.js';

const PropertyPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>The Property</title>
      </Helmet>

      <Layout>
        <PropertyGallery {...content.gallery} />
        <PropertyUnits {...content.units} />
        <PropertyFigures {...content.figures} />
        <PropertyProposal {...content.proposal} />

        <ModalPerson />
      </Layout>
    </>
  );
});

export default PropertyPage;
