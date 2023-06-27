const featureSpeakerSection = document.querySelector('.feature-speaker-section');
const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const mobileMenuClosingBtn = document.querySelector('.mobile-menu-closing-btn');

mobileMenuBtn.addEventListener('click', () => {
  document.querySelector('.mobile-menu-options').style.display = 'flex';
});
mobileMenuClosingBtn.addEventListener('click', () => {
  document.querySelector('.mobile-menu-options').style.display = 'none';
});

const obj = {
  person1: {
    img: './assets/imgs/person1.jpeg',
    Name: 'Emily Johnson',
    JobTitle: 'Software Engineer',
    Description: 'Emily is a talented software engineer with a passion for creating innovative solutions. With her strong coding skills and analytical mindset',
  },
  person2: {
    img: './assets/imgs/person2.jpeg',
    Name: 'David Thompson',
    JobTitle: 'Marketing Manager',
    Description: 'David is a strategic marketing professional known for his creative thinking and ability to drive successful campaigns.',

  },
  person3: {
    img: './assets/imgs/person3.jpeg',
    Name: 'Samantha Lee',
    JobTitle: 'Graphic Designer',
    Description: 'Samantha is a highly skilled graphic designer who brings ideas to life through captivating visuals. With an eye for aesthetics and attention to detail',
  },
  person4: {
    img: './assets/imgs/person4.jpeg',
    Name: 'Michael Ramirez',
    JobTitle: 'Financial Analyst',
    Description: 'Michael is a meticulous financial analyst who excels at analyzing complex data and providing valuable insights',

  },
  person5: {
    img: './assets/imgs/person5.jpeg',
    Name: 'Olivia Patel',
    JobTitle: 'Human Resources Manager',
    Description: 'Olivia is a dedicated HR manager known for her exceptional interpersonal skills and talent for fostering a positive work environment.',

  },
  person6: {
    img: './assets/imgs/person6.jpeg',
    Name: 'Benjamin Thompson',
    JobTitle: 'Sales Representative',
    Description: 'Benjamin is a charismatic sales representative who consistently exceeds targets and builds strong relationships with clients',

  },

};

const div = document.createElement('div');
div.className = 'feature-speaker-div';

const keys = Object.keys(obj);
const values = Object.values(obj);

for (let i = 0; i < values.length; i += 1) {
  // creating a div here

  const buttonSeeMore = document.createElement('button');
  buttonSeeMore.className = 'btn-see-more';
  if (keys[i] === 'person3') {
    buttonSeeMore.innerHTML = 'More &#10515;';
    buttonSeeMore.addEventListener('click', () => {
      buttonSeeMore.innerHTML = 'Less &#10514;';
      document.querySelector('.partners').classList.add('active');
      document.querySelector('.copy-right').classList.add('active');
      const ele1 = document.querySelector('div.feature-speaker-div-container:nth-child(4)'); ele1.style.display = 'flex';
      const ele2 = document.querySelector('div.feature-speaker-div-container:nth-child(5)'); ele2.style.display = 'flex';
      const ele3 = document.querySelector('div.feature-speaker-div-container:nth-child(6)'); ele3.style.display = 'flex';
      const ele4 = document.querySelector('div.feature-speaker-div-container:nth-child(7)'); ele4.style.display = 'flex';
      buttonSeeMore.style.display = 'none';
    });

    div.append(buttonSeeMore);
  }
  const divContainer = document.createElement('div');
  divContainer.className = 'feature-speaker-div-container';
  const divImage = document.createElement('div');
  divImage.className = 'feature-speaker-image';
  const divDetails = document.createElement('div');
  divDetails.className = 'feature-speaker-details';
  const name = document.createElement('h3');
  name.className = 'feature-speaker-name';
  const job = document.createElement('span');
  job.className = 'feature-speaker-job';
  const description = document.createElement('span');
  description.className = 'feature-speaker-description';
  const image = document.createElement('img');
  image.className = 'feature-speaker-image';
  image.src = values[i].img;
  name.innerText = values[i].Name;
  job.innerText = values[i].JobTitle;
  description.innerText = values[i].Description;
  divImage.append(image);
  divDetails.append(name, job, description);
  divContainer.append(divImage, divDetails);
  div.append(divContainer);
}

const featureSpeakerHeading = document.createElement('h2');
featureSpeakerHeading.innerText = 'Feature Speaker';
const hr = document.createElement('hr');
featureSpeakerSection.append(featureSpeakerHeading, hr, div);
