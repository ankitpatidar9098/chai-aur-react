import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-8 shadow-lg bg-white px-8 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>
              <button
          onClick={() => setColor("rgb(76 29 149)")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "rgb(76 29 149)"}}
          >Voilet</button>
              <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
              <button
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          >Grey</button>
              <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orange"}}
          >Orange</button>
           <button
          onClick={() => setColor("Pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Pink"}}
          >Pink</button>
          <button
          
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App

// import { useState, useEffect } from "react";

// function App() {
//   const colors = ["red", "black", "rgb(76 29 149)", "yellow", "grey", "orange", "Pink", "blue"];
//   const [colorIndex, setColorIndex] = useState(0);
//   const [color, setColor] = useState(colors[colorIndex]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Increment the colorIndex in a cyclic manner
//       setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
//     }, 400);

//     // Clear the interval when the component unmounts or when the colors array changes
//     return () => clearInterval(intervalId);
//   }, [colors]); // Depend on the colors array to re-run the effect when it changes
//   <h1 className="text-5xl font-bold ">
//   Hello world!
// </h1>
//   // Update the color when the colorIndex changes
//   useEffect(() => {
//     setColor(colors[colorIndex]);
//   }, [colorIndex, colors]);

//   return (
//     <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
//       {/* ... rest of your component ... */}
//     </div>
//   );
// }

// export default App;
