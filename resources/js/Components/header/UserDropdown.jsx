import { useState } from "react";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { Link } from "@inertiajs/react";

// React Icons
import {
    FiChevronDown,
    FiUser,
    FiSettings,
    FiHelpCircle,
    FiLogOut,
} from "react-icons/fi";

export default function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function closeDropdown() {
        setIsOpen(false);
    }

    return (
        <div className="relative">
            {/* Trigger button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
            >
                <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
                    <img src="/assets/images/user/owner.jpg" alt="User" />
                </span>

                <span className="block mr-1 font-medium text-theme-sm">
                    Musharof
                </span>

                <FiChevronDown
                    className={`text-gray-500 dark:text-gray-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    size={18}
                />
            </button>

            {/* DROPDOWN */}
            <Dropdown
                isOpen={isOpen}
                onClose={closeDropdown}
                className="absolute right-0 mt-[17px] flex w-[260px] flex-col
                rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg
                dark:border-gray-800 dark:bg-gray-dark"
            >
                {/* HEADER */}
                <div>
                    <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                        Musharof Chowdhury
                    </span>
                    <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
                        randomuser@pimjo.com
                    </span>
                </div>

                {/* MENU ITEMS */}
                <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            tag="a"
                            to="/profile"
                            className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg
                            group text-theme-sm hover:bg-gray-100 dark:text-gray-400
                            dark:hover:bg-white/5 dark:hover:text-gray-300"
                        >
                            <FiUser
                                className="text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
                                size={20}
                            />
                            Edit Profile
                        </DropdownItem>
                    </li>

                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            tag="a"
                            to="/settings"
                            className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg
                            group text-theme-sm hover:bg-gray-100 dark:text-gray-400
                            dark:hover:bg-white/5 dark:hover:text-gray-300"
                        >
                            <FiSettings
                                className="text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
                                size={20}
                            />
                            Account Settings
                        </DropdownItem>
                    </li>

                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            tag="a"
                            to="/support"
                            className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg
                            group text-theme-sm hover:bg-gray-100 dark:text-gray-400
                            dark:hover:bg-white/5 dark:hover:text-gray-300"
                        >
                            <FiHelpCircle
                                className="text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
                                size={20}
                            />
                            Support
                        </DropdownItem>
                    </li>
                </ul>

                {/* SIGN OUT */}
                <Link
                    href="/signin"
                    className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700
                    rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700
                    dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                    <FiLogOut
                        className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                        size={20}
                    />
                    Sign out
                </Link>
            </Dropdown>
        </div>
    );
}
