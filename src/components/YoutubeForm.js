/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// 1. import useFormik
import { useFormik } from 'formik';
import * as Yup from 'yup';

// 2. initial value formik
const initialValues = {
  name: 'Vishwas',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log('Form data', values);
};

// const validate = (values) => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = 'Required';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format';
//   }

//   if (!values.channel) {
//     errors.channel = 'Required';
//   }

//   return errors;
// };

const validationScheme = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email Format').required('Required'),
  channel: Yup.string().required('Required'),
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationScheme,
    // validate,
  });

  console.log('Form Errors', formik.errors);

  return (
    <div style={{
      marginTop: 10, padding: 20, border: '2px solid teal', borderRadius: 10,
    }}
    >
      <h1>Formik Tutorial</h1>
      {/* 4. add props onSubmit */}
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          {/* 3. add props onChange and value in ech form type */}
          <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null }
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null }
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} />
          {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null }
        </div>

        <button style={{ marginTop: 10, float: 'right' }} type="submit">Submit</button>

      </form>
    </div>

  );
};

export default YoutubeForm;
