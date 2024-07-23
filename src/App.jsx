import reactImg from "./assets/react-core-concepts.png";
import compoentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
// Array of descriptions related to React
const reactDescriptions = ["Fundamental", "Cricial", "Core"];
// Function to generate a random integer between 0 and max
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Header component definition
function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="styleized atom" />
      {/* <img src="src/assets/react-core-concepts.png" alt="styleized atom" /> */}
      <h1>React Essentials</h1>
      <p>
        {/* { reactDescriptions[genRandomInt(2)] }  */}
        {description}
        React concepts you will need for almost any app you are going to build.
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
// Main App component definition
function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Conceps</h2>
            <ul>
              {/* First CoreConcept component with hardcoded values */}
              <CoreConcept
                title="components"
                description="The core UI building block."
                img={compoentsImg}
              />
              {/* Second CoreConcept component using values from the CORE_CONCEPTS array */}
              <CoreConcept
                title={CORE_CONCEPTS[1].title}
                description={CORE_CONCEPTS[1].description}
                img={CORE_CONCEPTS[1].image}
              />
               {/* Third CoreConcept component using spread operator to pass all properties from the second item in the CORE_CONCEPTS array */}
              <CoreConcept {...CORE_CONCEPTS[1]} />
            
            </ul>
          </section>
          <h2>Time to get started!</h2>
        </main>
      </div>
    </>
  );
}

export default App;
