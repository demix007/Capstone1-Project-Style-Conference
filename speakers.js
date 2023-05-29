const data = [
  {
    id: 1,
    pic: './img/speaker1.png',
    altText: 'First_speaker',
    nameOfSpeaker: 'Jack',
    speakerTitle: 'Lead Pastor at LightHouse Christian Outreach Center',
    shortBio: 'An active member of the community who positively influences other members. An active member of the community who positively influences other members',
  },
  {
    id: 2,
    pic: './img/speaker2.png',
    altText: 'Second_speaker',
    nameOfSpeaker: 'Dorsey',
    speakerTitle: 'Assistant Pastor at LightHouse Christian Outreach Center',
    shortBio: 'An active member of the community who positively influences other members. An active member of the community who positively influences other members',
  },
  {
    id: 3,
    pic: './img/speaker3.png',
    altText: 'Third_speaker',
    nameOfSpeaker: 'Hannah',
    speakerTitle: 'Choir coordinator at LightHouse Christian Outreach Center',
    shortBio: 'An active member of the community who positively influences other members. An active member of the community who positively influences other members',
  },
  {
    id: 4,
    pic: './img/speaker4.png',
    altText: 'Fourth_speaker',
    nameOfSpeaker: 'Melinda',
    speakerTitle: 'Facility Manager at LightHouse Christian Outreach Center',
    shortBio: 'An active member of the community who positively influences other members. An active member of the community who positively influences other members',
  },
  {
    id: 5,
    pic: './img/speaker5.png',
    altText: 'Fifth_speaker',
    nameOfSpeaker: 'Deborah',
    speakerTitle: 'Youth Pastor at LightHouse Christian Outreach Center',
    shortBio: 'An active member of the community who positively influences other members. An active member of the community who positively influences other members',
  },
  {
    id: 6,
    pic: './img/speaker6.png',
    altText: 'Sixth_speaker',
    nameOfSpeaker: 'Michael',
    speakerTitle: 'Associate Pastor at LightHouse Christian Outreach Center',
    shortBio: 'An active member of the community who positively influences other members. An active member of the community who positively influences other members',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');

data.forEach((speaker) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speaker.pic);
  image.setAttribute('alt', speaker.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h2');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speaker.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerTitle = document.createElement('p');
  speakerTitle.setAttribute('class', 'speaker-title');
  speakerTitle.textContent = speaker.speakerTitle;
  contentSection.appendChild(speakerTitle);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '-------';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-bio');
  speakerHistory.textContent = speaker.shortBio;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(speakerContainer, partners);
