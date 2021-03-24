import PropTypes from 'prop-types';

import { useSound } from '../context/sound';

function SocialChip({
  title,
  link,
  iconName,
}) {
  const [playHover, { stop }] = useSound(
    '/sounds/plunger-immediate.mp3',
    { volume: 0.1 },
  );

  return (
    <a
      className="inline-block flex-initial rounded-full bg-gray-900 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-400 text-white dark:text-gray-900 mr-4 mb-4 px-4 py-1 transition-colors transition-transform transform hover:scale-105"
      href={link}
      target="_blank"
      rel="noreferrer"
      onFocus={playHover}
      onMouseEnter={playHover}
      onMouseLeave={stop}
    >
      <i className={`fab pr-2 ${iconName}`} />
      {title}
    </a>
  );
}

SocialChip.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default SocialChip;
