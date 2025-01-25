export default function MoviesList(props) {
    return (
        <div>
            <h2>Movies list</h2>
            <ul>
                {
                props.movies.map(movie => <li key={movie.title}>
                    {movie.title} ({movie.year})
                    </li>)
                    }
            </ul>

        </div>

    )

}