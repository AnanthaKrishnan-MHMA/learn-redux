import React from "react";
import CounterRedux from "./components/CounterRedux";
import Counter from "./components/Counter";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/counter-redux" element={<CounterRedux />}/>
          <Route path="/counter" element={<Counter />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
