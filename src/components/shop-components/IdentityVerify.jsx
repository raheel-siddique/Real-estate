import React, { useEffect, useState } from "react";
import { COUNTRIES } from "../commoncomponents/countries";
import { Formik } from "formik";
import ImageUpload from "./ImageUpload";
import DropDown from "./DropDown";
import * as Yup from "yup";
import { useAddIdentityVerificationDetailsMutation } from "../../services/users";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const identityVerificationSchema = Yup.object({
  countryOfOrigin: Yup.string()
    .default("")
    .equals(
      COUNTRIES.map((c) => c.code),
      "Country of Origin is not selected"
    )
    .required("Country of Origin is required"),
  documentType: Yup.string().required("Document Type is required"),
  kycFront: Yup.string().required("Upload Kyc Front Image"),
  kycBack: Yup.string().required("Upload Kyc Back Image"),
});

const AccountDetail = ({ currentUser }) => {
  const kycImages = currentUser?.data?.kycImages
    ? currentUser?.data?.kycImages
    : false;
  const verifiedUser = currentUser?.data?.status && currentUser.data.status === 'approved'

  const [documentsUploaded] = useState(false);
  const [loading] = useState(false);
  const [addVerificationDetails, addVerificationDetailsResponse] =
    useAddIdentityVerificationDetailsMutation();

  const handleSubmit = async (values, { resetForm }) => {
    const token = localStorage.getItem("access-token");
    await addVerificationDetails({
      countryOfOrigin: values.countryOfOrigin,
      kycDocumentType: values.documentType,
      kycFront: values.kycFront,
      kycBack: values.kycBack,
      token: token,
    });
    resetForm();
  };
  const history = useHistory();
  useEffect(() => {
    if (addVerificationDetailsResponse.isSuccess) {
      history.replace("/");
      toast.success(addVerificationDetailsResponse.data.Message);
    }
    // eslint-disable-next-line
  }, [addVerificationDetailsResponse.isSuccess]);

  useEffect(() => {
    if (addVerificationDetailsResponse.isError) {
      toast.error(addVerificationDetails.error.data.errors[0].title);
    }
    // eslint-disable-next-line
  }, [addVerificationDetailsResponse.isError]);

  const documentTypes = [
    {
      id: 1,
      label: "Govt Issued ID",
      value: "GovtIssuedID",
    },
    {
      id: 2,
      label: "Drivers Liscence",
      value: "DrivingLiscence",
    },
    {
      id: 3,
      label: "Passport",
      value: "Passport",
    },
  ];

  return (
    <>
      <div className="tab-pane fade" id="liton_tab_1_4">
        <h4>Identity Verification Documents</h4>
        {!documentsUploaded && !kycImages && (
          <div>
            <p>
              Upload the front side and the back side of your national
              identitification documents.
              <br />
              The images can be of entensions .png, .jpg, and .jpeg.
            </p>
            <Formik
              initialValues={{
                countryOfOrigin: "",
                documentType: "",
                kycFront: "",
                kycBack: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={identityVerificationSchema}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <DropDown
                      label={"Type of Document"}
                      id="documentType"
                      options={documentTypes}
                      formik={formik}
                    />
                    <DropDown
                      label={"Country of origin"}
                      id="countryOfOrigin"
                      options={COUNTRIES.map((c, idx) => ({
                        id: idx + 1,
                        label: c.name,
                        value: c.code,
                      }))}
                      formik={formik}
                    />
                  </div>
                  <ImageUpload
                    id="kycFront"
                    title="1. Front Side"
                    apiUrl={`${process.env.REACT_APP_API_BASE_URL}/api/users/add-kyc-front`}
                    formik={formik}
                    defaultValue={currentUser?.data.kycFrontImage}
                  />
                  <ImageUpload
                    id="kycBack"
                    title="2. Back Side"
                    apiUrl={`${process.env.REACT_APP_API_BASE_URL}/api/users/add-kyc-back`}
                    formik={formik}
                    defaultValue={currentUser?.data.kycBackImage}
                  />

                  <div className="btn-wrapper">
                    <button
                      className="theme-btn-1 btn reverse-color btn-block"
                      type="submit"
                    >
                      Submit Documents
                    </button>
                  </div>
                </form>
              )}
            </Formik>
            <br />
            {loading && <p>Uploading files..</p>}
          </div>
        )}
        {(documentsUploaded || kycImages) && (
          <div className="ltn__myaccount-tab-content-inner">
            <p>Your documents were successfully uploaded for verification.</p>
          </div>
        )}
        {verifiedUser && (
          <div className="ltn__myaccount-tab-content-inner">
            <br />
            <p>
              <strong>Status: </strong>Your identity has been verified by our
              verification service.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default AccountDetail;
