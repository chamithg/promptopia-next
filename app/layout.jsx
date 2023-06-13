import "../styles/globals.css";

import { Children } from "react";

export const metadata = {
  title: "Promptopia",
  description: "discover and share ai prompts",
};
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
