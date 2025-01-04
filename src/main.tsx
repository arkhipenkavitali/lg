import React from "react";
import {createRoot} from "react-dom/client";

const App = () => {
    return <p>Hello Vite + React</p>
}

createRoot(document.getElementById("root")!).render(<App/>);