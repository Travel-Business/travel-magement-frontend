/* /pages/restaurants.js */
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import fetch from "isomorphic-fetch";
import Cookies from "cookies";
import TripContainer from "../../components/Trips/TripsContainer";
import AppContext from "../../context/AppContext";
// import Cookies from "cookies";
const GET_ALL_EXIST_TRIPS = gql`
  query {
    trips {
      id
      title
      country
      city
      datefrom
      dateto
      description
      budget
      published_at
      numOfPeople
      photo {
        url
      }
    }
  }
`;
export function Data(props) {
  const { tripData } = props;

  const data = tripData.map((trip, index) => (
    <li key={index}>
      {trip.title}
      <br />
      {trip.country}
    </li>
  ));
  return <ul>{data}</ul>;
}

// export async function Data(userToken, cb) {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${userToken}`,
//     },
//   });
//   const data = await response.json();
//   if (data.length) cb(data);
// }

export default function DmcPage(props) {
  //   const { data } = props;
  const { loading, error, data } = useQuery(GET_ALL_EXIST_TRIPS);
  console.log("35 graphql", { data });
  //   console.log("test data 48", data);
  //   const appContext = useContext(AppContext);
  //   const router = useRouter();
  //   const [tripData, setTripData] = useState({});
  //   const userToken = Cookies.get("token");
  //   console.log("test user token 52", userToken);
  //   useEffect(() => {
  //     getData(userToken, setTripData);
  //   }, [tripData.length]);

  //   const { loading, error, data } = useQuery(GET_ALL_EXIST_TRIPS, {
  //     headers: {
  //       authorization: `Bearer ${userToken}`,
  //     },
  //   });
  //   const data2 = data.map((trip, index) => <li key={index}>{trip.title}</li>);
  //   console.log(data2);
  if (data?.trips) {
    const { trips } = data;
    return (
      <div>
        {loading && <span>Loading</span>}
        <TripContainer data={trips} />
        <Data tripData={trips} />
      </div>
    );
  }
  return <></>;
}
