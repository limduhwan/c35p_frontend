// import firebase from 'firebase'
import config from '../assets/config'

// firebase.initializeApp(config.FIREBASE_CONFIG);

import axios from 'axios';
import { API_SOCK_URL } from '../constants/backend-url';

export default class FirebaseDao {

  constructor() {
    // this.database = firebase.database();
  }

    queryStatusOrderedBooksBy(filterType) {
      // let query = this.database.ref('books/').orderByChild('status');
      //
    // if(filterType != '전체'){
    //   query = query.equalTo(filterType);
    // }
    // return query.once('value');
  }

  async readAllBooksBy(callback, filterType = '전체', searchKeyword = '', isCanceledIncluded = true) {
    const { data: { bookItems } } = await axios.get(`${API_SOCK_URL}/readAllBooksBy/${filterType}`);
      let returnBooks = [];

    // bookItems.forEach((book) => {
    //     // let book = childSnapshot.val();
    //     book.no = 0
    //     if(this.isKeywordValidated(searchKeyword, book)){
    //       if(isCanceledIncluded){
    //         returnBooks.push(book);
    //       }else if(this.isNotCanceledBook(book)){
    //         returnBooks.push(book);
    //       }
    //     }
    //   });
    //
    //   callback(this.sortBooksByCreatedDateDesc(returnBooks));
    // }).catch(err => {
    //     console.log('Error getting documents', err);
    // });

    callback(bookItems);
  }

  sortBooksByCreatedDateDesc(books) {
    return books.sort(function (a, b) {
      if (a.createdDate < b.createdDate) {
        return 1;
      } else if (a.createdDate > b.createdDate) {
        return -1;
      }
      return 0;
    });
  }

  isNotCanceledBook(book) {
  }

  isKeywordValidated(searchKeyword, book) {
    // if(searchKeyword.length == 0){
    //   return true;
    // }
    // if (searchKeyword.length > 0 && book.title.toUpperCase().indexOf(searchKeyword.toUpperCase()) > -1){
    //   return true;
    // }
    // return false;
  }

  async insertBook(book) {
      console.log('insert book', book);
    axios.post(`${API_SOCK_URL}/books`,{
        isbn: book.isbn,
        title : book.title,
        author : book.author,
        publishedDate : book.publishedDate,
        publisher : book.publisher,
        createdDate : book.createdDate,
        updatedDate : book.updatedDate,
        status : book.status,
        link : book.link,
        image : book.image,
        applier : book.applier
      }).then( (result) => {
        return isbn;
    });
  }

  async updateBook(isbn, status){
    const bookInfo = {
        updatedDate: new Date().toISOString(),
        status: status
    }
    const { data } = await axios.put(`${API_SOCK_URL}/books/${isbn}`, bookInfo);
    return data;
  }
}
