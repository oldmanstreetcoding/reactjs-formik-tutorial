/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// 1. import useFormik
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

// 2. initial value formik
const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
};

const onSubmit = (values) => {
  console.log('Form data', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required'),
});

const YoutubeForm = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <div style={{
      marginTop: 10, padding: 20, border: '2px solid teal', borderRadius: 10,
    }}
    >
      <h1>Formik Tutorial</h1>
      {/* 4. add props onSubmit */}
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          {/* 3. add props onChange and value in ech form type */}
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {
              (errorMessage) => <div style={{ color: 'red' }}>{errorMessage}</div>
            }
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" placeholder="Youtube Channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {({ field, meta }) => (
              <div>
                <input type="text" {...field} />
                {meta.touched && meta.error ? (
                  <div>{meta.error}</div>
                ) : null}
              </div>
            )}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" type="text" id="comments" name="comments" />
        </div>

        <button style={{ float: 'right' }} type="submit">Submit</button>

      </Form>
    </div>
  </Formik>
);
export default YoutubeForm;
