import Footer from "@/components/Footer";
import HowItWorks from "@/components/Section2";
import { About } from "@/components/Section3";
import { Trusted } from "@/components/TrustedBy";
import { BackgroundPaths } from "@/components/ui/background-paths"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-myfont)] overflow-hidden bg-[#02122B]">
      <BackgroundPaths title="Redefining Crypto Wallet Security for the AI Agent Era" />
      <HowItWorks />
      <About />
      <Trusted />
      <Footer />
    </div>
  );
}
