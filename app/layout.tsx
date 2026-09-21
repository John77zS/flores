import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Para ti 🌻',
  description: 'Un pequeño detalle para alguien especial.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
