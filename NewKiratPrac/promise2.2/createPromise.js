const fs = require('fs');
class Promise2{
    constructor(fn){
        function afterDone(){
            this.reslove
        }
        fn(afterDone )
    }
    then(callback){
        this.reslove = callback
    }
}

function fileTheName(reslove){
    
    fs.readFile('a.txt','utf8', function(err, data){
        reslove(data)
    })
}

function readfile(filename){
    return new Promise2(fileTheName)
}

const p = readfile()

function callback(context){
    console.log(context)
}

p.then(callback)