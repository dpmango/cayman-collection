/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { SvgIcon, Button, Input, Checkbox } from '@ui';
import styles from './Login.module.scss';

const formInitial = {
  email: '',
  password: '',
};

const Login = ({ className }) => {
  const [remember, setRemember] = useState(false);

  const handleValidation = (values) => {
    console.log('validata');
    const errors = {};
    if (!values.email) {
      errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    } else if (!values.password) {
      errors.password = 'Enter password';
    } else if (values.password.length <= 6) {
      errors.password = 'Should be more 6 characters';
    }
    return errors;
  };

  const handleSubmit = useCallback(async (values, { resetForm }) => {
    setLoading(true);

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
    <div className={cns(styles.container, className)}>
      <div className={styles.head}>
        <div className="h2-title">Welcome to Financial Security</div>
        <div className={styles.description}>Welcome! Please enter your details.</div>
      </div>

      <Formik initialValues={formInitial} validateOnChange={false} validate={handleValidation} onSubmit={handleSubmit}>
        {({ isSubmitting, setFieldError }) => (
          <Form className={styles.form}>
            <Field type="email" name="email">
              {({ field, form: { setFieldValue }, meta }) => (
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  value={field.value}
                  error={meta.touched && meta.error}
                  onChange={(v) => {
                    setFieldValue(field.name, v);
                    setFieldError(field.name);
                  }}
                />
              )}
            </Field>
            <Field type="password" name="password">
              {({ field, form: { setFieldValue }, meta }) => (
                <Input
                  label="Password"
                  value={field.value}
                  error={meta.touched && meta.error}
                  onChange={(v) => {
                    setFieldValue(field.name, v);
                    setFieldError(field.name);
                  }}
                />
              )}
            </Field>
            <div className={styles.helpers}>
              <Checkbox isChecked={remember} onChange={() => setRemember(!remember)}>
                Remember for 30 days
              </Checkbox>
              <Link to="/recover">Forgot password</Link>
            </div>
            <div className={styles.cta}>
              <Button type="submit" theme="accent" iconRight="arrow-right" block>
                Sign In
              </Button>
            </div>
            <div className={styles.helper}>
              Don’t have an account? <Link to="/signup">Sign up</Link>{' '}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
