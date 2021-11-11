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
            <Box className={styles.boxDL}>
                <dl>
                    <dt className={styles.author}>{author}</dt>
                    <dt className={styles.title}>{title}</dt>
                    <dt className={styles.url}>{url}</dt>
                </dl>
            </Box>
        </Box>
    );
}
