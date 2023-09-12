"use client";

import { ProConfigProvider } from "@ant-design/pro-components";
import type { ThemeConfig } from "antd";
import { ConfigProvider, theme } from "antd";
import { Outfit } from "next/font/google";

import StyledComponentsRegistry from "lib/styles/AntdRegistry";

const outfit = Outfit({ subsets: ["latin"] });

const appTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: { fontFamily: outfit.style.fontFamily },
};

interface FormLayoutProps {
  children: React.ReactNode;
}

const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <StyledComponentsRegistry>
      <ProConfigProvider hashed={false}>
        <ConfigProvider theme={appTheme}>{children}</ConfigProvider>
      </ProConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default FormLayout;
