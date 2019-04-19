const palette = {
  cyan0: '#e3fafc',
  cyan1: '#c5f6fa',
  cyan2: '#99e9f2',
  cyan3: '#66d9e8',
  cyan4: '#3bc9db',
  cyan5: '#22b8cf',
  cyan6: '#15aabf',
  cyan7: '#1098ad',
  cyan8: '#0c8599',
  cyan9: '#0b7285',

  gray0: '#f8f9fa',
  gray1: '#f1f3f5',
  gray2: '#e9ecef',
  gray3: '#dee2e6',
  gray4: '#ced4da',
  gray5: '#adb5bd',
  gray6: '#868e96',
  gray7: '#495057',
  gray8: '#343a40',
  gray9: '#212529',

  red0: '#fff5f5',
  red1: '#ffe3e3',
  red2: '#ffc9c9',
  red3: '#ffa8a8',
  red4: '#ff8787',
  red5: '#ff6b6b',
  red6: '#fa5252',
  red7: '#f03e3e',
  red8: '#e03131',
  red9: '#c92a2a',

  green0: '#ebfbee',
  green1: '#d3f9d8',
  green2: '#b2f2bb',
  green3: '#8ce99a',
  green4: '#69db7c',
  green5: '#51cf66',
  green6: '#40c057',
  green7: '#37b24d',
  green8: '#2f9e44',
  green9: '#2b8a3e',

  blue0: '#e7f5ff',
  blue1: '#d0ebff',
  blue2: '#a5d8ff',
  blue3: '#74c0fc',
  blue4: '#4dabf7',
  blue5: '#339af0',
  blue6: '#228be6',
  blue7: '#1c7ed6',
  blue8: '#1971c2',
  blue9: '#1864ab',
};

export const buttonColorMap: {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
  };
} = {
  cyan: {
    background: palette.cyan6,
    color: 'white',
    hoverBackground: palette.cyan5,
  },
  gray: {
    background: palette.gray2,
    color: palette.gray7,
    hoverBackground: palette.gray1,
  },
  darkGray: {
    background: palette.gray8,
    color: 'white',
    hoverBackground: palette.gray6,
  },
};

export default palette;
