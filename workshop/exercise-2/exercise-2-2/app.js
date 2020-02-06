// Preset values
const FROGS = 3;

for (let i=1; i<=FROGS; i++){
    const lane = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = i;
    lane.appendChild(span);
    document.getElementById('track').appendChild(lane);
    lane.id= 'lane '+i;
}

const racers=[];

for (let i=0; i<FROGS; i++){
    racers.push(frogStable[i]);
}

const out = document.createElement('div');
out.innerText = racers;
document.getElementById('main').appendChild(out);
console.log(racers);