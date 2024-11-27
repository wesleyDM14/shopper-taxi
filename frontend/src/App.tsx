import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

import Estimate from "./pages/Estimate";
import History from "./pages/History";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><Estimate /></MainLayout>} />
          <Route path="/history" element={<MainLayout><History /></MainLayout>} />
        </Routes>
      </Router>
    </Theme>

  );
}

export default App;