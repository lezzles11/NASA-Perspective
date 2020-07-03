import React, { useState } from "react"
import { Link } from "gatsby"
import "../components/styles.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import axios from "axios"
import Video from "../components/Video"
import QuoteBox from "../components/quotebox"
import BackgroundImage from "../components/background"
import Img from "gatsby-image"
import Nasa1 from "../components/NasaImages/Nasa1"

function getRandom(int) {
  let num = Math.random() * (int - 1) + 1
  return Math.floor(num)
}

function GetDate() {
  let day = getRandom(28)
  let month = getRandom(12)
  let year = getRandom(9)
  let yearString = "201".concat(year)
  console.log(yearString)
  return yearString + "-" + month + "-" + day
}
function GenerateNasa() {
  let date = GetDate()
  let link = `https://api.nasa.gov/planetary/apod?api_key=BgdSh6TJymSVTEzSdueBFQ7kngdEnCaXsd9JEXMl&date=${date}`
  return link.toString()
}

const IndexPage = () => <QuoteBox />

export default IndexPage
