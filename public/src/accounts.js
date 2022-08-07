function findAccountById(accounts, id) {
  let found = accounts.find((account)=>account.id===id);
      return found
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA,accountB)=>(accountA.name.last > accountB.name.last ? 1 : -1));
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let count =0
 const checkID=account.id
  for (let book in books){
    let currentBook=books[book];
    let currentBooksBorrowes=currentBook.borrows;
   for(let borrow in currentBooksBorrowes){
     if (checkID===currentBooksBorrowes[borrow].id)count++}}
  return count
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut =[];
  for (let book in books){
    let currentBook=books[book];
    let currentBooksBorrowes=currentBook.borrows;
    let borrow=currentBooksBorrowes.find( (borrow) => !borrow.returned && borrow.id === account.id);
    if (borrow) checkedOut.push(currentBook);
  }
  let result = [];
  for (let check in checkedOut){
  let author = authors.find((author) => checkedOut[check].authorId === author.id);
  result.push({...checkedOut[check],author: author});
}
return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
