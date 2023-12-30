import logo from '../assets/images/nicejob_none_background.png';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import {Button, Container, Image, Nav} from "react-bootstrap";

function NavbarCustom() {
    const links = [
        {href: 'about', text: 'About Us'},
        {href: 'jobs', text: 'Jobs'},
        {href: 'company', text: 'Company'},
    ]
    const button_links = [
        {href: '#', text: 'Đăng nhập', className: 'btn btn-primary p-2 me-2'},
        {href: '#', text: 'Đăng ký', className: 'btn btn-secondary p-2'}
    ]
    return (
        <Container fluid>
            <Navbar expand="lg"
                    className="bg-body-light d-flex container-fluid shadow-sm rounded header-content mb-1 align-items-center justify-content-center">
                <Navbar.Brand href="/">
                    <Image src={logo}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav className="me-auto">
                        {links.map((link) => (
                            <Nav.Link href={link.href}>{link.text}</Nav.Link>
                        ))}

                    </Nav>
                    {button_links.map((link) => (
                        <Button className={link.className} href={link.href}>
                            {link.text}
                        </Button>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarCustom;