import AppLayout from "@/Layouts/AppLayout";
import React from "react";

const AdminDashboard = () => {
    return (
        <AppLayout>
            <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/3 xl:px-10 xl:py-12">
                <div className="mx-auto w-full max-w-[630px] text-center">
                    <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                        Dashboard Admin
                    </h3>
                </div>
            </div>
        </AppLayout>
    );
};

export default AdminDashboard;
