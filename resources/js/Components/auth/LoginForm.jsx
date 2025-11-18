import { LuEyeClosed, LuEye } from "react-icons/lu";
import React, { useState } from "react";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import { Link } from "@inertiajs/react";
import Button from "../button/Button";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex flex-col flex-1">
            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                <div>
                    <div className="mb-5 sm:mb-8">
                        <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                            Sign In
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enter your email and password to sign in!
                        </p>
                    </div>
                    <div>
                        <form>
                            <div className="space-y-6">
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
                                <div className="flex items-center justify-end">
                                    <Link
                                        href="/"
                                        className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <div>
                                    <Button className="w-full" size="sm">
                                        Sign In
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
