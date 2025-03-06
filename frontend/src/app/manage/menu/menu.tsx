import {SetStateAction, useState} from "react";
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

export default function MenuTable({rows, handleOnDelete}: { rows: { name: string; img: string | null; price: string; cost: string; quantity: string }[],
                                  handleOnDelete: (name: string) => void; }
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

    return (
        <Paper  sx={{ width: "100%", overflow: "hidden", marginTop: 2 }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Cost</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    {/* @ts-ignore */}
                                    <TableCell><img src={row.img}  alt="None"/></TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.cost}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell><Button color="error" onClick={() => handleOnDelete(row.name)}>Delete</Button></TableCell>
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
}