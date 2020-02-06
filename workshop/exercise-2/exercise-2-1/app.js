// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let i=1; i<=FROGS; i++){
    const lane = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = i;
    lane.appendChild(span);
    document.getElementById('track').appendChild(lane);
    lane.id= 'lane '+i;
}

    // 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane
