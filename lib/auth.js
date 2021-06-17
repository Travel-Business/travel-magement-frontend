import { useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const registerUser = ({ username, email, password, router }) => {
  if (typeof window === "undefined") {
    return;
  }

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/register`, {
        username,
        email,
        password,
        // userId: "test",
      })
      .then((res) => {
        Cookie.set("token", res.data.jwt);
        resolve(res);
        router.push("/");
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
  try {
    const response = await axios.post(`${API_URL}/auth/forgot-password`, {
      email,
    });
    const { data } = response;
    if (data.ok) {
      setSuccess(true);
      setError({});
    }
  } catch (error) {
    setError(error.response.data);
    setLoading(false);
  }
};

export const resetPassword = ({ password, passwordConfirmation, code, cb }) => {
  axios
    .post(`${API_URL}/auth/reset-password`, {
      code,
      password,
      passwordConfirmation,
    })
    .then((response) => {
      // Handle success.
      cb(true);
      console.log("Your user's password has been changed.");
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
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
