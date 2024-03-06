import { KILL_BOSSES } from '../../mocks/videosKills.js'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function LastKills() {
  return (
    {KILL_BOSSES.map((boss,i) => {
      return (
        <h1></h1>
      )
    })}
  )
}
