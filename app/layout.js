export const metadata = {
  title: 'Fraggle Rock - Dance Your Cares Away',
  description: 'Enter the magical world of Fraggle Rock',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
