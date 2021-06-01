import TripCard from "./TripCard";
import { Grid } from "@material-ui/core";

export default function Trips(props) {
  if (props.data) {
    const { data, searchQuery } = props;
    const searchQueryResult = data.filter((query) => {
      return query.title.toLowerCase().includes(searchQuery);
    });
    const trips = searchQueryResult.map((trip) => {
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
