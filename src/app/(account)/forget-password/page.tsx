import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Copyright } from '@/features/account/components/copyright';

export default function ForgetPassword() {
    return (
        <>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

          </Avatar>
          <Typography component="h1" variant="h5">
            Forget Password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  color="primary"
                  autoFocus
                />
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
                Send Email
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
    )
}