import Navbar from "./Navbar";
import Footer from "./Footer";

// Shared wrapper for internal pages. overflow-x-clip (not hidden) keeps position: sticky working.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
