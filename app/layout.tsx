import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "마인드마인드",
  description: "(주)마인드마인드 웹페이지입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <div id="modal-root"></div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
