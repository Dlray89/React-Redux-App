import React from "react";
import { connect } from "react-redux";


const AnimeList = props => {
    return(
        <div>
            {props.MoviesEpisodes.map(MoviesEpisode => (
                <div>
                <div key={MoviesEpisode.mal_id}> 
                {MoviesEpisode.title}</div>
                <img src={MoviesEpisode.image_url} />
                <p>{MoviesEpisode.synopsis}<br />
                Episodes: {MoviesEpisode.episodes}<br />
               Rating: {MoviesEpisode.score}<br /> 
                Rated: {MoviesEpisode.rated}
                </p>
                <button><a href={MoviesEpisode.url}>View More</a></button>
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