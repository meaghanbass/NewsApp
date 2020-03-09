import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import { APP_NAME } from "../../config";
import { signout, isAuth } from "../../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";
import Search from "../Blog/Search";

import "./header.scss";

import ButtonSmBlue from "../../components/Buttons/Sm/ButtonBlue";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

// const Navigation = () => {
//     return (
//             <Navbar bg="light" expand="lg">
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ml-auto align-items-center">

//                         {/* TEST!!!!!! */}
//                         {/* <Button text="hello"/> */}

//                         {!isAuth() && (
//                         <>
//                         <Link href="/signup"><a><ButtonSmBlue text="Subscribe Now"/></a></Link>
//                         <Link href="/signin"><a><ButtonSmBlue text="Login"/></a></Link>
//                         </>
//                         )}

//                         {isAuth() && (
//                         <NavLink onClick={() => signout(() => Router.replace(`/signin`))}>
//                             Sign Out
//                         </NavLink>
//                         )}

//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//     );
// };



class HeaderTop extends React.Component {
    state = {
        isTop: true,
    };
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 110;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
    render() {
        return (
            <header className={this.state.isTop ? '' : 'mobile-only sticky shadow light'}>
                
                <div className="container bottoms">
                    <div className="top">
                        <div className="left">
                            <Navbar bg="none" expand="full">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">

                                    <ul>
                                        {/* THIS IS THE SIDEBAR NAV */}
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="sidebar-toggler"/>

                                        <Link href="/"><a>World</a></Link>
                                        <Link href="/"><a>U.S.</a></Link>
                                        <Link href="/"><a>Politics</a></Link>
                                        <Link href="/"><a>N.Y.</a></Link>
                                        <Link href="/"><a>Business</a></Link>
                                        <Link href="/"><a>Opinion</a></Link>
                                        <Link href="/"><a>Tech</a></Link>
                                        <Link href="/"><a>Science</a></Link>
                                        <Link href="/"><a>Health</a></Link>
                                        <Link href="/"><a>Sports</a></Link>
                                        <Link href="/"><a>Arts</a></Link>
                                        <Link href="/"><a>Books</a></Link>
                                        <Link href="/"><a>Style</a></Link>
                                        <Link href="/"><a>Food</a></Link>
                                        <Link href="/"><a>Travel</a></Link>
                                        <Link href="/"><a>Magazine</a></Link>
                                        <Link href="/"><a>Real Estate</a></Link>

                                        {isAuth() && (
                                        <NavLink onClick={() => signout(() => Router.replace(`/signin`))}>
                                            Sign Out
                                        </NavLink>
                                        )}

                                    </ul>
                                </Navbar.Collapse>
                            </Navbar>


                        </div>
                        <div className="center">
                            <Link href="/"><a>english</a></Link>
                        </div>
                        <div className="right">
                            <Link href="/signup"><ButtonSmBlue text="Subscribe Now"/></Link>
                            <Link href="/signin"><ButtonSmBlue text="Login"/></Link>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="left"></div>
                        <div className="center">
                            <h1>
                                <Link href="/"><a>The New York Times</a></Link>
                            </h1>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </header>
        );
    }
};

export default HeaderTop;