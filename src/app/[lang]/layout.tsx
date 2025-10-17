import '@/app/globals.css';
import ThemeProvider from '@/components/layouts/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>SMRT eSports</title>
        <meta
          name="description"
          content="SMRT eSports is Barrie's premier fighting game organization, hosting local tournaments, streams, and events for games like Street Fighter 6, Tekken 8, and Guilty Gear. Join the community and level up your game!"
        />
        <meta
          name="keywords"
          content="SMRT eSports, Barrie esports, fighting games, Ontario tournaments, Street Fighter 6, Tekken 8, Guilty Gear Strive, Granblue Fantasy Versus Rising, local esports events, Whiff City, gaming community, FGC Canada, competitive gaming, esports Barrie, Ontario esports, tournament hosting, livestreams, esports merch, fighting game players"
        />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Barrie" />
        <meta name="geo.position" content="44.3894;-79.6903" />
        <meta name="ICBM" content="44.3894, -79.6903" />
        <meta name="rating" content="General" />
      </head>
      <body>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
