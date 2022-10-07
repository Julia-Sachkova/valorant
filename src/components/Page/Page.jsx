import './Page.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

export default function Page() {
    return (
        <div className="page">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}