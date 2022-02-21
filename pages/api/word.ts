const postUrl = "https://wordsapiv1.p.rapidapi.com/words/example";

export const fetchWord = async () => {
  const res = await fetch(postUrl, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8c7e0573camshbea28345ad7615ap110abejsnbf151dbdda4d",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });
  return res;
};
