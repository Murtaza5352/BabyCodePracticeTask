import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import MobileHeader from "../../Component/layout/Mobileheader";
import MobileFooter from "../../Component/layout/MobileFooter";
import MainLayout from "../../Component/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <div className="disc">Get 50% Discount on BabyCode membership</div>
        <div className={"MobileHeader"}>
          <MobileHeader />
        </div>
        <MainLayout children={children}></MainLayout>
        <div className={"mobileFooter"}>
          <MobileFooter />
        </div>
      </body>
    </html>
  );
}
