const API_BASE_URL =
  import.meta.env.VITE_API_URL;

export async function searchCities(city) {
  const url = new URL(
    `${API_BASE_URL}/search`
  );

  url.searchParams.set("city", city);

  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();

    throw new Error(
      errorData.message ||
        "Unable to search for cities"
    );
  }

  const data = await response.json();

  return data.data || [];
}

export async function getWeather(
  latitude,
  longitude
) {
  const url = new URL(
    `${API_BASE_URL}/weather`
  );

  url.searchParams.set("lat", latitude);
  url.searchParams.set("lon", longitude);

  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();

    throw new Error(
      errorData.message ||
        "Unable to fetch weather data"
    );
  }

  const data = await response.json();

  return data.data;
}

export async function getLocationName(
  latitude,
  longitude
) {
  const url = new URL(
    "https://api.bigdatacloud.net/data/reverse-geocode-client"
  );

  url.searchParams.set(
    "latitude",
    latitude
  );

  url.searchParams.set(
    "longitude",
    longitude
  );

  url.searchParams.set(
    "localityLanguage",
    "en"
  );

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Unable to determine location name"
    );
  }

  const data = await response.json();

  return {
    name:
      data.city ||
      data.locality ||
      data.principalSubdivision ||
      "Current Location",

    admin1:
      data.principalSubdivision || "",

    country:
      data.countryName || "",

    latitude,
    longitude,
  };
}