const fs = require('fs');

var data;

fs.readFile('./README.text', 'utf8', (error, data) => {

    data = data.replace(/([0-9]+),\s[a-z]+/ig, (match, p1, p2, p3, offset, string) => {
        var temp = match.split(' ');
        return `${temp[0]} [${temp[1]}](http://dict.youdao.com/w/eng/${temp[1]})`
    })

    fs.writeFile('README.md', data, (error) => console.log('error', error))
})