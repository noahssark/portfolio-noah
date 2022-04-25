import React from "react";
import { Container, Typography, makeStyles, Divider, useTheme, Box, useMediaQuery } from "@material-ui/core";
import Social from "../Social";
import { Icon } from "../../data";


const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Container>
            <Divider style={{ backgroundColor: theme.palette.primary.main }} />
            <Box className={classes.footer}>
                {isMobile && <Social mobile />}
                <Typography variant="body2" color="initial">
                    ©  noahssARK,2021
                </Typography>
            </Box>
            <Social/>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
    },
}));

export default Footer;