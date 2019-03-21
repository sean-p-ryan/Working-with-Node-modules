const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('message.txt', 'Man is the most extraordinary computer of all.', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('./new-folder', (err) => {
    if (err) throw err;
  });
};
