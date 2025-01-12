import './App.css';
import {useState} from "react";


function App() {

  const [title, setTitle] = useState('Wall-E');

  const movies = [

    {title: "Wall-E"},

    {title: "Pulp Fiction"},

    {title: "Matrix"},

    {title: "1670"},

];

  let message;

  if (title.length < 5) {

    message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;

  } else if (title.length < 15) {

    message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;

  } else {

    message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;

}

// ...

  function handleChange(event) {

      setTitle(event.target.value);

  }

  function handleClick(event) {

    alert(title);
  }

  return (

      <div>

          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>

        {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}

        </ul>

          <h2>My favourite movie for today is {title}</h2>
          {title.length > 0 && <div>{message}</div>}

          <input type="text" value={title} onChange={handleChange}/>
          
          {/* <button onClick={handleClick}>Show movie title</button> */}

          <button onClick={() => alert(title)}> Show movie title</button>
      </div>

  );

}

export default App;