import './App.css';
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import ProductsSection from "./components/section/ProductsSection.jsx";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import SettingsSection from "./components/section/SettingsSection";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Main className={'flex mx-16 mt-14 '}>
                    <SettingsSection/>
                    <ProductsSection/>
                </Main>
            </div>
        </Provider>
    );
}

export default App;
