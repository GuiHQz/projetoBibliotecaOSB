import { Box } from "@material-ui/core";
import { useStyles } from "./Search.style";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import Api from "services/api";

export const Search: React.FC = () => {

    const pegarValue = () => {
        const user = document.getElementById("inputId") as HTMLInputElement
        Api.get(user.value).then()
        const print = user.value
        console.log(print)
    }

    const styles = useStyles();

    const [user, setUser] = useState();

    return (
        <Box className={styles.caixa}>
            <label className={styles.label}>Biblioteca OSB</label>
            <Box>
                <input id="inputId" className={styles.input} type="text" placeholder="Busque seu autor ou livro" />
                <button onClick={pegarValue} className={styles.botaoFormato}><SearchIcon className={styles.lupa} /></button>
            </Box>
        </Box>
    );
}