import React, { useMemo } from 'react';
import cns from 'classnames';

import st from './Wysiwyg.module.scss';

const Wysiwyg = ({ className, content, ...props }) => {
  return <div className={cns(st.wysiwyg, className)} dangerouslySetInnerHTML={{ __html: content }} {...props}></div>;
};

export default Wysiwyg;
