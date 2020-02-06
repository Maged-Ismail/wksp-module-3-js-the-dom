// Preset values
const FROGS = 3;

for (let i=1; i<=FROGS; i++){
    const lane = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = i;
    lane.appendChild(span);
    document.getElementById('track').appendChild(lane);
    lane.id= 'lane-'+i;
    console.log(lane.id);
}

const racers=[];

for (let i=0; i<FROGS; i++){
    racers.push(frogStable[i]);
}

console.log(racers);


let b=1;
racers.forEach(function(x){
    const span2 = document.createElement('span');
    span2.innerText = x.number;
    const laneId = 'lane-'+b;
    document.getElementById(laneId).appendChild(span2);
    span2.classList.add('frog');
    const color = x.color;
    span2.style.backgroundColor = color;
    x.progress=0;
    const progress = document.createElement('span');
    progress.innerText = 'Progress = '+x.progress;
    document.getElementById(laneId).appendChild(progress);
    progress.id='progress-'+b;
    b++;
})

const css = document.createElement('link');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('href', '../assets/styles.css');
css.setAttribute('class','css');
document.querySelector('head').appendChild(css);

