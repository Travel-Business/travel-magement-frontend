/* /pages/restaurants.js */
import React, { useContext, useEffect, useState } from "react";
import VerifyFormNotice from "../components/Home/VerifyNotice";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Cookies from "cookies";
import TripContainer from "../components/Trips/TripsContainer";
import AppContext from "../context/AppContext";
import Footer from "../components/Footer/Footer";
// import Cookies from "cookies";
import PrimarySearchAppBar from "../components/NabarWithSearch";

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

export default function DmcPage(props) {
  const { user, setUser, isAuthenticated } = useContext(AppContext);
  const [query, updateQuery] = useState("");
  const { loading, error, data } = useQuery(GET_ALL_EXIST_TRIPS);

  if (data?.trips) {
    const { trips } = data;
    return (
      <div>
        <PrimarySearchAppBar query={query} updateQuery={updateQuery} />
        {loading && <span>Loading</span>}
        {error && error}
        {isAuthenticated && <VerifyFormNotice user={user ? user : ""} />}
        <TripContainer data={trips} query={query} />
        <Footer />
      </div>
    );
  }
  return <>Loading</>;
}
