import Trips from "./Trips";

export default function TripContainer({ data, query }) {
  return (
    <>
      <Trips data={data} searchQuery={query} />
    </>
  );
}
