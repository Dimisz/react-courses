import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import PageContent from "./components/PageContent/PageContent";

import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return(
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  )
}

export default App;