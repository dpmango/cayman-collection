/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';
import cns from 'classnames';

import { Button } from '@ui';
import { useQuery } from '@hooks';
import Layout from '@c/Layout/';

import st from './NoMatch.module.scss';

const NoMatchPage = observer(() => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <Layout>
        <div className={st.container}>
          <div className="container">
            <div className="container-inner">
              <div className={cns('row', st.row)}>
                <div className="col col-6 col-xl-8 col-lg-12">
                  <div className={st.subtitle}>404 error</div>
                  <h1 className={cns('h0-title', st.title)}>Paradise Lost!</h1>
                  <p className={cns('p-regular', st.description)}>
                    Sorry, the page you are looking for doesn't exist. <br /> Here are some helpful links:
                  </p>
                  <div className={st.cta}>
                    <Button theme="accent" outline iconLeft="arrow-left" onClick={handleBackClick}>
                      Go Back
                    </Button>
                    <Link to="/">
                      <Button theme="accent" iconRight="arrow-right">
                        Take Me Home
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="col col-6 col-xl-4 lg-hidden">
                  <div className={st.image}>
                    <img src="/img/404-page.jpg" srcSet="/img/404-page@2x.jpg 2x" alt="404 page" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
});

export default NoMatchPage;
