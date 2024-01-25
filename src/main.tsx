import App from './App.tsx'
import './index.css'
import "./styles/animation/animation.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import OtpVerifyModal from './components/Modal/OtpVerifyModal';
import VerifyUserAndResetPassword from './components/Modal/VerifyUserResetPassword';
import PasswordLessLoginModal from './components/Modal/PasswordLessLoginModal';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const queryClient = new QueryClient()

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <>
    <h2>Something went wrong</h2>
    <pre>{error?.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={`388243107388-njbpedb0veamonsd5etbpi7gcre92sml.apps.googleusercontent.com`}>
          
          <OtpVerifyModal />
          <VerifyUserAndResetPassword />
          <PasswordLessLoginModal />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <App />
          </ErrorBoundary>
          <Toaster />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </Provider>

  </React.StrictMode>
)
