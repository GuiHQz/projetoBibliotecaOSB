import React from "react";
import { useStyles } from "./Input.style";

interface PropsInput{
    setText: React.Dispatch<React.SetStateAction<string>>
}

export const Input : React.FC<PropsInput> = ({setText}) => {

    const styles = useStyles();

    return (
            <input 
                id="inputId" 
                className={styles.input} 
                onChange={(e: React.FormEvent<HTMLInputElement>) => setText(e.currentTarget.value)} 
                type="text" 
                placeholder="Busque seu autor ou livro" 
            />
    );
}