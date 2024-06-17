import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './EmailForm.css';

// Step 1: Define the validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
});

const EmailForm = () => {
    // Step 2: Define the initial form values
    const initialValues = {
        email: '',
    };

    // Step 3: Define the form submission handler
    const onSubmit = (values) => {
        console.log('Form data', values);
    };

    // Step 4: Render the Formik component
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ touched, errors, isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            className={touched.email && errors.email ? 'error' : null}
                        />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default EmailForm;
