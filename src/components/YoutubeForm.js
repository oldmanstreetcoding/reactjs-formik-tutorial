/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// 1. import useFormik
import { useFormik } from 'formik';

const YoutubeForm = () => {
  // 2. initial value formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
    // 5. add onSubmit function
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
  });

  return (
    <div>
      {/* 4. add props onSubmit */}
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        {/* 3. add props onChange and value in ech form type */}
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} />

        <button type="submit">Submit</button>
      </form>
    </div>

  );
};

export default YoutubeForm;
