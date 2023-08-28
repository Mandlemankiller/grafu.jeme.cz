import ReactDOM from 'react-dom/client';
import './index.css';
import Page from "./router";
import Background from "./background";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Page/>
        <Background/>
    </>
);