const postUrl = "https://wordsapiv1.p.rapidapi.com/words/";

export const fetchWord = async () => {
  const res = await fetch(postUrl + "hello", {
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

export const searchWord = async (keyword: string) => {
  const res = await fetch(postUrl + keyword, {
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
      alert("The word does not exist. Please try again");
      return {};
    });
  return res;
};

export const randomWord = async () => {
  const res = await fetch(postUrl + "?random=true", {
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
      alert("The word does not exist. Please try again");
      return {};
    });
  return res;
};
