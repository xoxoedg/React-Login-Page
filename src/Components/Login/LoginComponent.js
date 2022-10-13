import {Avatar, Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField} from "@mui/material";
import {useState} from "react";
import LockIcon from '@mui/icons-material/Lock';

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameChangeHandler(event) {
        setUsername(event.target.value)
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value)
    }

    return (
        <Container sx={{marginTop: "10%", height: "30%"}} maxWidth="sm">
            <Paper elevation={3}>
                <form>
                    <Grid container justifyContent="center" spacing={2} padding={6}>
                        <Grid item>
                            <Avatar sx={{marginBottom: "50%"}}>
                                <LockIcon/>
                            </Avatar>
                        </Grid>
                        <Grid item xs={12}>

                            <TextField
                                onChange={usernameChangeHandler}
                                fullWidth
                                id="outlined"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={passwordChangeHandler}
                                fullWidth
                                id="outlined"
                                label="Password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                    />
                                }
                                label="Remember me"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" fullWidth size="large" center>
                                Log In
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>


    )
}

export default LoginComponent;