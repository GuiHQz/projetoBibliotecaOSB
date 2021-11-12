import api from "services/api";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./Search.style";
import { List } from "features/search/components/List";
import { Text } from "features/search/components/Text";
import { Input } from "features/search/components/Input";
import { Button } from "features/search/components/Button";

export const Search: React.FC = () => {

    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    async function getData (){
        await api.get(text).then((response) => {
            setData(response.data.hits)
            if (response.data.hits.length === 0){
                setError("Nenhum registro encontrado");
            }
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
                {data.length ?       
                data.map((response: any, key: number) => (
                    <List 
                        author={response.author ? response.author : "Autor não informado"}
                        title={response.title ? response.title : "Título não informado"}
                        url={response.url ? response.url : "URL não informada"} 
                        key={key}
                    />)): <Text title={error}/>
                }
            </Box>
        </Box>
    );
}