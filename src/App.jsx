import reactImg from "./assets/react-core-concepts.png";
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


// Main App component definition
function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <h2>Time to get started!</h2>
        </main>
      </div>
    </>
  );
}

export default App;
