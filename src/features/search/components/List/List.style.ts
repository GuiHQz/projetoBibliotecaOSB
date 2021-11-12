import { Hidden, makeStyles, rgbToHex } from "@material-ui/core";

export const useStyles = makeStyles ({
    boxContainer:{
        width: "100%",
        backgroundColor: "rgb(132,167,195)",
        margin: "1vh 0vh 1vh 1vh",
        borderRadius: "1vh",
        whiteSpace: "nowrap",
        overflow: "hidden"
    },
    
    DT:{
        display: "flex",
        justifyContent: "left",
        marginTop: "6px"
    }
});