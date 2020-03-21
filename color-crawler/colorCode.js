const CMRKColor = (res) => {
  const cmrk = res.$('#CMYKcolor').text();
  const colors = cmrk.split('\n\t\t\t\t');
  const colorCode = {};

  colors.forEach((color) => {
    if (color) {
      const colorNew = color.replace('\t', '');
      const index = colorNew.charAt(0);
      const value = colorNew.substring(1);

      colorCode[index] = parseInt(value, 10);
    }
  });

  return colorCode;
};

const RGBColor = (res) => {
  const cmrk = res.$('#RGBcolor').text();
  const colors = cmrk.split('\n\t\t\t\t\t');
  const colorCode = {};

  colors.forEach((color) => {
    if (color && color.indexOf('\n') === -1) {
      const colorNew = color.replace('\t', '');
      const index = colorNew.charAt(0);
      const value = colorNew.substring(1);

      colorCode[index] = parseInt(value, 10);
    }
  });

  return colorCode;
};

module.exports = {
  CMRKColor,
  RGBColor,
};
