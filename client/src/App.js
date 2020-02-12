import React, {  useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Saved from './pages/Saved';
import Search from './pages/Search';

function App() {
  const [results, setResults] = useState([{
    title: "Title",
    subtitle: "Sub-Title",
    author: "Author",
    img: "img" 
  }]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Search results={results} />
          </Route>
          <Route path="/saved">
            <Saved results={results} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
