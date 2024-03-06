import { KILL_BOSSES } from '../../mocks/videosKills.js';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function LastKills() {
  return (
    <div className="bg-blue-950">
      {KILL_BOSSES.map((boss, i) => {
        return (
          <div key={i} className="m-10">
            <LiteYouTubeEmbed id={boss.video} title={boss.title} />;
          </div>
        );
      })}
    </div>
  );
}
