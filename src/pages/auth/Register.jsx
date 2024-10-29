// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { Button, Label, TextInput } from "flowbite-react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../redux/feature/user/UserSlice";
// import { fetchCreateUser } from "../redux/feature/user/UserSlice";

import RegisterComponent from "../../components/RegisterComponent";

// // Regex for a strong password
// const strongPasswordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// // Initial values
// const initialValues = {
//   email: "",
//   username: "",
//   password: "",
//   confirmPassword: "",
// };

// // Define the validation schema using Yup
// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   username: Yup.string().required("Username is required"),
//   password: Yup.string()
//     .matches(strongPasswordRegex, "Password must be strong")
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });

// export const Register = () => {
//   const dispatch = useDispatch();
//   const userResponse = useSelector(selectUser);

//   return (
//     <section className="flex justify-center items-center">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           console.log(values);
//           dispatch(fetchCreateUser(values));
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form className="w-full max-w-sm">
//             <div className="mb-4">
//               <Label htmlFor="email">Email</Label>
//               <Field name="email">
//                 {({ field }) => (
//                   <TextInput
//                     {...field}
//                     type="email"
//                     id="email"
//                     placeholder="Enter your email"
//                   />
//                 )}
//               </Field>
//               {errors.email && touched.email ? (
//                 <div className="text-red-500 text-sm">{errors.email}</div>
//               ) : null}
//             </div>
//             <div className="mb-4">
//               <Label htmlFor="username">Username</Label>
//               <Field name="username">
//                 {({ field }) => (
//                   <TextInput
//                     {...field}
//                     type="text"
//                     id="username"
//                     placeholder="Enter your username"
//                   />
//                 )}
//               </Field>
//               {errors.username && touched.username ? (
//                 <div className="text-red-500 text-sm">{errors.username}</div>
//               ) : null}
//             </div>
//             <div className="mb-4">
//               <Label htmlFor="password">Password</Label>
//               <Field name="password">
//                 {({ field }) => (
//                   <TextInput
//                     {...field}
//                     type="password"
//                     id="password"
//                     placeholder="Enter your password"
//                   />
//                 )}
//               </Field>
//               {errors.password && touched.password ? (
//                 <div className="text-red-500 text-sm">{errors.password}</div>
//               ) : null}
//             </div>
//             <div className="mb-4">
//               <Label htmlFor="confirmPassword">Confirm Password</Label>
//               <Field name="confirmPassword">
//                 {({ field }) => (
//                   <TextInput
//                     {...field}
//                     type="password"
//                     id="confirmPassword"
//                     placeholder="Confirm your password"
//                   />
//                 )}
//               </Field>
//               {errors.confirmPassword && touched.confirmPassword ? (
//                 <div className="text-red-500 text-sm">
//                   {errors.confirmPassword}
//                 </div>
//               ) : null}
//             </div>
//             <Button type="submit" className="mt-5">
//               Register
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </section>
//   );
// };

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Label, Checkbox } from "flowbite-react";
import { Select, Button } from "flowbite-react";
import * as Yup from "yup";
import React from "react";
import { div } from "framer-motion/client";

const validationSchema = Yup.object({
  fullname: Yup.string().required("Name is required"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.string().required("Date of Birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  email: Yup.string().email("Invalid email").required("Email is required "),
  mobile: Yup.string().required("Phnone number is required"),
});
export default function Register() {
  return (
    <>
      <Formik
        initialValues={{
          fullname: "",
          gender: "",
          dob: " ",
          nationality: "",
          email: "",
          mobile: "",
        }}
        onSubmit={(value, { setSubmitting }) => {
          console.log(value);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => {
          return (
            <div className="mx-auto flex justify-center w-[550px] rounded-lg border shadow-lg bg-[#e8edfd] mt-10">
              <form>
                <div>
                  <div className="py-3">
                    <label htmlFor="">Full Name : </label>
                    <Field
                      className="border rounded-lg py-1 px-1"
                      name="name"
                      type="text"
                      placeholder="Enter your name "
                    />
                    <ErrorMessage
                      name="fullname  "
                      component={div}
                      className="text-red-600 
                "
                    />
                  </div>

                  <div className="flex w-[200px]">
                    <label htmlFor="">Gender : </label>

                    <Select id="gender" required>
                      <option>Female</option>
                      <option>Male</option>
                    </Select>
                    <ErrorMessage
                      name="gender"
                      component={div}
                      className="text-red-600 
                "
                    />
                  </div>

                  <div className="py-3">
                    <label htmlFor="">Date of birth : </label>
                    <Field
                      className="border rounded-lg py-1 px-1"
                      name="Date"
                      type="Date"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="dob"
                      component={div}
                      className="text-red-600 
                "
                    />
                  </div>

                  <div className="py-3">
                    <label htmlFor="" vlaue="">
                      Nationality :{" "}
                    </label>
                    <Field
                      className="border rounded-lg py-1 px-1"
                      name="nationality"
                      type="text"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="nationality"
                      component={div}
                      className="text-red-600 
                "
                    />
                  </div>

                  <div className="py-3">
                    <label htmlFor="" vlaue="">
                      Email :{" "}
                    </label>
                    <Field
                      className="border rounded-lg py-1 px-1"
                      name="email"
                      type="email"
                      placeholder="name@gmail.com "
                    />
                    <ErrorMessage
                      name="email"
                      component={div}
                      className="text-red-600 
                "
                    />
                  </div>

                  <div className="py-3">
                    <label htmlFor="" vlaue="">
                      Phone Number :{" "}
                    </label>
                    <Field
                      className="border rounded-lg py-1 px-1"
                      name="tel"
                      type="tel"
                      placeholder=""
                    />
                    <ErrorMessage
                      name="mobile"
                      component={div}
                      className="text-red-600 
                "
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                      I agree with the&nbsp;
                      <a
                        href="#"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        terms and conditions
                      </a>
                    </Label>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}
