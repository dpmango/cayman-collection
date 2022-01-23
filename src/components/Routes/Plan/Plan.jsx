import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

import { HeroBanner, CtaBanner, ScheduleCallBanner } from '@c/Banners';
import { PaginationBar } from '@c/Pagination';
import { PlanPoints } from '@c/Plan';
import { content } from './Content.js';

const PlanPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>The Plan</title>
      </Helmet>

      <HeroBanner theme="lilac" {...content.banner} />
      <PlanPoints {...content.points} />

      <CtaBanner {...content.ctaBanner} />

      <ScheduleCallBanner />
      <PaginationBar {...content.paginationBar} />
      <CtaBanner {...content.ctaBanner} />
    </>
  );
});

export default PlanPage;
