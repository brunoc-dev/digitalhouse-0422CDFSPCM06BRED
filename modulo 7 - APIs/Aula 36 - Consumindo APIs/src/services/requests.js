const axios = require('axios')
const defaults = require('./default')

module.exports = {
  async getMoviesByRate () {
    try {
      const { data } = await axios({
        ...defaults,
        method: 'get',
        url: '/api/movies'
      })

      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }
}