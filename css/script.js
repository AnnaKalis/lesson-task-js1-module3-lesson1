//Question 1

const menuIsOpen = false;

if (menuIsOpen) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//Question 2

// platforms=4
// genres=action
// publishers=354

// Question 3

async function getCatFacts() {
  const url = "https://api.noroff.dev/api/v1/cat-facts";
  const response = await fetch(url);
  const results = await response.json();
  console.log(results.length);
}

getCatFacts();

