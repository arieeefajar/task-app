import React, { useState } from "react";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import { Link } from "@inertiajs/react";
import { LuEyeClosed, LuEye } from "react-icons/lu";
import Button from "../button/Button";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    return (
        <div className="flex flex-col flex-1">
            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                <div>
                    <div className="mb-5 sm:mb-8">
                        <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                            Sign Up
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enter your name, email and password to sign up!
                        </p>
                    </div>
                    <div>
                        <form>
                            <div className="space-y-6">
                                <div>
                                    <Label>
                                        Name{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        placeholder={"Enter your name"}
                                    ></Input>
                                </div>
                                <div>
                                    <Label>
                                        Email{" "}
                                        <span className="text-red-500">*</span>{" "}
                                    </Label>
                                    <Input placeholder="info@gmail" />
                                </div>
                                <div>
                                    <Label>
                                        Password{" "}
                                        <span className="text-red-500">*</span>{" "}
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Enter your password"
                                        />
                                        <span
                                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <LuEye className="text-gray-500 dark:text-gray-400 size-5" />
                                            ) : (
                                                <LuEyeClosed className="text-gray-500 dark:text-gray-400 size-5" />
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <Label>
                                        Confirm Password{" "}
                                        <span className="text-red-500"></span>
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Confirm your password"
                                        />
                                        <span
                                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                                            onClick={() =>
                                                setshowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                        >
                                            {showConfirmPassword ? (
                                                <LuEye className="text-gray-500 dark:text-gray-400 size-5" />
                                            ) : (
                                                <LuEyeClosed className="text-gray-500 dark:text-gray-400 size-5" />
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <Button className="w-full" size="sm">
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </form>

                        <div className="mt-5">
                            <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                                Already have an account? {""}
                                <Link
                                    href="/login"
                                    className="text-blue-600 hover:text-blue-700 dark:text-blue-500"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
