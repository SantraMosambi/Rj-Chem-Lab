import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Glassware from "./pages/Glassware";
import Instrument from "./pages/Instrument";

import { Chemical, Organic, Inorganic, Indicator, Msc } from "./pages/Chemical";
import { Quotation, Organics, Inorganics, Indicators } from "./pages/Quotation";
import { Stock, organics, inorganic, indicator, msc, glassware } from "./pages/Stock";

import Dir from "./pages/Dir";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/glassware" exact component={Glassware} />

        <Route path="/instrument" exact component={Instrument} />

        <Route path="/chemical" exact component={Chemical} />
        <Route path="/chemical/Organic" exact component={Organic} />
        <Route path="/chemical/Inorganic" exact component={Inorganic} />
        <Route path="/chemical/Msc" exact component={Msc} />
        <Route path="/chemical/Indicator" exact component={Indicator} />

        <Route path="/quotation" exact component={Quotation} />
        <Route path="/quotation/Organic" exact component={Organics} />
        <Route path="/quotation/Inorganic" exact component={Inorganics} />
        <Route path="/quotation/Indicator" exact component={Indicators} />

        <Route path="/stock" exact component={Stock} />
        <Route path="/stock/Organic" exact component={organics} />
        <Route path="/stock/Inorganic" exact component={inorganic} />
        <Route path="/stock/Msc" exact component={msc} />
        <Route path="/stock/Indicator" exact component={indicator} />
        <Route path="/stock/glassware" exact component={glassware} />

        <Route path="/dir" exact component={Dir} />
      </Switch>
    </Router>
  );
}

export default App;
