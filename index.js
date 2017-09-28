// Model
const model = {
  currentCat: null,
  cats: [
    { name: 'cat1', imgSrc: 'img/cat1.jpg', clickCount: 0 },
    { name: 'cat2', imgSrc: 'img/cat2.jpg', clickCount: 0 },
    { name: 'cat3', imgSrc: 'img/cat3.jpg', clickCount: 0 }
  ]
};

// Octopus
const octopus = {
  init() {
    // Set current cat to first one in the list
    model.currentCat = model.cats[0];

    // initialize views
    catView.init();
    catListView.init();
  },

  // getter for model.cats
  get cats() {
    return model.cats;
  },

  // getter for model.currentCat
  get currentCat() {
    return model.currentCat;
  },

  // setter for currentCat
  set currentCat(cat) {
    model.currentCat = cat;
  },

  // increment counter then render
  incrementCounter() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

// View(s)
const catView = {
  init() {
    // store pointers to DOM elements for later access
    this.catEl = document.querySelector('.cat');
    this.catNameEl = document.querySelector('.cat-name');
    this.catImgEl = document.querySelector('.cat-img');
    this.countEl = document.querySelector('.cat-count');

    // on click, increment cat's counter
    this.catImgEl.addEventListener('click', () => octopus.incrementCounter());

    // render this view (update DOM elements)
    this.render();
  },
  render() {
    // update DOM elements with values from current cat
    const currentCat = octopus.currentCat;

    this.catNameEl.innerText = currentCat.name;
    this.catImgEl.src = currentCat.imgSrc;
    this.countEl.innerText = currentCat.clickCount;
  }
};

const catListView = {
  init() {
    // store DOM elements for later access
    this.catListEl = document.getElementById('cat-list');

    // get the cats from the octopus
    this.cats = octopus.cats;

    // add listener on select to change current cat and render
    this.catListEl.addEventListener('change', e => {
      const cat = cats.find(cat => cat.name === e.target.value);
      octopus.currentCat = cat;
      catView.render();
    });

    // render this view (update DOM elements)
    this.render();
  },

  render() {
    // remove all options from select menu
    this.catListEl.innerHTML = '';

    // populate select with cats
    for (const cat of this.cats) {
      // make new option, set values
      const option = document.createElement('option');
      option.value = cat.name;
      option.innerText = cat.name;
      this.catListEl.appendChild(option);
    }
  }
};

octopus.init();
