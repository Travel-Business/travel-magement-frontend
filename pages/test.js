import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default function Test() {
  // Request API.
  axios
    .post(`${API_URL}/auth/forgot-password`, {
      email: "2015rpro@gmail.com",
      url: "http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password",
    })
    .then((response) => {
      // Handle success.
      console.log("Your user received an email");
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
  return <></>;
}
