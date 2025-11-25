import { useCallback, useEffect, useRef, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { useSidebar } from "../context/SidebarContext";
import { FaChevronDown } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { useAuth } from "@/context/AuthContext";
import { SiDatabricks } from "react-icons/si";

const adminNav = [
    {
        icon: <MdDashboard />,
        name: "Dashboard",
        path: "/dashboard-admin",
    },
    {
        icon: <SiDatabricks />,
        name: "Master Data",
        subItems: [
            {
                name: "Users",
                path: "/users",
            },
        ],
    },
];

const userNav = [
    {
        icon: <MdDashboard />,
        name: "Dashboard",
        path: "/dashboard-user",
    },
];

export default function AppSidebar() {
    const { url } = usePage();
    const user = useAuth();
    const navItems = user?.role === "admin" ? adminNav : userNav;
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();

    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [subMenuHeight, setSubMenuHeight] = useState({});
    const subMenuRefs = useRef({});

    const isActive = useCallback((path) => url.startsWith(path), [url]);

    // Auto-open submenu if active route is inside
    useEffect(() => {
        let found = false;

        const check = (items, type) => {
            items.forEach((nav, index) => {
                if (nav.subItems) {
                    nav.subItems.forEach((sub) => {
                        if (isActive(sub.path)) {
                            setOpenSubmenu({ type, index });
                            found = true;
                        }
                    });
                }
            });
        };

        check(navItems, "main");

        if (!found) setOpenSubmenu(null);
    }, [url, isActive]);

    useEffect(() => {
        if (openSubmenu !== null) {
            const key = `${openSubmenu.type}-${openSubmenu.index}`;
            const el = subMenuRefs.current[key];
            if (el) {
                setSubMenuHeight((prev) => ({
                    ...prev,
                    [key]: el.scrollHeight,
                }));
            }
        }
    }, [openSubmenu]);

    const handleSubmenuToggle = (index, type) => {
        setOpenSubmenu((prev) =>
            prev && prev.type === type && prev.index === index
                ? null
                : { type, index }
        );
    };

    const renderMenuItems = (items, type) => (
        <ul className="flex flex-col gap-4">
            {items.map((nav, index) => (
                <li key={nav.name}>
                    {nav.subItems ? (
                        // SUBMENU BUTTON
                        <button
                            onClick={() => handleSubmenuToggle(index, type)}
                            className={`menu-item group ${
                                openSubmenu?.type === type &&
                                openSubmenu?.index === index
                                    ? "menu-item-active"
                                    : "menu-item-inactive"
                            } ${
                                !isExpanded && !isHovered
                                    ? "lg:justify-center"
                                    : ""
                            }`}
                        >
                            <span
                                className={`menu-item-icon-size ${
                                    openSubmenu?.type === type &&
                                    openSubmenu?.index === index
                                        ? "menu-item-icon-active"
                                        : "menu-item-icon-inactive"
                                }`}
                            >
                                {nav.icon}
                            </span>

                            {(isExpanded || isHovered || isMobileOpen) && (
                                <span className="menu-item-text">
                                    {nav.name}
                                </span>
                            )}

                            {(isExpanded || isHovered || isMobileOpen) && (
                                <FaChevronDown
                                    className={`ml-auto w-5 h-5 transition-transform ${
                                        openSubmenu?.type === type &&
                                        openSubmenu?.index === index
                                            ? "rotate-180 text-brand-500"
                                            : ""
                                    }`}
                                />
                            )}
                        </button>
                    ) : (
                        // NORMAL LINK
                        nav.path && (
                            <Link
                                href={nav.path}
                                className={`menu-item group ${
                                    isActive(nav.path)
                                        ? "menu-item-active"
                                        : "menu-item-inactive"
                                }`}
                            >
                                <span
                                    className={`menu-item-icon-size ${
                                        isActive(nav.path)
                                            ? "menu-item-icon-active"
                                            : "menu-item-icon-inactive"
                                    }`}
                                >
                                    {nav.icon}
                                </span>

                                {(isExpanded || isHovered || isMobileOpen) && (
                                    <span className="menu-item-text">
                                        {nav.name}
                                    </span>
                                )}
                            </Link>
                        )
                    )}

                    {/* DROPDOWN SUBMENU */}
                    {nav.subItems &&
                        (isExpanded || isHovered || isMobileOpen) && (
                            <div
                                ref={(el) => {
                                    subMenuRefs.current[`${type}-${index}`] =
                                        el;
                                }}
                                className="overflow-hidden transition-all duration-300"
                                style={{
                                    height:
                                        openSubmenu?.type === type &&
                                        openSubmenu?.index === index
                                            ? `${
                                                  subMenuHeight[
                                                      `${type}-${index}`
                                                  ]
                                              }px`
                                            : "0px",
                                }}
                            >
                                <ul className="mt-2 space-y-1 ml-9">
                                    {nav.subItems.map((sub) => (
                                        <li key={sub.name}>
                                            <Link
                                                href={sub.path}
                                                className={`menu-dropdown-item ${
                                                    isActive(sub.path)
                                                        ? "menu-dropdown-item-active"
                                                        : "menu-dropdown-item-inactive"
                                                }`}
                                            >
                                                {sub.name}

                                                <span className="flex items-center gap-1 ml-auto">
                                                    {sub.new && (
                                                        <span
                                                            className={`menu-dropdown-badge ${
                                                                isActive(
                                                                    sub.path
                                                                )
                                                                    ? "menu-dropdown-badge-active"
                                                                    : "menu-dropdown-badge-inactive"
                                                            }`}
                                                        >
                                                            new
                                                        </span>
                                                    )}
                                                    {sub.pro && (
                                                        <span
                                                            className={`menu-dropdown-badge ${
                                                                isActive(
                                                                    sub.path
                                                                )
                                                                    ? "menu-dropdown-badge-active"
                                                                    : "menu-dropdown-badge-inactive"
                                                            }`}
                                                        >
                                                            pro
                                                        </span>
                                                    )}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                </li>
            ))}
        </ul>
    );

    return (
        <aside
            className={`fixed mt-16 lg:mt-0 top-0 left-0 px-5 bg-white dark:bg-gray-900 border-r dark:border-gray-800
        h-screen transition-all duration-300 z-50
        ${
            isExpanded || isMobileOpen
                ? "w-[290px]"
                : isHovered
                ? "w-[290px]"
                : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* LOGO */}
            <div
                className={`py-8 flex ${
                    !isExpanded && !isHovered
                        ? "lg:justify-center"
                        : "justify-start"
                }`}
            >
                <Link href="/">
                    {isExpanded || isHovered || isMobileOpen ? (
                        <>
                            <img
                                className="dark:hidden"
                                src="/assets/images/logo/logo.svg"
                                alt="Logo"
                                width={150}
                                height={40}
                            />
                            <img
                                className="hidden dark:block"
                                src="/assets/images/logo/logo-dark.svg"
                                alt="Logo"
                                width={150}
                                height={40}
                            />
                        </>
                    ) : (
                        <img
                            src="/assets/images/logo/logo-icon.svg"
                            alt="Logo"
                            width={32}
                            height={32}
                        />
                    )}
                </Link>
            </div>

            {/* MENU */}
            <div className="flex flex-col overflow-y-auto no-scrollbar">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2
                                className={`mb-4 text-xs uppercase text-gray-400 flex ${
                                    !isExpanded && !isHovered
                                        ? "lg:justify-center"
                                        : ""
                                }`}
                            >
                                {isExpanded || isHovered || isMobileOpen ? (
                                    "Menu"
                                ) : (
                                    <HiDotsHorizontal className="size-6" />
                                )}
                            </h2>
                            {renderMenuItems(navItems, "main")}
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
}
