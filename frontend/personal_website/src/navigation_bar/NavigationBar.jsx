import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();

  const openPortfolioPage = () => navigate('/portfolio');
  const openBlogPage = () => navigate('/blog');

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexGrow: 1 }}>
            <Button
              key='Portfolio'
              onClick={openPortfolioPage}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Portfolio
            </Button>
            <Button
              key='Blog'
              onClick={openBlogPage}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Blog
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
