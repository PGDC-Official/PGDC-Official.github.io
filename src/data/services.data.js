import devIcon from '../assets/dev.png'
import eventIcon from '../assets/event.png'
import seminarIcon from '../assets/seminar.png'
import showcaseIcon from '../assets/showcase.png'

const services = [
  {
    icon: devIcon,
    title: {
      blue: 'Learning and Developing',
      orange: 'Games Together'
    },
    description: 'The club provides a collaborative environment where members learn and practice game design and development skills, turning ideas into complete projects.'
  },
  {
    icon: eventIcon,
    title: {
      blue: 'Organizing',
      orange: 'Creative Events'
    },
    description: 'PGDC regularly hosts exciting events like PlayJam, where everyone can join to play board games, connect, and spark creativity.',
  },
  {
    icon: seminarIcon,
    title: {
      blue: 'Participating in',
      orange: 'Seminars'
    },
    description: 'The club actively takes part in seminars, talk shows, and other events in the game development community, offering opportunities to learn from experts and expand professional networks.'
  },
  {
    icon: showcaseIcon,
    title: {
      blue: 'Showcasing',
      orange: 'Game Projects'
    },
    description: 'PGDC showcases where members can present their completed game projects, whether developed individually or in teams, allowing them to gain feedback, recognition, and inspiration for future creations.'
  }
]

export default services