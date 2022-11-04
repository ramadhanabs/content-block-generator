import { PropsWithChildren } from "react";
import TopNavbar from "./components/elements/Nav/TopNavbar";

function App(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main className="App">{children}</main>
    </>
  )
}

export default App;
