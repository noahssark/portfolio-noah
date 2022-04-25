import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
import Noahi from "../../assets/images/Noahi";
import "./NOAH.jpg";
import Noah from "../../assets/images/Noah";

const Logo = ({ setHomeIsActive, ...rest }) => {
    const classes = useStyles();
    return (
        <Link
            spy
            smooth
            duration={500}
            offset={-70}
            to="home"
            onSetActive={() => setHomeIsActive(true)}
            onSetInactive={() => setHomeIsActive(false)}
            className={classes.root}
        >
            <span>
                <img style={{width: '250px', marginTop:'3px', borderRadius:"0.1cm"}} src="NOAH.jpg" alt="Noah Oladele" />
                </span>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> */}
            {/* <Noah.svg {...rest} /> */}


        </Link>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: "pointer",
    },
}));

export default Logo;
