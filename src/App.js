import Navbar from "./component/Navbar";
import { MuiThemeProvider } from "@material-ui/core";
import Search from "./component/Search";

function App() {
  return (
    <div>
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
