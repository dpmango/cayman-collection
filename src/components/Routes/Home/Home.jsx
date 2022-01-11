import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

import { useQuery } from '@hooks';
import { UiStoreContext, SessionStoreContext } from '@store';

import HeroBanner from '@c/HeroBanner';

const HomePage = observer(() => {
  const query = useQuery();

  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>

      <HeroBanner
        theme="main"
        title="Protect your net worth. Invest in the Cayman Islands for a secure future."
        description="Cayman Collection will help you invest in property and attain legal residence in the Cayman Islands."
      />
    </>
  );
});

export default HomePage;
