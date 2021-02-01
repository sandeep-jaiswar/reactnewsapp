import React,{Suspense} from "react";
import "../style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Spinner from './Spinner'

const Home = React.lazy(() => import('./Home'));
const NewsToday = React.lazy(() => import('./NewsToday'));
const Research = React.lazy(() => import('./Research'));


export default function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/research">
            <Research/>
          </Route>
          <Route path="/news">
            <NewsToday/>
          </Route>
        </Switch>
      </Suspense>   
    </Router>
  );
}
