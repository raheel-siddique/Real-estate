import axios from "axios";

export const uploadDocs = async (KycFrontFormData, KycBackFormData, setKycFrontUploadProgress) => {
  const token = localStorage.getItem("access-token");

  let [kycFrontUpload, kycBackUpload] = await Promise.all([
    axios({
      url: `${process.env.REACT_APP_API_BASE_URL}/api/users/add-kyc-front`,
      method: "POST",
      headers: {
        "x-access-token": token,
      },
      data: KycFrontFormData,
      onUploadProgress: (data) => {
        setKycFrontUploadProgress(Math.round((data.loaded / data.total) * 100))
      },
    }),
    axios({
      url: `${process.env.REACT_APP_API_BASE_URL}/api/users/add-kyc-back`,
      method: "POST",
      headers: {
        "x-access-token": token,
      },
      data: KycBackFormData,
    }),
  ]);

  if (kycFrontUpload.data.apiresponse && kycBackUpload.data.apiresponse) {
    return true;
  }

  return false;
};
