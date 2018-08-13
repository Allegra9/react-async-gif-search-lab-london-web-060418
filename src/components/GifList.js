import React from 'react'

const GifList = (props) => {
  console.log(props);
  return (
    <div>
        {props.gifs.map(gif => {
          return (
            <div style={{margin: "15px"}}>
              <img src={ gif.images.original_still.url } alt="gif"/>
            </div>
          )
        }
      )}
    </div>
  )
}

export default GifList;
