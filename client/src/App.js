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
        },
        'body': {
          margin: 0,
          fontFamily: 'Roboto Mono, sans-serif',
          fontSize: '1rem',
          fontWeight: 400,
          lineHeight: 1.5,
        }
      }}
    />
    <RouterProvider router={router}/>
  </CssVarsProvider>
  );
}

export default App;
