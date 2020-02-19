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
     <h1 style={{color: " white"}}> My Hero Academia</h1>
     {props.isFetchingData ? (
  <div> we are fetching data</div>
    ) : ( 
    <button style={{padding: "1%", width: "10%", margin: "0 auto",  background: "#45a247", border: "solid 2px #283c86", borderRadius: "20px"}} onClick={handleData}>Movies & Episodes</button> )}
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
