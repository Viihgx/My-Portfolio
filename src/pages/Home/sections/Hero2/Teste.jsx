// import './Hero.css';
import { Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/Avatar3.gif";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import StyledButton from "../../../../components/StyledButton/StyledButton";
// import Effect from '../../../../components/Effects/Effect';

const Teste = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImg = styled("img")(() => ({
        width: "80%",
        borderRadius: "50%",
        boxShadow: `0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.5)`, 
        animation: "glowing-border 2s linear infinite",
    }))

    return ( 
        <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={10}>
                    <Grid item xs={12} md={7}>
                        <Typography color="secondary.main" variant="h2" textAlign="center" className="title-big">Hello Word!</Typography>
                        <Typography  color="secondary.main" variant="h1" textAlign="center" className="title-big-2">I&#39;m a software developer </Typography>
                        {/* <Typography variant="h1" textAlign="center" className="title-medium">My name is Vitoria Samara</Typography> */}
                            <Grid container display="flex" justifyContent="center" spacing={3}>
                                <Grid item xs={12} md={3} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DescriptionOutlinedIcon /> Download CV
                                    </StyledButton>
                                </Grid>  
                                <Grid item xs={12} md={3} display="flex" justifyContent="center">
                                     <StyledButton>
                                        <MessageOutlinedIcon /> 
                                        <Typography> Contato </Typography>
                                    </StyledButton>
                                </Grid>  
                            </Grid>
                        </Grid>
                    <Grid item xs={12} md={5}>
                        {/* <Box position="relative">
                            <Box position="absolute" width={"300%"} top={-100} right={0}>
                                 <Effect /> 
                            </Box>
                        </Box> */}
                        <StyledImg src={Avatar} />
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>

       </>
     );
}
 
export default Teste;
