"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel2";
import Image from "next/image";

const logos = [
  { src: "https://vultisig.com/images/thorchain.svg", text: "THORChain" },
  { src: "https://vultisig.com/images/vultisig.svg", text: "Vultisig" },
  { src: "https://vultisig.com/images/wewe.svg", text: "WEWE" },
  { src: "https://vultisig.com/images/DeFi-suisse-treasury.svg", text: "DeFi Suisse" },
  { src: "https://vultisig.com/images/zkfinance.svg", text: "ZKFinance" },
  { src: "https://vultisig.com/images/ruji.svg", text: "RUJI" },
  { src: "https://vultisig.com/images/thorchain.svg", text: "THORChain" },
  { src: "https://vultisig.com/images/vultisig.svg", text: "Vultisig" },
  { src: "https://vultisig.com/images/wewe.svg", text: "WEWE" },
  { src: "https://vultisig.com/images/DeFi-suisse-treasury.svg", text: "DeFi Suisse" },
  { src: "https://vultisig.com/images/zkfinance.svg", text: "ZKFinance" },
  { src: "https://vultisig.com/images/ruji.svg", text: "RUJI" },
];

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <Carousel setApi={setApi} className="w-full px-5 lg:px-32 md:px-32">
            <CarouselContent>
              {logos.map((item, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex flex-col items-center justify-center bg-none lg:bg-white/10 md:bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center shrink-0 border-none lg:border md:border border-white/10 transition-all min-w-[120px] w-auto px-8">
                    <Image
                      src={item.src}
                      alt={item.text}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    <span className="text-sm mt-2 text-white lg:whitespace-nowrap md:whitespace-nowrap">{item.text}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
