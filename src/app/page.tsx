import { Button } from '@mui/material';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <Button 
          variant="text" 
          color="inherit" 
          style={{marginTop: '20px',fontSize: '20px',position: 'absolute', top: '2px', right: '100px'}}>
            <Link href='/login'>Log In</Link>
      </Button>
      <h1 className="text-[72px]">Quick Flashcards</h1>
      <Button variant="outlined" color="inherit" style={{marginTop: '20px',fontSize: '20px'}}><Link href='/register'>Get Started</Link></Button>
    </div>
  );
}

export default Home;