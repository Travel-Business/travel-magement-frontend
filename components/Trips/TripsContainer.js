import TripCard from "./TripCard";
import { Grid } from "@material-ui/core";
export function Trips({ data }) {
  if (data) {
    console.log("test");
    const trips = data.map((trip) => {
      return (
        <Grid item md={3}>
          <TripCard key={trip.id} data={trip} />
        </Grid>
      );
    });
    return <Grid container>{trips}</Grid>;
  }
  return <></>;
}

export default function TripContainer({ data }) {
  return (
    <>
      <Trips data={data} />
    </>
  );
}
