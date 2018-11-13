import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const MoviesList = ({ movies }) => {
    return (
        Object.keys(movies).map(id=> {
            return (
                <Link key={id} to={`/movies/${id}`}>{movies[id].title}</Link>
            )
        })
    )
}

export default MoviesList
