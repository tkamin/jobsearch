import "./globals.css";

export const metadata = {
  title: "Job Search",
  description: "Find your next opportunity in AI safety and effective altruism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
