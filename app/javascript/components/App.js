import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import { store } from '../store/greetings/greetingStore';

const App = () => {
  return (
    <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
    </Provider>
  );
};

export default App;
