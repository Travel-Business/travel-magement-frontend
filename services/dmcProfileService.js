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
    const data = await response.json();
    return data;
  },
  createDmcProfile: async ({ token, body, user }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/dmc-profiles`,
      {
        method: "POST",
        headers: token && { Authorization: `Bearer ${token}` },
        body,
      }
    );
    const data = response.json();
    return data;
  },
};

export default dmcProfileService;
