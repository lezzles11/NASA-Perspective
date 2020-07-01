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

export default GenerateNasa
