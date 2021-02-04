import React from 'react';
import { ToastProvider } from './toast';
import { BookProvider } from './books';

const AppProvider: React.FC = ({ children }) => (
  <BookProvider>
    <ToastProvider>{children}</ToastProvider>
  </BookProvider>
);
export default AppProvider;
