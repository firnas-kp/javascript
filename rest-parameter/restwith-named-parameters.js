function greet(firstname, lastname,...titles) {
    console.log(`Name: ${firstname} ${lastname} `);
    console.log(`Titles: ${titles.join(',')}`);
}
greet("Firnas", "KP", "BCA", "software Engineer", "Author");