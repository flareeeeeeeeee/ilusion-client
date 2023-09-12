/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { AsideMenuItem } from "./AsideMenuItem";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../helpers";
import {
  DrawerComponent,
  ScrollComponent,
  ToggleComponent,
} from "../../../assets/ts/components";
import { useAuth } from "../../../../providers";
const AsideDefault = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { currentUser } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      DrawerComponent.reinitialization();
      ToggleComponent.reinitialization();
      ScrollComponent.reinitialization();
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="app-wrapper flex-column " id="kt_app_wrapper">
      <div
        id="kt_app_sidebar"
        className="app-sidebar flex-column"
        data-kt-drawer="true"
        data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="250px"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
      >
        <div
          className="app-sidebar-logo flex-shrink-0 d-none d-md-flex align-items-center px-8"
          id="kt_app_sidebar_logo"
        >
          <Link to="/dashboard">
            <div>
              <img
                src={toAbsoluteUrl("/media/logos/default.png")}
                alt="logo"
                className="h-50px h-lg-50px d-none d-sm-inline app-sidebar-logo-default theme-light-show"
              />
              <img
                src={toAbsoluteUrl("/media/logos/default-dark.png")}
                alt="logo"
                className="h-25px h-lg-50px d-none d-sm-inline app-sidebar-logo-default theme-dark-show"
              />
            </div>
          </Link>
        </div>

        <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
          <div
            id="kt_app_sidebar_menu_wrapper"
            className="app-sidebar-wrapper hover-scroll-overlay-y my-5"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
            data-kt-scroll-wrappers="#kt_app_sidebar_menu"
            data-kt-scroll-offset="5px"
          >
            <div
              className="menu menu-column menu-rounded menu-sub-indention fw-semibold px-3"
              id="#kt_app_sidebar_menu"
              data-kt-menu="true"
              data-kt-menu-expand="false"
            >
              <AsideMenuItem
                to="/dashboard"
                icon="element-11"
                title="Dashboard"
                fontIcon="ki-outline"
              />

              <div className="menu-item pt-5">
                <div className="menu-content">
                  <span className="menu-heading fw-bold text-uppercase fs-7">
                    Menu
                  </span>
                </div>
              </div>
              <AsideMenuItem
                to="/users"
                title="Usuarios"
                icon="user"
              />
              <AsideMenuItem
                to="/products"
                icon="shop"
                title="Productos"
                fontIcon="ki-outline"
              />
              <AsideMenuItem
                to="/categories"
                icon="category"
                title="Categorias"
                fontIcon="ki-outline"
              />
              {/* <AsideMenuItem
                to="/services"
                icon="abstract-25"
                title="Servicios"
                fontIcon="ki-outline"
              />
              <AsideMenuItem
                to="/singles"
                icon="element-2"
                title="Singles"
                fontIcon="ki-outline"
              />
              <AsideMenuItem
                to="/promotions"
                icon="element-5"
                title="Promociones"
                fontIcon="ki-outline"
              /> */}
            </div>
          </div>
        </div>

        <UserDropDown />
      </div>
    </div>
  );

  function UserDropDown() {
    return (
      <div
        className="app-sidebar-footer d-flex align-items-center px-8 pb-10"
        id="kt_app_sidebar_footer"
      >
        <div className="">
          <div
            className="d-flex align-items-center"
            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-start"
          >
            <div className="d-flex flex-center cursor-pointer symbol symbol-circle symbol-40px">
              <div
                className={clsx(
                  "symbol-label fs-3",
                  `bg-light-primary`,
                  `text-primary`,
                )}
              >
                {currentUser?.name?.[0]}
              </div>
            </div>
            <div className="d-flex flex-column align-items-start justify-content-center ms-3">
              <span className="text-gray-500 fs-8 fw-semibold">Hola,</span>
              <a
                href="#"
                className="text-gray-800 fs-7 fw-bold text-hover-primary"
              >
                {currentUser?.name}
              </a>
            </div>
          </div>
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
            data-kt-menu="true"
          >
            <div className="menu-item px-3">
              <div className="menu-content d-flex align-items-center px-3">
                <div className="symbol symbol-50px me-5">
                  <div
                    className={clsx(
                      "symbol-label fs-3",
                      `bg-light-primary`,
                      `text-primary`,
                    )}
                  >
                    {currentUser?.name?.[0]}
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div className="fw-bold d-flex align-items-center fs-5">
                    {currentUser?.name}
                  </div>
                  <a
                    href="#"
                    className="fw-semibold text-muted text-hover-primary fs-7"
                  >
                    {currentUser?.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="separator my-2"></div>
            {
              /* <div className="menu-item px-5 my-1">
              <Link to="/profile" className="menu-link px-5">
                Ajustes de Cuenta
              </Link>
            </div> */
            }

            <div className="menu-item px-5">
              <Link to="/logout" className="menu-link px-5">
                Salir
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { AsideDefault };
