"use client";

import { ProConfigProvider } from "@ant-design/pro-components";
import type { ThemeConfig } from "antd";
import { ConfigProvider, theme } from "antd";
import type React from "react";

import { fontSans } from "lib/styles/fonts";

const appTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: { fontFamily: fontSans.style.fontFamily },
};

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ProConfigProvider hashed={false}>
      <ConfigProvider theme={appTheme}>{children}</ConfigProvider>
    </ProConfigProvider>
  );
};

export default Providers;
