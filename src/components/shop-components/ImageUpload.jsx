import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Imageupload.css";

const ImageUpload = ({ id, title, apiUrl, formik, defaultValue }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewFile, setPreviewFile] = useState(defaultValue ?? "");
  useEffect(() => {
    if (defaultValue) {
      setPreviewFile(defaultValue);
      formik.setFieldValue(id, defaultValue);
    }
    // eslint-disable-next-line
  }, [defaultValue]);

  const handleFileChange = async (event) => {
    let file = event.target.files[0];
    let key = event.target.name;
    const maxAllowedSize = 5 * 1024 * 1024;
    if (file.size > maxAllowedSize) {
      formik.setFieldError(id, "File Cannot be larger than 5mb");
      formik.setFieldTouched(id, true, false);
      event.target.value = "";
      return;
    }
    if (!file) {
      toast.error("Unfortunately File upload was unsuccessful");
      return;
    }
    const token = localStorage.getItem("access-token");
    const kycFormData = new FormData();
    kycFormData.append(key, file);
    try {
      const response = await axios({
        url: apiUrl,
        method: "POST",
        headers: {
          "x-access-token": token,
        },
        data: kycFormData,
        onUploadProgress: (data) => {
          setUploadProgress(Math.round((data.loaded / data.total) * 100));
        },
      });
      const data = response.data;
      formik.setFieldValue(id, data.data.imageUrl);
      setPreviewFile(data.data.imageUrl);
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <>
      <div className="col-lg-6 col-md-4 pb-4 ">
        <h6>{title}</h6>
        <input
          type="file"
          id={id}
          name={id}
          className="btn theme-btn-3 mb-10 imaguplpoadset"
          onChange={handleFileChange}
          size="5mb"
          accept="image/*"
        />
        {previewFile ? (
          <a
            href={previewFile}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={previewFile} alt={id} width={150} height={150} />
          </a>
        ) : (
          <></>
        )}

        {!!uploadProgress && (
          <div className="progress mt-2">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={uploadProgress}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: `${uploadProgress}%` }}
            >
              {`${uploadProgress}%`}
            </div>
          </div>
        )}
      </div>
      {formik.touched[id] && formik.errors[id] && (
        <div
          className="fv-plugins-message-container"
          style={{ position: "relative", bottom: 30 }}
        >
          <div className="fv-help-block text-danger">
            <span role="alert">{formik.errors[id]}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageUpload;
