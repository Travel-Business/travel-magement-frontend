import TripCard from "./TripCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  tripCardContainer: {
    padding: "6% 1% 2% 4%",
  },
}));

export default function Trips(props) {
  const classes = useStyles();
  if (props.data) {
    const { data, searchQuery } = props;
    const searchQueryResult = data.filter((query) => {
      return query.title.toLowerCase().includes(searchQuery);
    });
    const trips = searchQueryResult.map((trip, index) => {
      return (
        <Grid
          key={index}
          item
          className={classes.tripCardContainer}
          xs={12}
          md={3}
        >
          <TripCard data={trip} />
        </Grid>
      );
    });
    return <Grid container>{trips}</Grid>;
  }
  return <></>;
}
