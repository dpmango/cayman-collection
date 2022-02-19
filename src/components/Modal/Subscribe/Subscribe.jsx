import React, { useContext, useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import cns from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Modal, SvgIcon, Input, Button } from '@ui';
import { UiStoreContext } from '@store';

import st from './Subscribe.module.scss';

const formInitial = {
  email: '',
  name: '',
};

const Subscribe = observer(({ className }) => {
  const { modalParams } = useContext(UiStoreContext);

  const [loading, setLoading] = useState(false);

  const handleValidation = (values) => {
    console.log('validata');
    const errors = {};
    if (!values.email) {
      errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    } else if (!values.name) {
      errors.password = 'Enter name';
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
    <Modal name="subscribe" className={cns(st.modal, className)}>
      <div className={cns(st.container, className)}>
        <div className={st.grid}>
          <div className={st.image}>
            <img src="/img/modal/subscribe.png" srcSet="/img/modal/subscribe@2x.png 2x" alt="background image" />
          </div>
          <div className={st.content}>
            <div className={st.contentWrapper}>
              <div className="h3-title w-400">Get a headstart on your financial future</div>
              <div className={cns('p-regular', st.subtitle)}>Subscribe to our newsletter</div>

              <Formik
                initialValues={formInitial}
                validateOnChange={false}
                validate={handleValidation}
                onSubmit={handleSubmit}>
                {({ isSubmitting, setFieldError }) => (
                  <Form className={st.form}>
                    <Field type="text" name="name" className="ui-group">
                      {({ field, form: { setFieldValue }, meta }) => (
                        <Input
                          placeholder="Your name"
                          value={field.value}
                          error={meta.touched && meta.error}
                          onChange={(v) => {
                            setFieldValue(field.name, v);
                            setFieldError(field.name);
                          }}
                        />
                      )}
                    </Field>

                    <Field type="email" name="email" className="ui-group">
                      {({ field, form: { setFieldValue }, meta }) => (
                        <Input
                          type="email"
                          autoComplete="email"
                          placeholder="Your Email"
                          value={field.value}
                          error={meta.touched && meta.error}
                          onChange={(v) => {
                            setFieldValue(field.name, v);
                            setFieldError(field.name);
                          }}
                        />
                      )}
                    </Field>

                    <Button iconRight="arrow-right" type="submit" variant="" theme="accent" disabled={isSubmitting}>
                      Subscribe
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});

export default Subscribe;
