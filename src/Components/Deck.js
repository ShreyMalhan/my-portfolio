import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './styles.css'
import bot from '../images/bot.jpg'
import iface from '../images/interface.png';
import cardGame from '../images/card-game.png';
import blog from '../images/blog.png';
import salon from '../images/salon.png';
import cpu from '../images/cpu.png';

const cards = [
    'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
  ]

  const colors = [
    '#78e08f',
    '#ff793f',
    '#9c88ff',
    '#ccae62',
    '#82ccdd',
    'white',
  ]

  const images = [
    salon,
    cpu,
    cardGame,
    blog,
    iface,
    bot,
  ]

  const names = [
    'Salon Website',
    'CPU Simulation',
    'The Imposter-Card Game',
    'React Blog',
    'React Interface',
    'Discord Gif Bot',
  ]

  const descrip = [
    'Using HTML and CSS, I created a lovely static website for a salon, complete with animations.',
    'Created an event-driven CPU simulation in C++ that accepts a text file containing a process list and returns a summary of all processes.',
    'Developed a Java application that accepts user input and uses it to play against AI to figure out who is the impostor.',
    'Built a full-stack blog website using React with MongoDB connectivity to keep track of comments and likes.',
    'Developed a React app that can be used as an appointment manager to keep track of all of a store\'s appointments.',
    'This JavaScript project send requests to external gif API and posts the response in chat of the Discord server.',
  ]

  const links = [
    'https://github.com/ShreyMalhan/Static_website_with_animate.css',
    'https://github.com/ShreyMalhan/cpu-simulation',
    'https://github.com/ShreyMalhan/The-Imposter-cardGame',
    'https://github.com/ShreyMalhan/react-blog',
    'https://github.com/ShreyMalhan/react-interface/tree/master',
    'https://github.com/ShreyMalhan/Discord-gif-bot',
  ]
  
  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
  const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -800 })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
  
  function Deck() {
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
      if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1 // Active cards lift up a bit
        return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
      })
      if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return props.map(({ x, y, rot, scale }, i) => (
      <animated.div className="project-card-container" key={i} style={{ x, y }}>
        {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
        <animated.div className="project-card " {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundColor:`${colors[i]}`}}>
          <div className="project-image"><img src={images[i]} /></div>
          <div className="project-name"><h3>{names[i]}</h3></div>
          <div className="project-description"><p>{descrip[i]}</p></div>
          <div className="project-link"><a href = {links[i]} target="_blank">View Code</a></div>
        </animated.div>
      </animated.div>
    ))
  }
  

export default Deck;