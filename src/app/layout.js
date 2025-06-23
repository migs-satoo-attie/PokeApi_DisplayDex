import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "fonts/Outfit-Regular.ttf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <title>PokeDex API</title>
        <link
          rel="shortcut icon"
          href="https://genfavicon.com/tmp/icon_10b498adaad1f9d3613b8397ad891c8d.ico"
        />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
