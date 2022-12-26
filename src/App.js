import './App.css';
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import ProductsSection from "./components/section/products-section/ProductsSection.jsx";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import SettingsSection from "./components/section/settings-section/SettingsSection";

function App() {
    return (
        <Provider store={store}>
            <div className="App h-full w-full">
                <Header/>
                <Main className={'flex mx-16 mt-14 h-full sm:mx-0 s:mx-0 '}>
                    <SettingsSection/>
                    <ProductsSection/>
                </Main>
            </div>
        </Provider>
    );
}

export default App;
