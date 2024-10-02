import { RouterProvider } from 'react-router-dom';
import { CssVarsProvider, CssBaseline, GlobalStyles } from '@mui/joy';
import router from 'routes';

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange>
    <CssBaseline />
    <GlobalStyles
      styles={{
        ':root': {
          '--Form-maxWidth': '800px',
          '--Transition-duration': '0.4s', // set to `none` to disable transitions
          '--joy-fontFamily-body': 'Roboto Mono, sans-serif', // change joy default font
        },
        
      }}
    />
    <RouterProvider router={router}/>
  </CssVarsProvider>
  );
}

export default App;
