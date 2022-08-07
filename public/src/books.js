function findAuthorById(authors, id) {
  let match = authors.find((author)=>author.id===id);
  return match
}

function findBookById(books, id) {
  let find = books.find((book)=>book.id===id);
  return find
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const borrowed = books.filter((book) => !book.borrows[0].returned);
  result.push(borrowed);
  const notBorrowed = books.filter((book) => book.borrows[0].returned);
  result.push(notBorrowed);
  
  return result;
}

function getBorrowersForBook(book, accounts) {
  let result=[];
for (let borrows in book.borrows){
 for(let account in accounts){ 
  const borrow = book.borrows[borrows]
  if (borrow.id===accounts[account].id){
 result.push({...accounts[account],returned:borrow.returned});}}}
return result.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
