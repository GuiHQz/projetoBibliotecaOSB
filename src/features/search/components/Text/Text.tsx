import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./Text.style";

interface textProps {
    title: string;
}

export const Text : React.FC<textProps> = ({title}) => {

    const styles = useStyles();

    return (
        <Box>
            <label className={styles.labelText}>{title}</label>
        </Box>
    );
}