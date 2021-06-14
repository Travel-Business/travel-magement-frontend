// import axios from "axios";

const dmcProfileService = {
  getDmcProfile: async ({ dmc_profile, token }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/dmc-profiles/${dmc_profile}`,
      {
        method: "GET",
        headers: token && { Authorization: `Bearer ${token}` },
      }
    );

    const data = await response.json();
    return data;
  },
  updateDmcProfile: async ({ token, body, dmc_profile }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/dmc-profiles/${dmc_profile}`,
      {
        method: "PUT",
        headers: token && { Authorization: `Bearer ${token}` },
        body,
      }
    );
    return response;
  },
  createDmcVerificationForm: async (userToken, body) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/dmc-profiles`,
      {
        method: "POST",
        headers: userToken && { Authorization: `Bearer ${userToken}` },
        body,
      }
    );
    return response;
  },
};

export default dmcProfileService;
