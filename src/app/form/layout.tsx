"use client";

import { Outfit } from "@next/font/google";
import { ConfigProvider, theme } from "antd";

const outfit = Outfit({ subsets: ["latin"] });

interface FormLayoutProps {
  children: React.ReactNode;
}

const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: { fontFamily: outfit.style.fontFamily },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default FormLayout;
