import axios from "axios";

export default function ResetPassword() {
  // Request API.
  // Request API.
  axios
    .post("http://localhost:1337/auth/reset-password", {
      code: "6699072111f6160c0a4c2009eeb546ec4f3dfe3974046fc9dce6381f6a75ab965e71a8f5cee872c7f81ed0a6b0a4430d3b159867ce4213c4ed63237447063fc0",
      password: "test2023",
      passwordConfirmation: "test2023",
    })
    .then((response) => {
      // Handle success.
      console.log("Your user's password has been changed.");
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
  return <></>;
}
