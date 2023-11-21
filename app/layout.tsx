import '@/app/ui/global.css';
import { notoSansKr } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased : Tailwind에서 폰트 부드럽게 만드는 기능 */}
      <body className={`${notoSansKr.className} antialiased`}>{children}</body>
    </html>
  );
}
