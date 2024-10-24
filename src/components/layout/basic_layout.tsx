import { Box } from "@mui/material";

type BasicLayoutProps = {
  children: React.ReactNode;
};

export function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      {children}
    </Box>
  );
}
