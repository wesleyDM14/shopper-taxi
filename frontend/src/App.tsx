import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

import Estimate from "./pages/Estimate";
import History from "./pages/History";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Estimate />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </Theme>

  );
}

export default App;