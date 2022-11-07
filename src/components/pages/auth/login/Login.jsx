import React, { useEffect } from "react";
import "./Login.css";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import Footer_v1 from "../../../global-components/footer";
import Navbar from "../../../global-components/navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { getCurrentUser } from "../user/userSlice";
import { useFormik } from "formik";
import { useCheckUserMutation } from "../../../../services/auth";
import LoginContent from "./LoginContent";

const initialValues = {
  emailAddress: "",
  password: "",
};

const registrationSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Wrong email format")
    .required("Email is required"),

  password: Yup.string().required("password is required"),
});

const Login = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const history = useHistory();
  // const dispatch = useDispatch();
  const [checkUser, { data, isSuccess, isError, error, isLoading }] =
    useCheckUserMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values) => {
      await checkUser({
        email: values.emailAddress,
        password: values.password,
      });
    },
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        history.push("/myAccount");
        let accessToken = data?.included[0].attributes.token;
        let refreshToken = data?.included[1].attributes.token;

        localStorage.setItem("access-token", accessToken);
        localStorage.setItem("refresh-token", refreshToken);
        // dispatch(getCurrentUser(data));
        window.location.reload(true);
        toast.success("You have login successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      }, 1000);

      // toast.success("You have login successfully");
    }
    // eslint-disable-next-line
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.errors[0].title,{
        
      });
    }
    // eslint-disable-next-line
  }, [isError]);

  return (
    <div>
      <Navbar />

      <LoginContent
        formik={formik}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </div>
  );
};

export default Login;
