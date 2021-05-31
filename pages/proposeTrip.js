/* /pages/restaurants.js */
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import fetch from "isomorphic-fetch";
import Cookies from "js-cookie";
import { Button } from "@material-ui/core";
import Trips from "../components/Trips/TripCard";
import AppContext from "../context/AppContext";
import Cookies2 from "cookies";

export default function ProposeTrip(props) {
  const { data2 } = props;
  console.log(data2);
  const userToken = Cookies.get("token");
  const handleCreate = async () => {
    const data = {
      organization: "lalatravel",
      price: 333,
      contactname: "david",
      state: "la",
      email: "ddd33333@gmail.com",
      tripmeta: { test: "test" },
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/dmc-proposals`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: userToken && { Authorization: `Bearer ${userToken}` },
      }
    );
    console.log(response);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleCreate}>
        submit
      </Button>
    </div>
  );
}

ProposeTrip.getInitialProps = async (ctx) => {
  const cookies = new Cookies2(ctx.req, ctx.res);
  const userToken = cookies.get("token");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/dmc-proposals`,
    {
      method: "GET",

      headers: userToken && { Authorization: `Bearer ${userToken}` },
    }
  );
  const data = await response.json();
  //   console.log("test data 76", data);
  return {
    data2: data,
  };
};
