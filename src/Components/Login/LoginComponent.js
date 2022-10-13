import {Button, Container, Grid, TextField} from "@mui/material";

function LoginComponent() {

    return (
        <Container maxWidth="sm">
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12}>

                    <TextField
                        fullWidth
                        id="outlined"
                        label="Email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="outlined"
                        label="Password"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" fullWidth size="large" center>
                        Log In
                    </Button>
                </Grid>

            </Grid>
        </Container>


    )
}

export default LoginComponent;