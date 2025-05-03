import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SenseAI",
  description: "Created by YadavaHC",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* ✅ Updated Footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="mb-4">Created by YadavaHC</p>
                <div className="flex justify-center gap-6 text-2xl">
                  <a
                    href="https://www.linkedin.com/in/yadava-hc-907067287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/yadavahc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/yadava_h_c?igsh=czBwb2Nsb3pudHRw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

