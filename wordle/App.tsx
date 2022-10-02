import React from 'react';
import { Provider,  } from 'react-redux';
import {store, } from "./redux/reduxStore"
import {SubApp} from "./components/subApp"
import { file } from './data/getData';

export default function App() {
  // the word you try to guess
  console.log(file)


  return (
    //contains page
    <Provider store={store}>
      <SubApp/>
    </Provider>
  );
}



