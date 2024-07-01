import { styled } from "@mui/material";
import PropTypes from 'prop-types';

const StyledButton = ({children}) => {

    const StyledButton = styled("button")(({theme}) => ({
        //Outro botao:
        // background: `linear-gradient(90deg, rgba(46,20,146,1) 8%, rgba(135,88,255,1) 39%, rgba(195,74,217,1) 88%)`,
        // border: "none",
        // borderRadius: "50px",
        // // border: `1px solid ${theme.palette.primary.contrastText}`,
        // width: "100%",
        // padding: "5px 15px",
        // color: theme.palette.primary.contrastText,
        // '&:hover': {
        //     backgroundColor: theme.palette.primary.light,

    background: theme.palette.primary.contrastText,
    color: theme.palette.primary.dark,
    border: "none",
    borderRadius: "50px",
    width: "100%",
    padding: "10px 20px",
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    animation: "glowing-border 20s linear infinite",

    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    },

    '&:before': {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: "2px solid transparent",
        borderRadius: theme.shape.borderRadius,
        boxShadow: `0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.5)`, 
        animation: "glowing-border 20s linear infinite",
    },
}));

    return ( 
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
     );
}

StyledButton.propTypes = {
    children: PropTypes.node.isRequired
};
 
export default StyledButton;