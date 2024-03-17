import React from "react";
import Button from "@mui/material/Button";
import PrimaryTypography from "../text/PrimaryTypography";
import { ButtonProps } from "@mui/material/Button";
import styles from "./style/primaryButton.module.css";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

interface PrimaryButtonProps extends ButtonProps {
    onClick?: () => void;
    text: string;
    loading?: boolean;
}

const PrimaryButton = ({
    onClick,
    disabled,
    text,
    variant,
    fullWidth,
    type,
    loading,
}: PrimaryButtonProps) => {
    return (
        <Box sx={{ m: 1, position: "relative", width: "100%" }}>
            <Button
                variant={variant}
                onClick={onClick}
                disabled={disabled}
                type={type}
                classes={{
                    root: styles.root,
                    contained: styles.contained,
                    outlined: styles.outlined,
                }}
                sx={{
                    textTransform: "none",
                    "&.MuiButton-outlined:hover": {
                        backgroundColor: "#baedd4",
                        borderColor: "#51bf88",
                    },
                    "&.MuiButton-contained:hover": { backgroundColor: "#13683e" },
                }}
                fullWidth={fullWidth}
            >
                <PrimaryTypography variant="button" component="div">
                    {text}
                </PrimaryTypography>
            </Button>
            {loading && (
                <CircularProgress
                    size={24}
                    sx={{
                        color: "#51bf88",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginTop: "-12px",
                        marginLeft: "-12px",
                    }}
                />
            )}
        </Box>
    );
};

export default PrimaryButton;