import { Button, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Cookies2 from "cookies";
import FullScreenDialog from "../../components/DmcProposal/DmcProposal";
import Image from "next/image";
import PrimarySearchAppBar from "../../components/NavbarWithoutSearch";
export default function ProposedTrip({ selectedTrip }) {
  if (selectedTrip && selectedTrip[0]) {
    const {
      budget,
      city,
      country,
      datefrom,
      dateto,
      description,
      id,
      photo,
      title,
    } = selectedTrip[0];
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    return (
      <>
        <PrimarySearchAppBar />
        <FullScreenDialog
          handleOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
        <Image priority={true} height={300} width={500} src={photo[0].url} />
        <Grid container>
          <Grid>
            <Typography>Trip Name: {title}</Typography>
            <Typography>Country: {country}</Typography>
            <Typography>City: {city}</Typography>
            <Typography>Start From: {datefrom}</Typography>
            <Typography>Start To: {dateto}</Typography>
            <Typography>Trip Description: {description}</Typography>
            <Typography>Trip budget: ${budget}</Typography>

            <Button
              onClick={handleClickOpen}
              variant="contained"
              color="primary"
            >
              Propose Trip
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
  return <></>;
}

export async function getStaticPaths() {
  //   const paths = [
  //     {
  //       params: {
  //         id: "italy",
  //       },
  //     },
  //     {
  //       params: {
  //         id: "rome",
  //       },
  //     },
  //     {
  //       params: {
  //         id: "france",
  //       },
  //     },
  //     {
  //       params: {
  //         id: "japan",
  //       },
  //     },
  //   ];

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`);
  const trips = await response.json();

  const paths = trips.map((trip) => ({ params: { id: trip.id } }));

  return { paths, fallback: true };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  console.log(params);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`);
  const trips = await response.json();
  const selectedTrip = trips.filter((trip) => trip.id === params.id);
  //   const cookies = new Cookies2(ctx.req, ctx.res);
  //   const userToken = cookies.get("token");
  //   console.log("test token", userToken);
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}/dmc-proposals`,
  //     {
  //       method: "GET",

  //       headers: userToken && { Authorization: `Bearer ${userToken}` },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log("test data 76", data);
  return {
    props: { selectedTrip },
  };
}
