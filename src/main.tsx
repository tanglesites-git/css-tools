import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);

ReactDOM.createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
