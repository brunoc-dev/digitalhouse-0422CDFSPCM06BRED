import PropTypes from 'prop-types';

function GenresInDb(props) {
  return (
    <div className="card-body">
      <div className="row">
          { 
            props.genres.map((genre, index) => {
              return(
                <div key={index} className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                      { genre }
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

GenresInDb.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

GenresInDb.defaultProps = {
  genres: []
}

export default GenresInDb;