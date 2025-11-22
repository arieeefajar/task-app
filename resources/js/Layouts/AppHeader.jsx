import { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import { useSidebar } from "../context/SidebarContext";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { HiDotsVertical } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import ThemeToggleButton from "@/Components/common/ThemeToggleButton";
import UserDropdown from "@/Components/header/UserDropdown";

export default function AppHeader() {
    const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

    const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

    const handleToggle = () => {
        if (window.innerWidth >= 1024) toggleSidebar();
        else toggleMobileSidebar();
    };

    const toggleApplicationMenu = () => {
        setApplicationMenuOpen(!isApplicationMenuOpen);
    };

    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "k") {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
            <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
                {/* LEFT AREA */}
                <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
                    {/* Sidebar Toggle */}
                    <button
                        onClick={handleToggle}
                        aria-label="Toggle Sidebar"
                        className="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
                    >
                        {isMobileOpen ? (
                            <RxCross2 size={24} />
                        ) : (
                            <RxHamburgerMenu size={22} />
                        )}
                    </button>

                    {/* Logo (mobile only) */}
                    <Link href="/" className="lg:hidden">
                        <img
                            className="dark:hidden"
                            src="/assets/images/logo/logo.svg"
                            alt="Logo"
                        />
                        <img
                            className="hidden dark:block"
                            src="/assets/images/logo/logo-dark.svg"
                            alt="Logo"
                        />
                    </Link>

                    {/* 3 Dots Menu Button */}
                    <button
                        onClick={toggleApplicationMenu}
                        className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
                    >
                        <HiDotsVertical size={22} />
                    </button>

                    {/* DESKTOP SEARCH */}
                    <div className="hidden lg:block">
                        <form>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <FiSearch
                                        className="text-gray-500 dark:text-gray-400"
                                        size={20}
                                    />
                                </span>

                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search or type command..."
                                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 xl:w-[430px]"
                                />

                                <button className="absolute right-2.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs text-gray-500 dark:border-gray-800 dark:bg-white/3 dark:text-gray-400">
                                    <span>⌘</span>
                                    <span>K</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* RIGHT AREA */}
                <div
                    className={`${
                        isApplicationMenuOpen ? "flex" : "hidden"
                    } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
                >
                    <div className="flex items-center gap-2 2xsm:gap-3">
                        <ThemeToggleButton />
                    </div>

                    <UserDropdown />
                </div>
            </div>
        </header>
    );
}
