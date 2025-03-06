import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import React, {SetStateAction, useState} from "react";
import axios from "axios";
import {API} from "@/api/api";


export default function Roster(
    {rows, deleteStaff}: { rows: { name: string; role: string; rate: string; hours: string }[], deleteStaff: (name: string) => void }
) {



    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const onDeleteStaff = (staffDetails: { name: string; role: string; rate: string; hours: string; }) => {
        deleteStaff(staffDetails.name);
        // axios.post(`${API.STAFF}/delete`, staffDetails)
        //     .then(response => console.log(response))
        //     .catch(e => console.error(e));
    }

    // @ts-ignore
    return (
        <Paper  sx={{ width: "100%", overflow: "hidden", marginTop: 2 }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Rate</TableCell>
                            <TableCell>Hours</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.role}</TableCell>
                                    <TableCell>{row.rate}</TableCell>
                                    <TableCell>{row.hours}</TableCell>

                                    <TableCell>
                                        {/*@ts-ignore*/}
                                        <Button color="error" onClick={() => onDeleteStaff(row)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[3, 5, 10]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};
