import { KILL_BOSSES } from '../../mocks/videosKills.js';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function LastKills() {
  return (
    <div style={{ display: 'flex' }}>
      {KILL_BOSSES.map((boss, i) => {
        return <LiteYouTubeEmbed id={boss.video} title={boss.title} key={i} />;
      })}
    </div>
  );
}
