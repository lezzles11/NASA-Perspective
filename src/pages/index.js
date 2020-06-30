import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function getRandom(int) {
  let num = Math.random() * (int - 1) + 1
  return Math.floor(num)
}
const quotes = [
  "That 13.8 billion years ago, something smaller than an electron chose to swell within a fraction of a second like an expanding balloon into a zone permeated with energy 93 billion light years in size that we now clumsily call the universe",
  "That some of the energy from this swift expansion was able to coagulate into particles, which grouped together to form the light atoms of hydrogen, lithium and helium",
  "that random atoms  assembled into galaxies, which gave birth to stars, inside whose molten burning cores all the elements necessary for the nucleic acids essential to life – carbon, nitrogen, oxygen, sulphur and phosphorus – were forged",
  "That gravity drew the stars together to create galaxies (a hundred billion of them), including – fortuitously – the Milky Way, a small corner of the universe containing just 400 billion stars, in which our sun was born out of a giant, spinning cloud of dust and gas 4.5 billion years ago",
  "That around the same time, swarms of debris collided to form our Earth – a lava-washed, uninhabitable rock, that gravity happened to throw into orbit as the third planet from the Sun – the exact right distance away (0.38 to 10.0 astronomical units) for life to develop",
  "That another planet, Theia, collided with Earth, gifting us our Moon, which slowed the Earth’s rotation, stabilised atmospheric conditions and created the 24-hour day and caused the Earth to tilt, forming the seasons, without which we would have permanent regional extremes of heat and cold, drought and floods",
  "That ice particles leftover from the collisions of hundreds of comets melted, water vapour condensed and oceans were formed",
  "That comet collisions delivered another chance cosmic gift, the essential components of life and DNA like ribose, carbon dioxide, ethanol, amino acids and phosphorus",
  "That underwater hot springs released the right amount of energy and the right mix of chemicals to allow the first single-cell organisms, prokaryotes, to form four billion years ago",
  "That Earth’s toxic atmosphere of methane and carbon dioxide slowly became sweetened by the release of oxygen from cyanobacteria (blue-green algae) – the first creatures to photosynthesise – and gradually oxygenated 85% of the atmosphere",
  "That 2.7 billion years ago, a random, chance event known as ‘the fateful encounter’ meant that two single cells merged, and procreated and then after about a billion more years, developed sexes",
  "That 500 million years ago, plants – at first algae and lichen – spread from the oceans to the land before animals did and slowly developed into more complex vascular plants, whose seeds could be dispersed by wind, creating the grasslands and forests in which different species could evolve",
  "That 245 million years ago, a rise in oxygen levels led to the Cambrian explosion, which saw the greatest diversification of life in Earth’s history, starting with ocean-dwelling hard-shelled invertebrates, leading to new fish species, the first land-based insects and large vertebrate ocean animals that developed four limbs and went ashore to lay eggs – which hatched and evolved into amphibians, reptiles and later mammals",
  "That an asteroid 15 kilometres wide happened to hit Earth 65.5 million years ago and destroyed most terrestrial organisms including all non-avian dinosaurs, but created ideal conditions in which some small, furry mammals, our close ancestors, were able to thrive with less competition and evolve into primates",
  "That the Earth remained stable enough for long enough that the first apes could appear in Africa, 25 million years ago, the first hominids 7 million years ago and our frightened clever brilliant homo sapiens a mere 200,000 years ago",
  "That your genes managed to pass safely through an unbroken 10,000 generation chain, despite the best efforts of cyclones, predators and a constant barrage of viruses",
  "That an average, fertile woman will have 100,000 eggs, and a man will produce a trillion sperm, each of these very different, but that – nevertheless – you have have managed to emerge from the options as you are",
  "That there are days of balmy sunshine and lemons, that there are olives, figs and hazelnuts",
  "That this moment exists within a 13.799±0.021 billion year span of cosmic time",
  "That we only register sounds between 20Hz and 20,000Hz and so miss all that is above (infrasound) and below (ultrasound). We can’t detect the sounds of the Sumatran rhinoceros (3 Hz) or of air passing over the tops of mountains. We miss the noise emitted by lightning above us and by the harmonic tremor of pressurised magma deep in the earth below us",
  "That the last 250 years, the period since we became urbanised and began living with technology in scientific culture encompasses a mere 0.1%. History is still happening now.",
  "That individuals and species may die; life itself survives (at least until the sun burns out). We are standing on the petrified remains and fossilised bodies of thousands of species which came before us.",
  "",
  "",
]

function FlipThroughQuotes() {
  const [quote, setQuote] = useState(quotes[0])

  const nextQuote = () => {
    let index = getRandom(quotes.length)
    console.log(index)
    setQuote(quotes[index])
    // I want to make sure that I don't create the
    // same
  }
  return (
    <div>
      Quotes
      <br />
      {quote}
      <button onClick={nextQuote}>Next</button>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <a href="https://www.theschooloflife.com/thebookoflife/how-science-could-at-last-properly-replace-religion/">
      <button>All facts taken from here</button>
    </a>
    <h1>
      it turns out that science is supremely capable of nurturing feelings of
      gratitude because of a basic truth about the way gratitude works: that it
      arises from a sense of contrast, from an awareness of how much more awful
      things might have been, of how dreadful things can get – and of how lucky,
      all things considered, we have turned out to be.
    </h1>
    <h1>Take it slow</h1>
    Okay, next, do the nasa image
    <FlipThroughQuotes />
    <p>Welcome to your new Gatsby site.</p>
    <h1>First, lets click through a series of array</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
