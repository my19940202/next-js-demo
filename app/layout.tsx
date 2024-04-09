import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "虚拟键盘测试页面",
    description: "虚拟键盘测试页面",
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
            </head>
            <body>{children}</body>
        </html>
    );
}
