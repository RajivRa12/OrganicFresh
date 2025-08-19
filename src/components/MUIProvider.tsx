'use client';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { theme } from '@/lib/mui-theme';
import { useEffect, useState } from 'react';

interface MUIProviderProps {
  children: React.ReactNode;
}

export function MUIProvider({ children }: MUIProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render MUI components on the client side
  if (!mounted) {
    return <div suppressHydrationWarning>{children}</div>;
  }

  return (
    <div suppressHydrationWarning>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}
