const NipponColors = (res) => {
  const nipponColors = res.$('li').text();
  const colors = nipponColors.split(', ');
  const colorCode = [];

  colors.forEach((color) => {
    for (let i = 0; i < color.length; i += 1) {
      if (!color.charAt(i).match(/[A-Z]/i)) {
        colorCode.push(color.substring(0, i).toLowerCase());
        return;
      }
    }
  });

  return colorCode;
};


module.exports = {
  NipponColors,
};
