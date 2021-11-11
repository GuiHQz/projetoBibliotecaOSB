import api from "services/api";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./Search.style";
import { List } from "features/search/components/List";
import { Text } from "features/search/components/Text";
import { Input } from "features/search/components/Input";
import { Button } from "features/search/components/Button";



export const Search: React.FC = () => {

    const [data, setData] = useState([])
    const [text, setText] = useState("")

    async function getData (){
        await api.get(text).then((response) => {
            setData(response.data.hits)
        }).catch((err)=>{
            console.log("Não foi possível fazer a requisição pelo erro" + err)
        })
    }

    const styles = useStyles();

    return (
        <Box className={styles.boxContainer}>
            <label className={styles.label}>Biblioteca OSB</label>
            <Box>
                <Button onclick={getData} />
                <Input setText={setText}/>
            </Box>

            <Box className={styles.midContainer}>
                
            </Box>
        </Box>
    );
}