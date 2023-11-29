import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton';
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";



function App() {
  function handleSelect() {
    console.log('Hello World -- Selected!')
  }

  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
