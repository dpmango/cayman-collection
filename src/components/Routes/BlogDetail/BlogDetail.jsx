import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout/';
import { BlogArticle } from '@c/Blog';
import { content } from './Content.js';

const BlogPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Blog page</title>
      </Helmet>

      <Layout>
        <BlogArticle {...content} />
      </Layout>
    </>
  );
});

export default BlogPage;
