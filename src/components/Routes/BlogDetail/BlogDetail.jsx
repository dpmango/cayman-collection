import React, { useContext, Profiler, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';

import Layout from '@c/Layout/';
import { BlogArticle } from '@c/Blog';
import { ModalPerson } from '@c/Modal';
import { content } from './Content.js';

const BlogPage = observer(() => {
  return (
    <>
      <Helmet>
        <title>Blog detail page</title>
      </Helmet>

      <Layout>
        <BlogArticle {...content} />
      </Layout>

      <ModalPerson />
    </>
  );
});

export default BlogPage;
