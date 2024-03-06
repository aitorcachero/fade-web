import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function YouTubeLite({ video }) {
  return <LiteYouTubeEmbed id={video} />;
}
