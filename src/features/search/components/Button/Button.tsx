import React from "react";
import { useStyles } from "./Button.style";
import SearchIcon from "@material-ui/icons/Search";

interface ButtonProps {
    onclick: () => void;
}

export const Button : React.FC<ButtonProps> = ({onclick}) => {

    const styles = useStyles();

    return (
            <button onClick={onclick} className={styles.buttonFormat}><SearchIcon className={styles.lupa} /></button>
    );
}