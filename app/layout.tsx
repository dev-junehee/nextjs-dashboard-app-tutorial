import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* antialiased : Tailwind에서 폰트 부드럽게 만드는 기능 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
