import TextField from "@mui/material/TextField";

const CommentsField = () => {
    return (
        <TextField
            label="Comments"
            variant="outlined"
            multiline
            rows={4}
        />
    );
};

export default CommentsField;