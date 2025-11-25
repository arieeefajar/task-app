import ComponentCard from "@/Components/common/ComponentCard";
import PageBreadcrumb from "@/Components/common/PageBreadcrumb";
import {
    Table,
    TableBody,
    TableHeader,
    TableRow,
} from "@/Components/ui/table/Index";
import TableBodyCell from "@/Components/ui/table/TableBodyCell";
import TableContainer from "@/Components/ui/table/TableContainer";
import TableHeadCell from "@/Components/ui/table/TableHeadCell";
import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";
import React from "react";

const User = () => {
    const { props } = usePage();
    const users = props.users;
    return (
        <AppLayout>
            <PageBreadcrumb pageTitle={"Data Users"} />
            <div className="space-y-6">
                <ComponentCard title={"Table User"}>
                    <TableContainer>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeadCell>No</TableHeadCell>
                                    <TableHeadCell>Username</TableHeadCell>
                                    <TableHeadCell>Name</TableHeadCell>
                                    <TableHeadCell>Email</TableHeadCell>
                                    <TableHeadCell>Action</TableHeadCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user, index) => (
                                    <TableRow key={user.id}>
                                        <TableBodyCell>
                                            {index + 1}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {" "}
                                            {user.username}{" "}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {user.name}
                                        </TableBodyCell>
                                        <TableBodyCell>
                                            {user.email}
                                        </TableBodyCell>
                                        <TableBodyCell></TableBodyCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </ComponentCard>
            </div>
        </AppLayout>
    );
};

export default User;
