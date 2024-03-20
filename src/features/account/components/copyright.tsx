import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Copyright =(props: any)  => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Quick Flashcards
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }