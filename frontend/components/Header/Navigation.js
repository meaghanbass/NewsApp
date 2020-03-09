import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavLink from "react-bootstrap/NavLink";
import { APP_NAME } from "../../config";
import { signout, isAuth } from "../../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";
import Search from "../Blog/Search";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Navigation = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><Link href="/"><a>{APP_NAME}</a></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto align-items-center">
                        {/* <Search /> */}

                        <Link href="/"><a>Home</a></Link>

                        <Link href="/blogs"><a>Blogs</a></Link>
                        
                        <Link href="/contact"><a>Contact</a></Link>

                        {!isAuth() && (
                        <>
                        <Link href="/signin"><a>Sign In</a></Link>
                        <Link href="/signup"><a>Sign Up</a></Link>
                        </>
                        )}

                        {isAuth() && (
                        <NavLink onClick={() => signout(() => Router.replace(`/signin`))}>
                            Sign Out
                        </NavLink>
                        )}

                        {isAuth() && isAuth().role === 0 && (
                        <Link href="/user"><a>
                            {`${isAuth().name}'s Dashboard`}
                            </a></Link>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                        <Link href="/admin"><a>
                            {`${isAuth().name}'s Dashboard`}
                            </a></Link>
                        )}

                        <Link href="/user/crud/blog"><a>Create Blog</a></Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Navigation;