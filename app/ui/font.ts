import { Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// next/font/google에서 Inter 폰트를 가져오고, subset을 설정한다.
// 최상의 성능과 유연성을 위해 변수 폰트를 사용하는 것이 좋다.
// 변수 폰트를 로드하는 경우 폰트의 weight를 지정할 필요가 없다.

// 폰트 weight와 style을 지정한 코드 예시

// const roboto = Roboto({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
// });
