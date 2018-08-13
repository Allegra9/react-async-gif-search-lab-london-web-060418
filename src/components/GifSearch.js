import React from 'react'

class GifSearch extends React.Component {

  state={
    query: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.query)
    this.props.fetchGifs(this.state.query)
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p>enter what u after here:</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    )
  }

}

export default GifSearch;


//   < GifSearch fetchGifs={this.fetchGifs} />
