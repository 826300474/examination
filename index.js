var fs = require('fs');

var data = JSON.parse(fs.readFileSync('data.json'));//读 
var aaa = JSON.parse(fs.readFileSync('answer.json'));//读 
var bbb = JSON.parse(fs.readFileSync('test.json'));//读 

const saveJSON = function () {
    fs.writeFile('data.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) throw err;
        console.log('done');
    });
}

const formatAnswer = function (answer, test) {
    a = JSON.parse(answer.data);
    
    Object.keys(test).forEach(el => {
        const ids = data[el].map(el => el.quesId);
        test[el].forEach(t => {
            t.answer = a[el][t.quesId];
            if (ids.indexOf(t.quesId) === -1) {
                data[el].push(t);
            }
        })
    });

    saveJSON();
}

formatAnswer(aaa, bbb);
