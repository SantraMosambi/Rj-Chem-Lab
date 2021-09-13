import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Glassware from './pages/Glassware';
import Instrument from './pages/Instrument';

import { Quotation, Organic, Inorganic, Indicator } from './pages/Quotation';
import { Chemical,Msc } from './pages/Chemical';
 

function App() {
  return (
     <Router>
      <Sidebar />
       <Switch>
      
        <Route path='/instrument' exact component={Instrument} />
       
        <Route path='/glassware' exact component={Glassware} />
        <Route path='/quotation' exact component={Quotation} />
        <Route path='/quotation/Organic' exact component={Organic} />
        <Route path='/quotation/Inorganic' exact component={Inorganic} />
        <Route path='/quotation/Indicator' exact component={Indicator} />
{/*       
        <Route path='/chemical/organic' exact component={Organic} />
        <Route path='/chemical/Inorganic' exact component={Inorganic} />
        
        <Route path='/chemical/Indicator' exact component={Indicator} /> */}
      <Route path='/chemical/Msc' exact component={Msc} />
     
      </Switch> 
    </Router>
  );
}

export default App;