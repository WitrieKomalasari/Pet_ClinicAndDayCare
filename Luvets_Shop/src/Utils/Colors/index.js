const mainColors = {
  white: '#ffffff',
  black: '#000000',
  blue1: '#5b96a9',
  pink: '#efc9d7',
  dark1: '#495A75',
  darkLoading: 'rgba(0, 0, 0, 0.5)',
  grey1: '#7D8797',
  grey2: '#B1B7C2',
  grey3: '#E9E9E9',
  red1: '#E06379',
};

const colors = {
  white: mainColors.white,
  black: mainColors.black,
  primary: mainColors.blue1,
  secondary: mainColors.pink,
  disable: mainColors.grey2,
  error: mainColors.red1,
  loadingBackground: mainColors.darkLoading,

  border: mainColors.grey3,

  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey2,
    active: mainColors.dark1,
    inActive: mainColors.grey1,
  },

  button: {
    primary: {
      background: mainColors.blue1,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.white,
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.grey2,
      text: mainColors.grey1,
    },
  },
};

export default colors;
