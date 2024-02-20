import healIcon from '../assets/healIcon.png';
import dpsIcon from '../assets/dpsIcon.png';
import tankIcon from '../assets/tankIcon.png';

export default function checkImageType(type) {
  if (type === 'tank') return tankIcon;
  if (type === 'dps') return dpsIcon;
  if (type === 'heal') return healIcon;
}
