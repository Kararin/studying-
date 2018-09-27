const fs = require('fs');
let task;

// function readFileIt(path) {
//     fs.readFile(path, function (err, data) {       
//         if (err) {
//             task.throw();
//         } else {
//             console.log('next');
//             task.next(data.toString());
//         }
//     });
// }

// function* main () {
//     let name = yield readFileIt('./file1.txt');
//     let lastName = yield readFileIt('./file2.txt');

//     console.log(name);
//     console.log(lastName);
// }

// task = main();
// task.next();

class Call {
    constructor () {
        this.a =  () => {
            console.log(this.b);
        }
    }


    c () {
        console.log(this.b);
    }

    d () {
        console.log(this.b);
    }.bind(this)
}

let c = new Call();
c.c();