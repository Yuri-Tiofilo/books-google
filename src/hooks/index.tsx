import React from 'react';
import { BookProvider } from './books';

const AppProvider: React.FC = ({ children }) => (
  <BookProvider>{children}</BookProvider>
);
export default AppProvider;
