import Container from "react-bootstrap/Container";
import Header from "../components/Header/Header";
import HeaderTop from "../components/Header/HeaderTop";
import HeaderBottom from "../components/Header/HeaderBottom";

import Footer from "../components/Footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <HeaderTop />
            <HeaderBottom />
            {/* <Header /> */}
            <Container style={{minHeight: `200vh`}}>
                {children}
            </Container>
            <Footer />
        </>
    );
};

export default Layout;