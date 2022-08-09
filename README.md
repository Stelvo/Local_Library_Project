# Local_Library_Project
This local project houses 14 individual functions broken into 3 groups

within the Book JavaScript file the functions work as follows

the Function findAuthorById works by running a .find search through all given authors and matches the id passed with the corisponding author.

the Function findBookByID works by running a .find search through all given books and matches the id passed with the corisponding book.

the Function partitionBooksByBorrowedStatus works by running 2 .filter searches, one that captures the books that have been checked out and one that captures the books that have been checked in finaly the function combines those 2 collections of books into 1 array.

the Function getBorrowersForBook works by matching the borrowed id passed in the book data array with the account id passed in the account data array once those matches are identified, the data is compiled into a new array and limited to 10 inputs.

within the Account JavaScript file the functions work as follows

the Function findAccountById works by running a .find search through all given accounts and matches the id passed with the corisponding author.

the Function sortAccountsByLastName works by using a .sort function by temporarly assigning veriables to the account last names as a meanse to sort the last names.

the Function getTotalNumberOfBorrows works by cross refrencing all the id's in the books passed and matching them with the account being passed, when those conditions are met the function outputs a total.

the Function getBooksPossessedByAccount works by aquiring a lsit of books that are still checked out, then it crossrefrences the author id's with the Id's in the author array and then embeds the author data in the book array.

within the Home JavaScript file the functions work as follows

the Function getTotalBooksCount works by running a count function for every book in the array.

the Function getTotalAccountsCount works by running a count function for every account in the array.

the Function getBooksBorrowedCount works by running a count function that counts if any book is still checked out bassed on the data in the borrow array.

the Function getMostCommonGenres works by first isolating the genres govin in the book arrays into an array that only contains one copy of each genre, one the genres are exstracted, a .find function is called to get the total count for each genre. the result array is limited to the top 5 genres.

the Function getMostPopularBooks works by creating a new array, it collects all the data from the book array and a total count from the borrows. finaly the array will output a new array with the keys of name and count.

the Function getMostPopularAuthors works by creating a new array, it collects all the data from the author array, then creates 2 new keys; 1: bookCount which uses the .filter function to find all values where the passed author id matches the id given in the book array, and then finding the length. 2: borrowCount which also uses the .filter function to identify the books with the same author id and then use the .reduce function to total up all accounts. finaly all that data is output in an array that is limited to 5 entries.
