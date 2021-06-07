import { Button, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Cookies2 from "cookies";
import FullScreenDialog from "../../components/DmcProposal/DmcProposal";
import Image from "next/image";
import PrimarySearchAppBar from "../../components/NavbarWithoutSearch";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../components/Footer/Footer";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  container: {
    // minHeight: "100vh",
  },
  tripProposalBannerContainer: {},
  buttonContainer: {
    padding: "3% 0% 0% 0%",
    marginBottom: "20%",
    display: "flex",
    justifyContent: "center",
  },
  tripDetailsContainer: {
    padding: "3%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default function ProposedTrip({ selectedTrip }) {
  const classes = useStyles();
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
      <div className={classes.container}>
        <PrimarySearchAppBar />
        <FullScreenDialog
          handleOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
        <div className={classes.tripProposalBannerContainer}>
          <Image
            className={classes.heroImage}
            priority={true}
            height={500}
            width={1800}
            src={"https://source.unsplash.com/random"}
          />
        </div>

        <Grid className={classes.tripDetailsContainer} container>
          <Grid item md={12}>
            <Typography variant="h4" align="center">
              Trip Name: {title}
            </Typography>
            <Typography align="center">Country: {country}</Typography>
            <Typography align="center">City: {city}</Typography>
            <Typography align="center">Start From: {datefrom}</Typography>
            <Typography align="center">Start To: {dateto}</Typography>
            <Typography align="center">
              Trip Description: {description}
            </Typography>
            <Typography align="center">Trip budget: ${budget}</Typography>
            <div className={classes.buttonContainer}>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
              >
                Propose This Trip
              </Button>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
  return <>No Trip Available</>;
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`);
  const trips = await response.json();

  const paths = trips.map((trip) => ({ params: { id: trip.id } }));

  return { paths, fallback: true };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`);
  const trips = await response.json();
  const selectedTrip = trips.filter((trip) => trip.id === params.id);
  return {
    props: { selectedTrip },
  };
}
