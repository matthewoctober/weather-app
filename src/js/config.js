export const config = {
  googleUrl: "https://maps.googleapis.com/maps/api/geocode/json",
  googlePlacesURL:
    "https://maps.googleapis.com/maps/api/place/autocomplete/json?",
  googleApiKey: process.env.GOOGLE_API_KEY,

  darkskyUrl: "https://api.darksky.net/forecast/",
  darkskyApiKey: process.env.DARK_SKY_API_KEY
};
