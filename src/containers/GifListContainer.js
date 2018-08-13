import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

//const QUERY = "beach"   // replaces spaces with +    ryan+gosling   &limit=5
const LIMIT = 30
const API_KEY = "dc6zaTOxFJmzC"

class GifListContainer extends React.Component {

  state={
    gifs: []
  }

  fetchGifs = (query = "beach") => {
    fetch('http://api.giphy.com/v1/gifs/search?q='
    + `${query}&api_key=${API_KEY}&rating=g&limit=${LIMIT}`)
      .then(res => res.json())
      .then(gify => this.setState({
        gifs: gify.data
      })
    )
  }

  componentDidMount() {
    this.fetchGifs()
  }

  render() {
    return (
      <div>
        < GifSearch fetchGifs={this.fetchGifs} />
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer;


//   http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g

// "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5"
