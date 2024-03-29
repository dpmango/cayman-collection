import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useToasts } from 'react-toast-notifications';

import { SvgIcon } from '@ui';

import st from './CtaBanner.module.scss';

const Themes = {
  MAIN: 'main',
};

const ThemeClasses = {
  [Themes.MAIN]: '',
};

const formInitial = {
  email: '',
};

const CtaBanner = ({ className, theme, title }) => {
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
    <div className={cns(st.banner, theme && ThemeClasses[theme], className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.content}>
            <div className={cns('h5-title', st.title)}>{title}</div>

            <div className={st.form}>
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
                          className={cns(st.formInput, meta.touched && meta.error && st.error)}
                          placeholder="Email address"
                          value={field.value}
                          onChange={(e) => {
                            setFieldValue(field.name, e.target.value);
                            setFieldError(field.name);
                          }}
                        />
                      )}
                    </Field>

                    <button type="submit" className={st.formButton} disabled={isSubmitting}>
                      <SvgIcon name="arrow-right" />
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
