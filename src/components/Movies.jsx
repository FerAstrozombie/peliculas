function ListOfMovies({ movies }) {
    return (
        <div className='movies'>
            {
                movies.map(movie => (
                    <div className='movie' key={movie.id}>
                        <img src={movie.image} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                    </div>
                ))
            }
        </div>
    )
}

function NoMoviesResults() {
    return (
        <p>No se encontraron películas para esta búsqueda</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}