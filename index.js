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
  }

  // getter for model.cats

  // getter for model.currentCat

  // setter for currentCat

  // increment counter then render
};

// View(s)
const catView = {
  init() {
    // store pointers to DOM elements for later access
    // on click, increment cat's counter
    // render this view (update DOM elements)
  },
  render() {
    // update DOM elements with values from current cat
  }
};

const catListView = {
  init() {
    // store DOM elements for later access
    // render this view (update DOM elements)
  },

  render() {
    // get the cats from the octopus

    // empty the cat list

    // loop over cats
    for (const cat of cats) {
      // make new option, set values
    }

    // add listener on select to change current cat and render
  }
};

octopus.init();
