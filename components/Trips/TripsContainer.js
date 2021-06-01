import TripCard from "./TripCard";
import { Grid } from "@material-ui/core";
import Trips from "./Trips";
// export function Trips({ data }) {
//   if (data) {
//     console.log("test");
//     const trips = data.map((trip) => {
//       return (
//         <Grid item md={3}>
//           <TripCard key={trip.id} data={trip} />
//         </Grid>
//       );
//     });
//     return <Grid container>{trips}</Grid>;
//   }
//   return <></>;
// }

export default function TripContainer({ data, query }) {
  return (
    <>
      <Trips data={data} searchQuery={query} />
      {/* <Trips data={data} query={query} /> */}
    </>
  );
}
