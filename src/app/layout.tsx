import type { ReactNode } from "react";

export const metadata = { title: "Hands-on" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: 24, maxWidth: 720 }}>
        {children}
      </body>
    </html>
  );
}
