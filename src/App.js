import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashbord from "./scenes/dashbord";
import Sidebars from "./scenes/global/Sidebars";
import Bar from "./scenes/Bar";
import Calendar from "./scenes/Calendar";
import Contact from "./scenes/Contact";
import Faq from "./scenes/Faq";
import Geographie from "./scenes/Geographie";
import Profil from "./scenes/Profil";
import Line from "./scenes/Line";
import Manage from "./scenes/Manage";
import Pie from "./scenes/Pie";
import Invoice from "./scenes/Invoice";
import "./App.css";

function App() {
  //juste en bas tentative 1 de recuperation des donnees du formulaire pour l'envoyer a mockDataTeam
  //const [mockData, setMockData] = useState(mockDataTeam); const handleAddUser = (userData) => { console.log(userData); setMockData([...mockData, userData]); };
  // dans la balise du composant profil
  // <Profil handleAddUser={handleAddUser}
  //  il faut a present passer les donnees a mockDataTeam
  //
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebars />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashbord />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/invoices" element={<Invoice />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/from" element={<Profil />} />
              <Route path="/team" element={<Manage />} />
              <Route path="/geographie" element={<Geographie />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
