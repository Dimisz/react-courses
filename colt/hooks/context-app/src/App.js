import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import PageContent from "./components/PageContent/PageContent";

import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageContextProvider } from "./contexts/LanguageContext";

const App = () => {
  return(
    <LanguageContextProvider>
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    </LanguageContextProvider>
  )
}

export default App;