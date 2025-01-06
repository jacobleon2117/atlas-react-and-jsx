import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="app">
      <Header />

      <Section title="What is react?">
        <p>
          React is a library for building web and native user interfaces. It
          allows developers to create user interfaces from individual pieces
          called components. These components are like building blocks that can
          be created, customized, and combined to build entire screens, pages,
          and applications. This component based approach makes it easy to
          manage and reuse code across your project.
        </p>
      </Section>

      <Section title="Benefits of react">
        <ul>
          <li>Virtual DOM</li>
          <li>Fast rendering</li>
          <li>Component based architecture</li>
          <li>Super efficent, easy to learn and fast!</li>
          <li>Guarantee stable code</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
