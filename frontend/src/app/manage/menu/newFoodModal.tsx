import {useState} from "react";
import {Button, MenuItem, Modal, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";

export default function NewFoodModal(){
    const [open, setOpen] = useState(false);
    const roles = ["HIGH", "LOW"];
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [cost, setCost] = useState<string>("");
    const [hyperlink, setHyperlink] = useState<string>("");


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        handleClose();
    }

    return (
        <div >
            <Button variant="contained" onClick={handleOpen}>
                Add New Food
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        color: "black",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "white",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        Add New Food to menu
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ mt: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="Cost"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setCost(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Price"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setPrice(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Image"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setHyperlink(e.target.value)}
                            sx={{ mt: 2 }}
                        />

                        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                            <Button variant="contained" color="error" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="contained" type="submit" color="primary">
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}