import compoentsImg from "../assets/components.png";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts (){
    return(
        <>
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
            {CORE_CONCEPTS.map((item, index) => (
              <CoreConcept {...CORE_CONCEPTS[index]} key={index} />
            ))}
          </ul>
          {/* Rendering CoreConcept components dynamically from CORE_CONCEPTS array */}
        </section>
        </>
    )
}