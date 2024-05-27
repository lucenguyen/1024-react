import React, { useEffect } from 'react';
import menuIcon from '../assets/images/menu-icon.png';

const HeaderComponent = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
            if (window.scrollY > 30 && window.innerWidth >= 1024) {
                navbar?.classList.add("top-nav-collapse");
            } else {
                navbar?.classList.remove("top-nav-collapse");
            }
        };

        window.addEventListener("scroll", handleScroll);

        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        const handleNavLinkClick = (event) => {
            document.querySelector(".focused")?.classList.remove("focused");
            event.target.classList.add("focused");
        };

        navLinks.forEach(link => link.addEventListener("click", handleNavLinkClick));

        const firstNavLink = document.querySelector(".navbar-nav .nav-link");
        firstNavLink?.classList.add("focused");

        const nonDropdownLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
        const handleNonDropdownLinkClick = () => {
            const offcanvasCollapse = document.querySelector(".offcanvas-collapse");
            offcanvasCollapse?.classList.toggle("open");
        };

        nonDropdownLinks.forEach(link => link.addEventListener("click", handleNonDropdownLinkClick));

        const navbarSideCollapseButton = document.querySelector("#navbarSideCollapse");
        const handleNavbarSideCollapseClick = () => {
            const navbarsExampleDefaultForMobile = document.querySelector("#navbarsExampleDefaultForMobile");
            navbarsExampleDefaultForMobile?.classList.toggle("open");
        };

        navbarSideCollapseButton?.addEventListener("click", handleNavbarSideCollapseClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            navLinks.forEach(link => link.removeEventListener("click", handleNavLinkClick));
            nonDropdownLinks.forEach(link => link.removeEventListener("click", handleNonDropdownLinkClick));
            navbarSideCollapseButton?.removeEventListener("click", handleNavbarSideCollapseClick);
        };
    }, []);

    return (
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
            <div className="container">
                <a className="navbar-brand logo-text" href="index.html">1024</a>
                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <img className="navbar-icon" src={menuIcon} alt="Menu Icon" />
                </button>
                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefaultForMobile">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="nav-link" href="#header">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#manager">Người quản lí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#popular">Phổ biến</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#comments">Bình luận</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#library">Thư viện</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#login">Đăng nhập</a>
                        </li>
                    </ul>
                    <span className="nav-item register-button">
                        <button className="text-bold register-button-mobile">Đăng kí</button>
                    </span>
                </div> {/* end of navbar-collapse */}

                <div className="d-flex" id="navbarsExampleDefault">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="nav-link" href="#header">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#manager">Người quản lí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#popular">Phổ biến</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#comments">Bình luận</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#library">Thư viện</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#login">Đăng nhập</a>
                        </li>
                    </ul>
                    <span className="nav-item register-button">
                        <button className="text-bold register-button-mobile">Đăng kí</button>
                    </span>
                </div> {/* end of navbar-collapse */}
            </div> {/* end of container */}
        </nav> /* end of navbar */
    );
};

export default HeaderComponent;
