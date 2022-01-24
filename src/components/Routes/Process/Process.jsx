import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

import { HeroBanner, CtaBanner, ScheduleCallBanner } from '@c/Banners';
import { PaginationBar } from '@c/Pagination';
import { ProcessTimeline } from '@c/Process';
import { content } from './Content.js';

const PlanPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>The Process</title>
      </Helmet>

      <HeroBanner theme="lilac" {...content.banner} />
      <ProcessTimeline {...content.timelineAcquisition} />
      <ProcessTimeline {...content.timelineReadiness} />

      <ScheduleCallBanner />
      <PaginationBar {...content.paginationBar} />
      <CtaBanner className="mt-4" {...content.ctaBanner} />
    </>
  );
});

export default PlanPage;
