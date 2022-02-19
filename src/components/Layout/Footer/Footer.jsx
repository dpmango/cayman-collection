import React, { useContext, useState, useCallback, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cns from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useToasts } from 'react-toast-notifications';

import { UiStoreContext } from '@store';
import { SvgIcon } from '@ui';
import { ModalSubscribe } from '@c/Modal';

import st from './Footer.module.scss';

const formInitial = {
  email: '',
};

const Footer = observer(({ className }) => {
  const { addToast } = useToasts();

  const [loading, setLoading] = useState(false);
  const [menuActive, setMenuActive] = useState(null);
  const uiContext = useContext(UiStoreContext);

  const handleMenuTitleClick = useCallback(
    (id) => {
      if (menuActive === id) {
        setMenuActive(null);
      } else {
        setMenuActive(id);
      }
    },
    [menuActive]
  );

  const handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const handleSubmit = useCallback(async (values, { resetForm }) => {
    setLoading(true);

    addToast('Should send email', { appearance: 'success' });

    uiContext.setModal('subscribe');
    // await callbackContext
    //   .submitForm({
    //     type: 'Help',
    //     payload: Object.keys(values).map((key) => ({ id: key, content: values[key] })),
    //   })
    //   .then((_res) => {
    //     resetForm();
    //     uiContext.setModal('callbacksuccess');
    //   })
    //   .catch((_error) => {
    //     addToast('Ошибка при отправке', { appearance: 'error' });
    //   });

    setLoading(false);
  }, []);

  return (
    <footer className={cns(st.footer, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.main}>
            <div className="row">
              <div className="col col-5 col-lg-12">
                <div className={st.subscribe}>
                  <div className="h5-title c-gray">Subscribe to our newsletter</div>

                  <Formik
                    initialValues={formInitial}
                    validateOnChange={false}
                    validate={handleValidation}
                    onSubmit={handleSubmit}>
                    {({ isSubmitting, setFieldError }) => (
                      <Form>
                        <Field type="email" name="email">
                          {({ field, form: { setFieldValue }, meta }) => (
                            <input
                              type="email"
                              autoComplete="email"
                              className={cns(st.subscribeInput, meta.touched && meta.error && st.error)}
                              placeholder="Email address"
                              value={field.value}
                              onChange={(e) => {
                                setFieldValue(field.name, e.target.value);
                                setFieldError(field.name);
                              }}
                            />
                          )}
                        </Field>

                        <button type="submit" className={st.subscribeButton} disabled={isSubmitting}>
                          <SvgIcon name="arrow-right" />
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className="col col-7 col-lg-12">
                <div className="row">
                  <div className="col col-4 col-md-12">
                    <div
                      className={cns(st.menuTitle, menuActive === 1 && st._active, 'h6-title')}
                      onClick={() => handleMenuTitleClick(1)}>
                      Navigation
                      <SvgIcon name="arrow-down" />
                    </div>
                    <ul className={cns(st.menuList, menuActive === 1 && st._active)}>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">The Plan</a>
                      </li>
                      <li>
                        <a href="#">The Process</a>
                      </li>
                      <li>
                        <a href="#">The Property</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col col-4 col-md-12">
                    <div
                      className={cns(st.menuTitle, menuActive === 2 && st._active, 'h6-title')}
                      onClick={() => handleMenuTitleClick(2)}>
                      About
                      <SvgIcon name="arrow-down" />
                    </div>
                    <ul className={cns(st.menuList, menuActive === 2 && st._active)}>
                      <li>
                        <a href="#">Your Team</a>
                      </li>
                      <li>
                        <a href="#">Why Cayman</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col col-4 col-md-12">
                    <div
                      className={cns(st.menuTitle, menuActive === 3 && st._active, 'h6-title')}
                      onClick={() => handleMenuTitleClick(3)}>
                      Help
                      <SvgIcon name="arrow-down" />
                    </div>
                    <ul className={cns(st.menuList, menuActive === 3 && st._active)}>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={st.bottom}>
            <ul className={st.bottomMenu}>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>

            <ul className={st.bottomSocials}>
              <li>
                <a href="#" target="_blank">
                  <SvgIcon name="social-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <SvgIcon name="social-facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <SvgIcon name="social-twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <SvgIcon name="social-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ModalSubscribe />
    </footer>
  );
});

export default Footer;
