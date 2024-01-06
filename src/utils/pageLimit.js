//As of Jan 2024 TMDB sets an upper-limit on page number one can request from API.
//Any query for page above #500 gives the following response:
//"status_message": "Invalid page: Pages start at 1 and max at 500. They are expected to be an integer.",
//hence a hardcoded integer below.

export default 500;