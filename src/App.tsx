import { useState } from "react";
import Navbar from "./scenes/navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div className="bg-gray-200">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
