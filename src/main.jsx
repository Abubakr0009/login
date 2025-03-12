import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"; 
import { store } from "./redux/store.js";
import { AppProvider } from "./context/AppContext.jsx";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> 
      <Router>
        <AppProvider>
          <App />
        </AppProvider>
      </Router>
    </Provider>
  </StrictMode>
);
