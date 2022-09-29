import PropTypes from 'prop-types';

function ContentRowMovies(props) {
  return (
    <div className="row">

      {
        props.rowMovies.map((item, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <div className={`card border-left-${item.corConteudo} shadow h-100 py-2`}>
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className={`text-xs font-weight-bold text-${item.corConteudo} text-uppercase mb-1`}>
                        {item.titulo}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {item.cifra}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className={`fas ${item.icone} fa-2x text-gray-300`}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

ContentRowMovies.propTypes = {
  rowMovies: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    corConteudo: PropTypes.string.isRequired,
    // Para validarmos dois tipos de valores, ou string, ou number
    cifra: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    // Caso precisemos expecíficar as opções válidas, informamos dessa forma
    // icone: PropTypes.oneOf(["fa-film", "fa-award", "fa-user"])
    icone: PropTypes.string.isRequired
  }))
}

export default ContentRowMovies;