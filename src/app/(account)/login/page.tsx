'use client'

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';
import { BackgroundImage } from '@/features/account/components/background-image';
import { Copyright } from '@/features/account/components/copyright';
import { signIn, useSession } from 'next-auth/react';

export default function SignInSide() {
  // const { data: session } = useSession();


  return (
    <>
    <CssBaseline />
    {/* {session && <h1>Jesteś zalogowany</h1>} */}
      <Grid container component="main" sx={{ height: '100vh' }}>
        <BackgroundImage />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 0, mb: 2 , width: '45%'}}
              >
                Sign In with Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 0, mb: 2 ,ml: 6, width: '45%'}}
              >
                Sign In with Github
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forget-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}