import LoginComponent from "./Components/Login/LoginComponent";
import {Fragment} from "react";
import NavbarComponent from "./Components/NavbarComponent";

function App() {
    return (
        <Fragment>
            <NavbarComponent/>
            <LoginComponent/>
        </Fragment>
    );
}

export default App;
