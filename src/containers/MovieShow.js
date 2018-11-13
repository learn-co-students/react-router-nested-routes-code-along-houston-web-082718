import React from 'react'

const MovieShow = ({ match, movies }) => {
    console.log(match.params.id)
    console.log(movies)
    return (
        <div>
            <h3>{movies[match.params.id].title}</h3>
        </div>
    )
}

export default MovieShow
