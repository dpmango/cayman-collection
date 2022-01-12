import React, { useContext, useState, useCallback, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import cns from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useToasts } from 'react-toast-notifications';

import { SvgIcon } from '@ui';

import styles from './Footer.module.scss';

const formInitial = {
  email: '',
};

const Footer = observer(({ className }) => {
  const { addToast } = useToasts();

  const [loading, setLoading] = useState(false);

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
    <footer className={cns(styles.footer, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={styles.main}>
            <div className="row">
              <div className="col col-5">
                <div className={styles.subscribe}>
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
                              className={cns(styles.subscribeInput, meta.touched && meta.error && styles.error)}
                              placeholder="Email address"
                              value={field.value}
                              onChange={(e) => {
                                setFieldValue(field.name, e.target.value);
                                setFieldError(field.name);
                              }}
                            />
                          )}
                        </Field>

                        <button type="submit" className={styles.subscribeButton} disabled={isSubmitting}>
                          <SvgIcon name="arrow-right" />
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className="col col-7">
                <div className="row">
                  <div className="col col-4">
                    <div className={cns(styles.menuTitle, 'h6-title')}>Navigation</div>
                    <ul className={styles.menuList}>
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
                  <div className="col col-4">
                    <div className={cns(styles.menuTitle, 'h6-title')}>About</div>
                    <ul className={styles.menuList}>
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
                  <div className="col col-4">
                    <div className={cns(styles.menuTitle, 'h6-title')}>Help</div>
                    <ul className={styles.menuList}>
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

          <div className={styles.bottom}>
            <ul className={styles.bottomMenu}>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>

            <ul className={styles.bottomSocials}>
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
    </footer>
  );
});

export default Footer;
