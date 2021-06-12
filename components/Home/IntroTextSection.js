import Typography from "@material-ui/core/Typography";
export default function IntroTextSection({ classes }) {
  return (
    <>
      <Typography variant="h5" className={classes.introTitle}>
        About AIP: Your Trip is a work of art
      </Typography>
      <Typography className={classes.introBodyText}>
        Art Immersion Program (AIP) curates journeys in the arts and culture at
        gorgeous and sustainable locations around the world. We create
        comprehensive experiences designed and led by experts - for
        professionals in the arts and curious individuals- opening up world
        class arts knowledge to all. Small-group travel & independent
        departures, entirely tailor made, integrated with each community.
      </Typography>
      <Typography variant="h6" className={classes.introTitle}>
        we are looking for the following in our partnership with you
      </Typography>
      <Typography className={classes.introBodyText}>
        Accommodation: Venue Selection / Housing/ Space <br />
        Food : Local Cuisine, Food and Wine <br />
        Transport: Logistics and Transfers to and from event / other transport
        <br />
        <b>Day Trips</b>
        <br />
        Activities: Custom activity creation, tours, presentations <br />
        Vendors: Management of Suppliers / Vendor Sourcing <br />
        Guide: Local Guide / Staff , local resources
        <br /> Program Agenda <br />
        Program Timeline <br />
        Help with visitors arrival and planning logistics <br />
        *Specialty Services: Local PR, Special Event Decor / Entertainment
        <br />
        *Strategic and Creative Content
      </Typography>
      <Typography className={classes.introTitle} variant="h6">
        In order for us to get to know you, Please fill out the following form.
      </Typography>
    </>
  );
}
