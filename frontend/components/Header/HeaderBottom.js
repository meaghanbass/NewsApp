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

class HeaderBottom extends React.Component {
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
            <div className={this.state.isTop ? '' : 'sticky shadow light'}>
                <header className={this.state.isTop ? '' : 'dark'}>
                    <div className={this.state.isTop ? 'hide ' : 'show'}>
                        <div className="tickertape">
                            {/* <TickerTest /> */}
                        </div>
                    </div>
                </header>
                <header className={this.state.isTop ? '' : 'light'}>
                    <div className="container">
                        <div className="bottom">
                            <Navbar bg="none" className={this.state.isTop ? 'navbar border-top' : 'navbar alt '}>
                                <Nav>
                                    {/* THIS IS THE FULLWIDTH STICKY NAV */}
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
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
} ;

export default HeaderBottom;