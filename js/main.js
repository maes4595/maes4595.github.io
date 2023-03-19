const customName = document.getElementById('customname');
const randomize = document.querySelector('button.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  'It was 94 fahrenheit outside, so :insertx: went for a  brisk and long walk in the sun. When they got to :inserty:, they stared in amazing for a few hours, then :insertz:. :insertx: saw the whole thing, but was not surprised — :insertx: weighs 600 pounds, and it was a hot sunny day where sunburns hurt.';

const insertX = ['Laurie the RA', 'Small Rabbit', 'Valentines Cupid'];
const insertY = ['the mall', 'Denver', 'CU-Boulder'];
const insertZ = [
  'threw up',
  'exploded into glitter',
  'changed colors',
];

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 / 2.205);
    const temperature = Math.round(((94 - 32) * 5) / 9);

    newStory = newStory.replace('94 fahrenheit', temperature + ' centigrade');
    newStory = newStory.replace('600 pounds', weight + ' stone');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
