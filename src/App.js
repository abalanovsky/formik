import './App.css';
import * as Yup from "yup";
import {Field, Formik} from "formik";

const FormValidation = Yup.object().shape({
  name: Yup.string()
      .min(2, 'Too short name')
      .max(17, 'Too long name')
      .required('Name is required'),
  email: Yup.string()
      .email('Incorrect email')
      .required('Email is required'),
    password: Yup.string()
        .min(8,'Must contain 8 and more symbols')
        .required('Password is required')
})
function App() {
  return (
    <div>
      <h1>Register form</h1>
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={FormValidation}
            validateOnChange={false}
            validateOnBlur={true}
            onSubmit={(values) => {
                alert(`Name: ${values.name}\n Email: ${values.email}\n Password: ${values.password}`);
            }}
        >
          {({
              errors,
              touched,
              handleSubmit,
              isSubmitting
            }) => (
              <form onSubmit={handleSubmit}>
                  <Field name="name" placeholder="First Name"/>
                  {errors.name && touched.name ? ( <div className="error-container"> {errors.name} </div>) : null}
                  <Field type="email" name="email" placeholder="Email" />
                  {errors.email && touched.email ? ( <div className="error-container"> {errors.email} </div>) : null}
                  <Field name="password" type="password" placeholder="Password"/>
                  {errors.password && touched.password ? ( <div className="error-container"> {errors.password} </div>)
                      : null}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
          )}
        </Formik>
    </div>
  );
}

export default App;
