import healIcon from '../assets/healIcon.webp';
import dpsIcon from '../assets/dpsIcon.webp';
import tankIcon from '../assets/tankIcon.webp';

export default function checkImageType(type) {
  if (type === 'tank') return tankIcon;
  if (type === 'dps') return dpsIcon;
  if (type === 'heal') return healIcon;
}
