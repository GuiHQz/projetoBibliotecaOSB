import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./List.style";
import Book from "@material-ui/icons/Book";
import Person from "@material-ui/icons/Person";
import InsertLink from "@material-ui/icons/InsertLink";

interface PropsList {
    author: string;
    title: string;
    url: string;
}

export const List: React.FC<PropsList> = ({ author, title, url }) => {

    const styles = useStyles();

    return (
        <Box className={styles.boxContainer}>
            <Box>
                <dl>
                    <dt className={styles.DT}><Person /> {author}</dt>
                    <dt className={styles.DT}><Book /> {title}</dt>
                    <dt className={styles.DT}><InsertLink /> {url}</dt>
                </dl>
            </Box>
        </Box>
    );
}
