async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/renan-augusto/meucv/master/data/profile.json";

  const fetching = await fetch(url);

  return await fetching.json();
}
