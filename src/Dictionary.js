import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photo, setPhoto] = useState(null);

  function wordSearch(response) {
    setResult(response.data[0]);
  }
  function photoSearch(response) {
    setPhoto(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(wordSearch);
  }

  let photoApiKey = "Mr2ty9xzesxvo4iCK4Oh3CHwTpMYkKx6Ny1nrmzH7jEJRjjDzHMJvs4K";
  let photoUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
  let headers = { Authorization: `${photoApiKey}` };
  axios.get(photoUrl, { headers: headers }).then(photoSearch);

  function searchResult(event) {
    event.preventDefault();
    search();
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={searchResult}>
            <input
              type="search"
              autoFocus={true}
              onChange={keywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested Words: candy, balloon, beautiful, octopus...
          </div>
        </section>
        <Results result={result} />

        <Photos photos={photo} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
