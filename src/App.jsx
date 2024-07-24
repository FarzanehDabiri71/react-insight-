import compoentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";



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
                image={compoentsImg}
              />
              {/* Second CoreConcept component using values from the CORE_CONCEPTS array */}
              <CoreConcept
                title={CORE_CONCEPTS[1].title}
                description={CORE_CONCEPTS[1].description}
                image={CORE_CONCEPTS[1].image}
              />
              {/* Third CoreConcept component using spread operator to pass all properties from the second item in the CORE_CONCEPTS array */}
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              {CORE_CONCEPTS.map((item,index)=><CoreConcept {...CORE_CONCEPTS[index]} key={index}/>)}

            </ul>
            {/* Rendering CoreConcept components dynamically from CORE_CONCEPTS array */}
          </section>
         <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            
          </menu>
         </section>
        </main>
      </div>
    </>
  );
}

export default App;
