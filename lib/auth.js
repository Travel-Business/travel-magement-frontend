import { useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const registerUser = (username, email, password) => {
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/register`, { username, email, password })
      .then((res) => {
        Cookie.set("token", res.data.jwt);
        resolve(res);
        Router.push("/");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const forgotPassword = async (
  email,
  setError,
  setLoading,
  setSuccess
) => {
  // Request API.
  console.log({ email });
  // return new Promise((resolve, reject) => {
  try {
    const response = await axios.post(`${API_URL}/auth/forgot-password`, {
      // email: "2015rpro@gmail.com",
      email,
      // url: "http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password",
    });
    const { data } = response;
    if (data.ok) {
      setSuccess(true);
      setError({});
    }
    console.log("inside auth", { data });
  } catch (error) {
    setError(error.response.data);
    setLoading(false);
    console.log(error.response);
  }

  // .then((response) => {
  // Handle success.
  // console.log({ response });

  // return response;
  // console.log("Your user received an email");
  // })

  //     .catch((error) => {
  //       // Handle error.
  //       console.log("An error occurred:", error.response);
  //       reject(error);
  //     });
  // });
};

export const login = (identifier, password) => {
  if (typeof window === "undefined") {
    return;
  }

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/`, { identifier, password })
      .then((res) => {
        //set token response from Strapi for server validation
        Cookie.set("token", res.data.jwt);

        //resolve the promise to set loading to false in SignUp form
        resolve(res);
        //redirect back to home page for restaurance selection
        Router.push("/");
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

export const logout = () => {
  //remove token and user cookie
  Cookie.remove("token");
  delete window.__user;
  // sync logout between multiple windows
  window.localStorage.setItem("logout", Date.now());
  //redirect to the home page
  Router.push("/");
};

//Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement
export const withAuthSync = (Component) => {
  const Wrapper = (props) => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        Router.push("/login");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }
  return Wrapper;
};
