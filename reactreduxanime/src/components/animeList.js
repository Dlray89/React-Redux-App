import React from "react";
import { connect } from "react-redux";


const AnimeList = props => {
    return(
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {props.MoviesEpisodes.map(MoviesEpisode => (
                <div style={{border:"solid 2px  #45a247", width: "30%", margin: " 2% auto", borderRadius: "30px",  background: "linear-gradient(to bottom, #283c86, #45a247)"}}>
                <h1 style={{fontSize: '28px', width: "90%", margin: "2% auto", padding: "3%"}} key={MoviesEpisode.mal_id}> 
                {MoviesEpisode.title}</h1>
                <img style={{borderRadius: "20px"}} src={MoviesEpisode.image_url} />
                <p style={{background: "black", color: "white", fontSize: "23px", padding: "5%", background: "linear-gradient(to bottom, #283c86, #45a247)", borderRadius: "20px"}}>{MoviesEpisode.synopsis}<br />
                Episodes: {MoviesEpisode.episodes}<br />
               Rating: {MoviesEpisode.score}<br /> 
                Rated: {MoviesEpisode.rated}<br />
                <button style={{padding: "3%", width: "50%", margin: "2% auto",  background: "#45a247", border: "solid 2px #283c86", borderRadius: "20px"}}><a style={{textDecoration: "none", color: "#283c86", fontSize:"20px",}} href={MoviesEpisode.url}>View More</a></button>
                </p>
               
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return{
        MoviesEpisodes: state.MoviesEpisodes,
        error: state.error
    }
}
export default connect(mapStateToProps, {})(AnimeList)