import React from 'react';
import { connect } from "react-redux";
import { getData } from "./actions";
import AnimeList from "./components/animeList";


function App(props) {

  const handleData = e => {
    e.preventDefault();
    props.getData();
  }

  return (

    <div className="App">
     <h1> My Hero Academia</h1>
     {props.isFetchingData ? (
  <div> we are fetching data</div>
    ) : ( 
    <button onClick={handleData}>Movies & Episodes</button> )}
<AnimeList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  }
}

export default connect(mapStateToProps,
  { getData })(App);
