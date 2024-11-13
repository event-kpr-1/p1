import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { QueryClient , QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient({
//   defaultOptions : {
//     queries : {
//       refetchOnWindowFocus : false
//     }
//   }
// });
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}

        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
          <App />
        </BrowserRouter>
      {/* </QueryClientProvider> */}

  </React.StrictMode>
);



