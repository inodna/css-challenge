import { Button } from "./components/Button/Button";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import { Main } from "./components/Main/Main";
import { Section } from "./components/Section/Section";
import { Tag } from "./components/Tag/Tag";
import a from "./assets/section-01.svg";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section variant={"section--01"}>
          <div>
            <Tag to={"/"}>Lorem</Tag>
            <Heading level="h1">
              Lorem ipsum dolor sit amet consectetur adipis
            </Heading>
            <p>
              Lorem ipsum dolor sit amet, <a href="/">consectetur adipiscing</a>{" "}
              elit. <a href="/">Mollis adipiscing</a> in turpis luctus ipsum,
              amet. Risus ac mauris pellentesque sed nunc nulla accumsan nec.
              Risus gravida donec tempor feugiat.
            </p>
            <Button>Button</Button>
          </div>
          <img
            src={a}
            alt="A mobile phone held by one hand"
            width="648"
            height="500"
          />
        </Section>
      </Main>
      <Footer />
    </>
  );
}

export default App;
