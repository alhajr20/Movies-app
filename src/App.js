import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import Movie from './pages/Movie';

import './styles/style.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/movie/:id" component={Movie}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
