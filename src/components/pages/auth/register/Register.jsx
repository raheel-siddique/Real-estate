import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import "./Register.css";
import Footer_v1 from "../../../global-components/footer";
import Navbar from "../../../global-components/navbar";
import * as Yup from "yup";
import RegisterContent from "./RegisterContent";
import { useAddUserMutation } from "../../../../services/auth";

toast.configure();

const initialValues = {
  firstName: "",
  emailAddress: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

const registrationSchema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),
  emailAddress: Yup.string()
    .email("Wrong email format")
    .required("Email is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string().required("password is required"),
  confirmPassword: Yup.string()
    .required("confirm password is required")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});

const Register = () => {
  const history = useHistory();
  const [createUser, { data, isSuccess, isError, error, isLoading }] =
    useAddUserMutation();

  const handleChange = (event, setter) => {
    if (
      event.target.type === "text" ||
      event.target.type === "email" ||
      event.target.type === "password"
    ) {
      setter(event.target.value);
    } else if (event.target.type === "checkbox") {
      setter((prev) => !prev);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values) => {
      await createUser({
        email: values.emailAddress,
        firstName: values.firstName,
        lastName: values.lastName,
        isUsCitizen: isUSCitizen,
        password: values.password,
      });
    },
  });

  let [isUSCitizen, setIsUSCitizen] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (isSuccess) {
      const token = data.included[0].attributes.token;
      history.push(`/otp-verification?token=${token}`);

      toast.success("User registered successfully");
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.errors[0].title);
    }
    //eslint-disable-next-line
  }, [isError]);

  return (
    <>
      <Navbar />
      <RegisterContent
        formik={formik}
        isLoading={isLoading}
        isError={isError}
        handleChange={handleChange}
        setIsUSCitizen={setIsUSCitizen}
        error={error}
      />
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};

export default Register;
