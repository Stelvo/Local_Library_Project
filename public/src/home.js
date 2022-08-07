function getTotalBooksCount(books) {
  let result=0
  books.forEach(book => result++ )
  return result
}

function getTotalAccountsCount(accounts) {
  let result=0
  accounts.forEach(account => result++ )
  return result
}

function getBooksBorrowedCount(books) {
    let count=0
  for (let book in books){
    
   for(let borrows in books[book].borrows){
    const borrow=books[book].borrows[borrows];
      if (!borrow.returned) count++ }}
  return count
}

function getMostCommonGenres(books) {
  let genres = [];
  const getGenre = (book) => genres.push(book.genre);
  
  books.forEach(getGenre);

  let result = [];
  for (let books in genres) {
    if (result.some(item=> item.name === genres[books])) {
      let currentGenreCount = result.find((genre) => genre.name === genres[books]);
      currentGenreCount.count +=1;
    } else {
      var genreCount = {name:genres[books], count:1}
      result.push(genreCount);
    }
  }
result.sort((genreA, genreB) => genreA.count < genreB.count ? 1: -1);

return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  const topBooks = books.map(book => ({
  ...book , borrowCount: book.borrows.length
  })).sort((book, account) => account.borrowCount - book.borrowCount);
  //console.log(topBooks)
  topBooks.length = 5;
  return topBooks.map(tb => {
  return {name: tb.title, count:tb.borrowCount};
  })
}

function getMostPopularAuthors(books, authors) {
    const topAuthors = authors.map(author => ({
  ...author,
  bookCount: books.filter(book => book.authorId === author.id).length,
  borrowCount: books.filter(book => book.authorId === author.id).reduce((acc, cur)=> acc + cur.borrows.length, 0)
  })).sort((book, author) => author.borrowCount - book.borrowCount);
  topAuthors.length = 5;
  return topAuthors.map(ta => {
  return {count: ta.borrowCount, name: ta.name.first + " " + ta.name.last};
  })
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};