import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto m-8 px-4">
      <Header />
      <Section title="What is react?">
        <p className="m-8">
          React is a library for building web and native user interfaces. It
          allows developers to create user interfaces from individual pieces
          called components. These components are like building blocks that can
          be created, customized, and combined to build entire screens, pages,
          and applications. This component based approach makes it easy to
          manage and reuse code across your project.{" "}
        </p>
      </Section>
      <Section title="Benefits of react">
        <ul className="p-0 m-8 list-check">
          <li>Virtual DOM</li>
          <li>Fast rendering</li>
          <li>Component based architecture</li>
          <li>Super efficent, easy to learn and fast!</li>
          <li>Guarantee stable code</li>
        </ul>
      </Section>
      <Section title="Helpful resources">
        <HelpfulResource
          label="React Official Documentation - Learn React"
          link="https://react.dev/learn/your-first-component"
        />
        <HelpfulResource
          label="React Event Handling Guide"
          link="https://react.dev/learn/responding-to-events"
        />
        <HelpfulResource
          label="React Components and Props"
          link="https://react.dev/learn/your-first-component"
        />
      </Section>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
