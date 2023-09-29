//Given my library array, create the following ouput based on the properties
// "You have already read '(TITLE)' by (AUTHOR)." OR
// "You still need to read '(TITLE)' by (AUTHOR)."
const library = [ 
    {
        title: 'The Devil in the White City',
        author: 'Erik Larson',
        readingStatus: true
    },
    {
        title: 'Mythos: A Retelling of the Myths of Ancient Greece',
        author: 'Stephen Fry',
        readingStatus: true
    },
    {
        title: 'The Lord of the Rings',
        author: 'JRR Tolkien',
        readingStatus: false
    }
];


//Using a traditional for loop and a helper variable for title and author concatenation
for (let i = 0; i < library.length; i++) {
    let titleAuthorString = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("You have already read " + titleAuthorString);
    } else {
        console.log("You still need to read " + titleAuthorString);
    }
}


//Using a forEach and two different concatenation methods
library.forEach(book => {
    if (book.readingStatus) {
        console.log("You have already read " + book.title + " by " + book.author + ".");
    } else {
        console.log(`You still need to read ${book.title} by ${book.author}.`);
    }
});