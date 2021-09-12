import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chemical from './pages/Chemical';
import Glassware from './pages/Glassware';
import { Quotation, Organic, Inorganic, Indicator } from './pages/Quotation';
 

function App() {
  return (
     <Router>
      <Sidebar />
       <Switch>
        <Route path='/chemical' exact component={Chemical} />
        <Route path='/glassware' exact component={Glassware} />
        <Route path='/quotation' exact component={Quotation} />
        <Route path='/quotation/organic' exact component={Organic} />
        <Route path='/quotation/Inorganic' exact component={Inorganic} />
        <Route path='/quotation/Indicator' exact component={Indicator} />
      
     
      </Switch> 
    </Router>
  );
}

export default App;