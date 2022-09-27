import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Section from "./components/section/Section";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Main>
                    <Section/>
                </Main>
            </div>
        </Provider>
    );
}

export default App;
