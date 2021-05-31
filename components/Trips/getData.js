async function getData(userToken) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`, {
    method: "GET",
    headers: userToken && { Authorization: `Bearer ${userToken}` },
  });
  console.log("response dmc home", response.body);
  return response;
}

export default getData;
