import React from 'react';
import COLORS from './colors.json';

function ADictionaryOfColorCombinations() {
  const COLOR_COMBINATIONS = {};

  // build combo map
  COLORS.colors.forEach((color) => {
    color.combinations.forEach((combination) => {
      if (!COLOR_COMBINATIONS[combination]) {
        COLOR_COMBINATIONS[combination] = [];
      }

      // append color to combo
      COLOR_COMBINATIONS[combination] = [
        ...COLOR_COMBINATIONS[combination],
        {
          index: color.index,
          name: color.name,
          hex: color.hex,
          slug: color.slug,
        },
      ];
    });
  });
  return (
    <div className="a-dictionary-of-color-combinations">
      <h1>A Dictionary of Color Combinations</h1>
      <ol>
        {
          Object.keys(COLOR_COMBINATIONS).map((comboNumber) => (
            <li key={`combination_${comboNumber}`} style={{ margin: '2.5px 0' }}>
              {COLOR_COMBINATIONS[comboNumber].map((color) => (
                <span style={{ background: color.hex }} title={`${color.name}: ${color.hex}`}>
                  &nbsp;&nbsp;&nbsp;
                </span>
              ))}
            </li>
          ))
        }
      </ol>
    </div>
  );
}

export default ADictionaryOfColorCombinations;
