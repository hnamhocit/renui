import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <div className="min-h-screen">{children}</div>

      <Footer />
    </>
  );
};

export default DefaultLayout;
