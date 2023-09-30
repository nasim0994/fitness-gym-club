import "@/style/globals.css";

export const metadata = {
  title: "FITNESS GYM CLUB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
