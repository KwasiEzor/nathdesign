import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>

    </AnimatePresence>
  </React.StrictMode>
);
