import TopNav from "./Components/TopNav";
import SecondNav from "./Components/SecondNav";
import Header from "./Components/Header";
import Instance from "./Components/Instance";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
        </>
      ),
    },
    {
      path: "/Instance",
      element: (
        <>
          <Instance />
        </>
      ),
    },
  ]);

  return (
    <>
      <TopNav />
      <SecondNav />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
