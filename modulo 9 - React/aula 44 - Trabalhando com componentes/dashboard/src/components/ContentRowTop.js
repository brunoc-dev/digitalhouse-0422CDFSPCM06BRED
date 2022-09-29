import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';

const rowMovies = [{
	titulo: "Movies in database",
	corConteudo: "primary",
	cifra: 74,
	icone: "fa-film"
},
{
	titulo: "Total awards",
	corConteudo: "success",
	cifra: 79,
	icone: "fa-award"
},
{
	titulo: "Actors quantity",
	corConteudo: "danger",
	cifra: 49,
	icone: "fa-user"
}]

const genres = [
	"Ação",
	"Animação",
	"Aventura",
	"Ficção científica",
	"Comedia",
	"Documental",
	"Drama",
	"Fantasia",
	"Infantis",
	"Musical",
]

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies rowMovies={rowMovies} />
					{/*<!-- End movies in Data Base -->*/}
					<div className="row">
						<LastMovieInDb />

						{/*<!-- Genres in DB -->*/}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<GenresInDb genres={genres} />
							</div>
						</div>
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;