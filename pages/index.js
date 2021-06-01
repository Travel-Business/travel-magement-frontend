/* /pages/restaurants.js */
import { Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import React, { useContext, useEffect, useState } from "react";
import VerifyFormNotice from "../components/Home/VerifyNotice";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import fetch from "isomorphic-fetch";
import Cookies from "cookies";
import TripContainer from "../components/Trips/TripsContainer";
import AppContext from "../context/AppContext";
import { Typography, Button } from "@material-ui/core";
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

export default function DmcPage(props) {
  const { user, setUser, isAuthenticated } = useContext(AppContext);
  console.log(user, isAuthenticated);
  const [query, updateQuery] = useState("");
  const { loading, error, data } = useQuery(GET_ALL_EXIST_TRIPS);

  if (data?.trips) {
    const { trips } = data;
    return (
      <div>
        {loading && <span>Loading</span>}
        {isAuthenticated && <VerifyFormNotice user={user ? user : ""} />}

        <div className="search">
          <InputGroup>
            <InputGroupAddon addonType="append"> Search </InputGroupAddon>
            <Input
              onChange={(e) => updateQuery(e.target.value.toLocaleLowerCase())}
              value={query}
            />
          </InputGroup>
        </div>
        <TripContainer data={trips} query={query} />
      </div>
    );
  }
  return <>Please login</>;
}
