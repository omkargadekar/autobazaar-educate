import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchPopup from "../../components/common/popup-modal/search-popup";
import OffCanvas from "../../components/common/sidebar/off-canvas";
import useCartInfo from "../../hooks/use-cart-info";
import useSticky from "../../hooks/use-sticky";
import { wishlistItems } from "../../redux/features/wishlist-slice";
import MainMenu from "./component/main-menu";
import Cart from "./component/cart";

const HeaderThree = () => {
  const { sticky } = useSticky();
  const { quantity } = useCartInfo();
  const wishlists = useSelector(wishlistItems);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="edu-header header-style-4 header-fullwidth no-topbar">
        <div id="edu-sticky-placeholder"></div>
        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container-fluid">
            <div className="header-navbar">
              <div className="header-brand">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        className="logo-light"
                        src="/assets/images/logo/res-logo.png"
                        alt="Corporate Logo"
                        width={200}
                      />
                      <img
                        className="logo-dark"
                        src="https://auto-bazaar-admin.vercel.app/_next/image?url=%2FImages%2Flogo%2Flogo.png&w=256&q=100"
                        alt="Corporate Logo"
                        width={200}
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <MainMenu />
                </nav>
              </div>

              <div className="header-right">
                <ul className="header-action">
                  <li className="search-bar">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button
                        onClick={() => setIsSearchOpen(true)}
                        className="search-btn"
                        type="button"
                      >
                        <i className="icon-2"></i>
                      </button>
                    </div>
                  </li>

                  <li className="icon search-icon">
                    <a href="#" className="search-trigger">
                      <i className="icon-2"></i>
                    </a>
                  </li>

                  <li className="header-btn">
                    <Link href="/">
                      <a
                        className="edu-btn btn-medium btn-curved"
                        style={{ backgroundColor: "#ffa51f", color: "#111" }}
                      >
                        Get Started{" "}
                        <i
                          className="icon-4"
                          style={{
                            color: "#111",
                          }}
                        ></i>
                      </a>
                    </Link>
                  </li>

                  <li className="mobile-menu-bar d-block d-xl-none">
                    <button
                      className="hamberger-button"
                      onClick={() => setIsOpen(true)}
                    >
                      <i className="icon-54"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Start Search Popup  --> */}
        <SearchPopup
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        {/* <!-- End Search Popup  --> */}
      </header>

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}
    </>
  );
};

export default HeaderThree;
