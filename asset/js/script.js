let log = new Log(document.querySelector('.log'));

let char = new Knight('Bilua');
let monster = new LittleMonster();

console.log(Knight.name)

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();