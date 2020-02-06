console.log('...crickets...');

const header1 = document.createElement('h1');
header1.innerText = 'The best How I Met Your Mother episode (according to fans)';
document.querySelector('#main').appendChild(header1);

const paragraph1 = document.createElement('p');
paragraph1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
document.getElementById('main').appendChild(paragraph1);

const header2 = document.createElement('h2');
header2.innerText = 'The Slap Bet (Season 2, Episode 9)';
document.getElementById('main').appendChild(header2);

const paragraph2 = document.createElement('p');
paragraph2.innerText = "IMDB Rating: 9.5";
document.getElementById('main').appendChild(paragraph2);

const image1 =document.createElement('img');
image1.setAttribute ("src", "images/robin-sparkles.jpg");
document.getElementById('main').appendChild(image1);

const paragraph3 = document.createElement('p');
paragraph3.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
document.getElementById('main').appendChild(paragraph3);

const paragraph4 = document.createElement('p');
paragraph4.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
document.getElementById('main').appendChild(paragraph4);

const link1 = document.createElement('a');
link1.setAttribute ("href","https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/");
link1.innerText = "Source";
document.getElementById('main').appendChild(link1);

const body = document.querySelector('body');
body.style.background = "rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg) no-repeat";
body.style.backgroundSize = '100%';
body.style.fontFamily ="'Playfair Display', serif";

const main = document.getElementById('main');
main.style.background ="#fafafa";
main.style.borderRadius = '4px';
main.style.boxShadow ="8px 10px 25px 0 rgba(128, 128, 128, .44)";
main.style.minWidth = '320px';
main.style.maxWidth = '600px';
main.style.margin = '36px';
main.style.padding = '4px 32px 32px';

header1.style.fontFamily = 'Open Sans', 'sans-serif';
header1.style.textAlign = 'center';


header2.style.fontFamily = 'Open Sans', 'sans-serif';
header2.style.textAlign = 'left';

paragraph1.style.fontSize = '17px';
paragraph1.style.lineHeight = '1.5em';

paragraph2.style.fontSize = '17px';
paragraph2.style.lineHeight = '1.5em';

paragraph3.style.fontSize = '17px';
paragraph3.style.lineHeight = '1.5em';

paragraph4.style.fontSize = '17px';
paragraph4.style.lineHeight = '1.5em';

image1.style.border = '#fafafa';
image1.style.borderRadius = '4px';
image1.style.boxShadow = "4px 4px 14px rgba(128, 128, 128, .4)";
image1.style.width = '100%';

link1.style.color = "#174E7C";
link1.style.display = 'block';
link1.style.fontWeight = '700';
link1.style.marginTop = 'auto';
link1.style.textAlign = 'right';
link1.style.textDecoration = 'none';




// const cssLink = document.createElement('link');
// cssLink.setAttribute('rel', 'stylesheet');
// cssLink.setAttribute('href','styles.css');
// cssLink.setAttribute('class', 'css');
// document.querySelector('head').appendChild(cssLink);

// header1.classList.add('headers');
// header2.classList.add('headers');

// header2.classList.add('h2nd');

// paragraph1.classList.add('par');
// paragraph2.classList.add('par');
// paragraph3.classList.add('par');
// paragraph4.classList.add('par');

// image1.classList.add('images');

// link1.classList.add('links');