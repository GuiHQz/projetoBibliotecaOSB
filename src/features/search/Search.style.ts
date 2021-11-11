import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
    caixa: {
        margin: 0,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    label:{
        fontWeight: 500
    },

    input: {
        position: "relative",
        top: "12%",
        left: "15%",
        transform: "translate(-25%, -25%)",
        borderRadius: "3px",
        borderStyle: "1",
        borderColor: "black"
    },

    botaoFormato: {
        position: "relative",
        marginTop: "15px",
        marginLeft: "15px",
        paddingRight: "2.5px",
        paddingLeft: "2.5px",
        borderRadius: "50%",
        backgroundColor: "rgb(17, 148, 224)",
        border: "none"
    },

    lupa: {
        color: "#FFF"
    }
});