import { KILL_BOSSES } from '../../mocks/videosKills.js';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function LastKills() {
  return (
    <div className=" p-2 rounded-xl" style={{ backgroundColor: '#0F172A' }}>
      {KILL_BOSSES.map((boss, i) => {
        return (
          <div key={i} className="m-10">
            <h2 className="text-center text-xl m-4">{boss.title}</h2>
            <LiteYouTubeEmbed id={boss.video} title={boss.title} />
          </div>
        );
      })}
    </div>
  );
}
