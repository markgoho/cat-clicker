// Model
const model = {
  currentCat: null,
  cats: [
    { name: 'cat1', imgSrc: '/img/cat1.jpg', clickCount: 0 },
    { name: 'cat2', imgSrc: '/img/cat2.jpg', clickCount: 0 },
    { name: 'cat3', imgSrc: '/img/cat3.jpg', clickCount: 0 }
  ]
};

// Octopus
const octopus = {
  init: () => {
    // Set current cat to first one in the list
    model.currentCat = model.cats[0];

    catListView.init();
    catView.init();
  },

  currentCat: () => model.currentCat,
  get cats() {
    return model.cats;
  },
  set currentCat(cat) {
    model.currentCat = cat;
  },

  incrementCounter: () => {
    model.currentCat.clickCount++;
    catView.render();
  }
};

// View(s)

const catView = {
  init: () => {
    // store pointers to DOM elements for later access
    this.catEl = document.querySelector('.cat');
    this.catNameEl = document.querySelector('.cat-name');
    this.catImgEl = document.querySelector('.cat-name');
    this.countEl = document.querySelector('.cat-name');

    // on click, increment cat's counter
    this.catImgEl.addEventListener('click', e => octopus.incrementCounter());

    // render this view (update DOM elements)
    this.render();
  },
  render: () => {
    // update DOM elements with values from current cat
    const currentCat = octopus.currentCat;
    this.countEl.innerText = currentCat.clickCount;
    this.catNameEl.innerText = currentCat.name;
    this.catImgEl.innerText = currentCat.imgSrc;
  }
};

const catListView = {
  init: () => {
    // stor DOM elements for later access
    this.catListEl = document.getElementById('cat-list');

    // render this view (update DOM elements)
    this.render();
  },

  render: () => {
    // get the cats from the octopus
    const cats = octopus.cats;

    // empty the cat list
    this.catListEl.innerHTML =
      '<option value="">Select a cat to start clicking!</option>';

    // loop over cats
    for (const cat of cats) {
      // make new option, set values
      const option = document.createElement('option');
      option.value = cat.name;
      option.innerText = cat.name;
    }
  }
};
