import React from 'react';
import PropTypes from 'prop-types';
import { LIGHTGRAY } from 'constants/colors.js';
import Icon from 'components/Icons/Icon.jsx';

function LogoWide({ width, height, color, ...props }) {
  return (
    <i>
      <g class="cls-1"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><text class="cls-2" transform="translate(0 73.07)">G<tspan class="cls-3" x="13.42" y="0">L</tspan><tspan x="24.58" y="0">ASS</tspan><tspan class="cls-4" x="59.02" y="0">B</tspan><tspan class="cls-5" x="71.08" y="0">O</tspan><tspan x="84.54" y="0">X</tspan></text><polygon class="cls-6" points="54.77 22.81 75.64 32.51 75.64 12.9 54.77 22.81"/><polygon class="cls-7" points="54.77 22.81 75.64 12.9 47.9 0 47.9 19.61 54.77 22.81"/><polygon class="cls-7" points="47.9 26.07 47.9 45.68 75.64 32.51 54.77 22.81 47.9 26.07"/><polygon class="cls-8" points="47.9 26.07 54.77 22.81 47.9 19.61 47.9 26.07"/><polygon class="cls-9" points="41.03 22.81 47.9 19.61 47.9 0 20.16 12.9 41.03 22.81"/><polygon class="cls-8" points="41.03 22.81 47.9 26.07 47.9 19.61 41.03 22.81"/><polygon class="cls-9" points="41.03 22.81 20.16 32.51 47.9 45.68 47.9 26.07 41.03 22.81"/><polygon class="cls-10" points="20.16 32.51 41.03 22.81 20.16 12.9 20.16 32.51"/></g></g></g>
    </i>
  );
}

LogoWide.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

LogoWide.defaultProps = {
  width: 16,
  height: 16,
  color: LIGHTGRAY,
};

export default LogoWide;
