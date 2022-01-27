import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import { HeroBanner, CtaBanner, ScheduleCallBanner } from '@c/Banners';
import { PaginationBar } from '@c/Pagination';
import { PlanPoints, PlanFigures, PlanTax } from '@c/Plan';
import { ModalPoints } from '@c/Modal';
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
      <PlanFigures {...content.figures} />
      <PlanTax {...content.tax} />
      <ScheduleCallBanner />
      <PaginationBar {...content.paginationBar} />
      <CtaBanner className="mt-4 mt-md-3" {...content.ctaBanner} />

      <ModalPoints />
    </>
  );
});

export default PlanPage;
