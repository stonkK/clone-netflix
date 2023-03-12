import MovieCards from "../cards/MovieCards"
import './styles.css'

function MovieList(){

    return (
        <>
            <div ClassName='flex-vertical main-content'>
				<h1>Popular on netflix</h1>

				<div className='flex-horizontal movie'>
					<MovieCards />
					<MovieCards />
					<MovieCards />
				</div>
			</div>
        </>
    )
}

export default MovieList