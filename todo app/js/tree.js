const readline = require('readline')

const _interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function drawTree(height) {
    for (let i = 0; i < height ; i++ ) {
        let star = '^';
        let space = ' ';

        for ( let j = 1; j <= i; j++ ) {
            star = star + '^^';            
        }
           
        let spacesBefore = space.repeat(height-i-1);
        star = spacesBefore + star;
        console.log(star);
    }
}

_interface.question("Archa balandligi: ", function(answer) {
    drawTree(Number(answer));
});
