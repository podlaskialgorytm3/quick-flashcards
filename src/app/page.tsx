import { Button } from '@mui/material';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <h1 className="text-[72px]">Quick Flashcards</h1>
      <Button variant="outlined" color="inherit" style={{marginTop: '20px',fontSize: '20px'}}>Get Started</Button>
    </div>
  );
}

export default Home;