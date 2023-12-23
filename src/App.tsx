import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Heading level="h1">
          Lorem ipsum dolor sit amet consectetur adipis
        </Heading>
      </Main>
      <Footer />
    </>
  );
}

export default App;
