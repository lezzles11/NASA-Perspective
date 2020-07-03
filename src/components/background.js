import React from "react"
import Unsplash from "unsplash-js"
import { toJson } from "unsplash-js"

const unsplash = new Unsplash({
  accessKey: "Jq5VdJZI241Io62fiIj4DoqIWrn_Gf36ljL09oCfXnA",
})

const BackgroundImage = () => {
  return (
    <div>
      <Images />
    </div>
  )
}

class Images extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
    }
  }
  componentDidMount() {
    unsplash.photos
      .getRandomPhoto({ username: "naoufal" })
      .then(toJson)
      .then(json => {
        console.log("OBJECT HERE")

        console.log(json)
        console.log(json.links.html)
      })
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}

function OnlyImage({ id, image }) {
  return (
    <div id={id} style={{ backgroundImage: `url(${image})` }}>
      hi
    </div>
  )
}
export default BackgroundImage
