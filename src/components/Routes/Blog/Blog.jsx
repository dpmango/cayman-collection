import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import { BlogList } from '@c/Blog';
import { content } from './Content.js';
import Layout from '@c/Layout/';

const BlogPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <Layout>
        <BlogList list={content.list} categories={content.categories} />
      </Layout>
    </>
  );
});

export default BlogPage;
