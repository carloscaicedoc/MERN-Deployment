import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CrewBoard from './views/CrewBoard';
import AddPirate from './views/AddPirate';
import Detail from './views/Detail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/pirates/:id">
            <Detail />
          </Route>
          <Route exact path="/pirate/new">
            <AddPirate />
          </Route>
          <Route exact path="/pirates">
            <CrewBoard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;