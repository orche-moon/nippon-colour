
const Crawler = require('crawler');
const fs = require('fs');

const { CMRKColor, RGBColor } = require('./colorCode');

const NipponColors = require('../files/color.json');

const c = new Crawler({
  rateLimit: 1000, // `maxConnections` will be forced to 1
  maxConnections: 250,
  callback: (err, res, done) => {
    if (err) throw err;

    const colorCode = {
      CMRK: CMRKColor(res),
      RGB: RGBColor(res),
    };
    const ncolor = {};
    const color = res.$('#colorRuby').text();

    ncolor[color] = colorCode;

    fs.appendFile('./../files/colorCode.json', `${JSON.stringify(ncolor)}\n`, (fsErr) => {
      if (fsErr) throw fsErr;
    });

    done();
  },
});

NipponColors.forEach((color) => {
  c.queue(`https://nipponcolors.com/#${color}`);
});
