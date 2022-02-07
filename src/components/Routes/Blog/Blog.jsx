import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import { BlogList } from '@c/Blog';
import { content } from './Content.js';

const BlogPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <BlogList list={content.list} categories={content.categories} />
    </>
  );
});

export default BlogPage;
