import React from 'react';

const HeaderComponent = () => {
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        let intViewportWidth = window.innerWidth;
        if (
            document.body.scrollTop > 30 ||
            document.documentElement.scrollTop > 30
        ) {
            if (intViewportWidth >= 1024) {
                let navbar = document.getElementById("navbar");
                if (navbar) {
                    navbar.classList.add("top-nav-collapse");
                }
            }
        } else {
            let navbar = document.getElementById("navbar");
            if (navbar) {
                navbar.classList.remove("top-nav-collapse");
            }
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        const listItems = document.querySelectorAll(".navbar-nav");

        listItems.forEach(function (item) {
            item.addEventListener("click", function (event) {
                const focusedElement = document.querySelector(".focused");
                if (focusedElement) {
                    focusedElement.classList.remove("focused");
                }
                event.target.classList.add("focused");
            });
        });

        const firstItem = document.querySelector(".nav-item");
        if (firstItem) {
            firstItem.classList.add("focused");
            firstItem.focus();
        }
    });

// NAVBAR ON MOBILE
    let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", () => {
            let offcanvasCollapse = document.querySelector(".offcanvas-collapse");
            if (offcanvasCollapse) {
                offcanvasCollapse.classList.toggle("open");
            }
        });
    }

    let navbarSideCollapse = document.querySelector("#navbarSideCollapse");
    if (navbarSideCollapse) {
        navbarSideCollapse.addEventListener("click", () => {
            let navbarsExampleDefaultForMobile = document.querySelector("#navbarsExampleDefaultForMobile");
            if (navbarsExampleDefaultForMobile) {
                navbarsExampleDefaultForMobile.classList.toggle("open");
            }
        });
    }
    const menuIcon = require('../assets/images/menu-icon.png')
    return (
        // Navigation
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
}

export default HeaderComponent;
