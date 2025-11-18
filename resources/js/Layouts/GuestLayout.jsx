import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
            <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
                {children}
                <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
                    <div className="relative flex items-center justify-center z-1">
                        <div className="flex felx-col items-center max-w-x5">
                            <Link href="/">
                                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    //         <div>
    //             <Link href="/">
    //                 <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
    //             </Link>
    //         </div>
    //         <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
    //             {children}
    //         </div>
    //     </div>
    // );
}
