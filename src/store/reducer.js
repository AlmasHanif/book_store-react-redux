// import React from "react";
const initialState = {
    books: [
      { id: 1, title: "harry potter1", price: 500 , image : '1.jpg' },
      { id: 2, title: "harry potter2", price: 500 ,image : '1.jpg'},
      { id: 2, title: "harry potter3", price: 500,image : '1.jpg' },
      { id: 2, title: "harry potter4", price: 500,image : '1.jpg' },
      { id: 2, title: "harry potter5", price: 500,image : '1.jpg' },
      { id: 2, title: "harry potter6", price: 500,image : '1.jpg' },
    ],
    
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIST":
        return state.books;
  
        case "ADDBOOK":
            console.log(action.payload)
            const newBook=[]
            newBook.push(action.payload)
        return {
            ...state,
            books: [...state.books, ...newBook]
        }
  
      default:
        return state
    }
  };
  
  export default reducer;
  