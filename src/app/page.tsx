import Image from "next/image";
import NextLink from "next/link";

// Components
import { Heading, Link, Text } from "@/components/ui";

export default function Home() {
  return (
    <main className="relative">
      <section className="relative flex flex-col max-w-7xl lg:flex-row lg:h-[45rem] lg:max-h-screen lg:mx-auto">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black from-[-1%] to-transparent to-[20%]" />
        <div className="relative flex flex-col basis-1/2 justify-end min-h-[40rem] pl-4 pb-8 items-center text-white md:pb-24 lg:items-start lg:min-h-0 2xl:pl-[9.25rem]">
          <Image
            src="/images/home/heroimage.webp"
            alt=""
            fill
            priority
            className="relative z-[-1] top-0 left-0 object-cover h-full"
          />
          <div className="flex flex-col lg:block max-w-[38.75rem]  xl:w-full xl:ml-auto">
            <Heading as="h2" level="h1" className="mb-3">
              Women's SS23
            </Heading>
            <Link
              intent="primaryAlt"
              href="/women"
              className="self-center lg:self-start"
              icon={false}
            >
              Shop Women
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col basis-1/2 justify-end min-h-[40rem]  pl-4 pb-8 items-center text-white md:pb-24 lg:items-start lg:min-h-0 xl:pl-24 2xl:pl-[9.25rem]">
          <Image
            src="/images/home/heroimage2.webp"
            alt=""
            fill
            priority
            className="relative z-[-1] top-0 left-0 object-cover w-fill h-fill"
          />
          <Heading as="h2" level="h1" className="mb-3">
            Men's SS23
          </Heading>
          <Link
            intent="primaryAlt"
            href="/men"
            className="self-center lg:self-start"
            icon={false}
          >
            Shop Men
          </Link>
        </div>
      </section>
      <section className="max-w-7xl py-8 mx-auto">
        <Heading>Highlighted For You</Heading>
        <div></div>
      </section>
      <section className="flex flex-col max-w-7xl mx-auto lg:flex-row text-white">
        <NextLink
          href="/men"
          className="group relative flex flex-col text-center justify-end basis-1/2 min-h-[25rem] overflow-hidden lg:text-left after:absolute after:content-[''] after:z-[0] after:top-0 after:left-0 after:w-full after:h-full after:opacity-[.85] after:bg-gradient-to-b after:from-transparent after:from-67% after:to-black"
        >
          <Image
            fill
            src="/images/home/shopmenlg.webp"
            alt=""
            className="group-hover:scale-110 group-focus-visible:scale-110 ease-in-out duration-200 \ relative z-[-1] top-0 left-0 object-cover"
          />
          <div className="relative z-[1] flex flex-col justify-end h-full pl-16 pb-8">
            <Text
              size="500"
              weight="medium"
              uppercase
              className="mb-[2px] leading-none"
            >
              Shop
            </Text>
            <Text
              size="700"
              weight="bold"
              uppercase
              className="leading-none tracking-[1px]"
            >
              Men's Apparel
            </Text>
          </div>
        </NextLink>
        <NextLink
          href="/women"
          className="group relative flex flex-col text-center justify-end basis-1/4 min-h-[25rem] overflow-hidden lg:text-left after:absolute after:content-[''] after:z-[0] after:top-0 after:left-0 after:w-full after:h-full after:opacity-[.85] after:bg-gradient-to-b after:from-transparent after:from-67% after:to-black"
        >
          <Image
            fill
            src="/images/home/shopwomenlg.webp"
            alt=""
            className="group-hover:scale-110 group-focus-visible:scale-110 ease-in-out duration-200 relative z-[-1] top-0 left-0 object-cover"
          />
          <div className="relative z-[1] flex flex-col justify-end h-full pl-9 pb-9">
            <Text
              size="500"
              weight="medium"
              uppercase
              className="mb-[2px] leading-none"
            >
              Shop
            </Text>
            <Text
              size="700"
              weight="bold"
              uppercase
              className="leading-none tracking-[1px]"
            >
              Women's Apparel
            </Text>
          </div>
        </NextLink>
        <NextLink
          href="/women"
          className="group relative flex flex-col text-center justify-end basis-1/4 min-h-[25rem] overflow-hidden lg:text-left after:absolute after:content-[''] after:z-[0] after:top-0 after:left-0 after:w-full after:h-full after:opacity-[.85] after:bg-gradient-to-b after:from-transparent after:from-67% after:to-black"
        >
          <Image
            fill
            src="/images/home/accessories.webp"
            alt=""
            className="group-hover:scale-110 group-focus-visible:scale-110 ease-in-out duration-200 relative z-[-1] top-0 left-0 object-cover"
          />
          <div className="relative z-[1] flex flex-col justify-end h-full pl-9 pb-9">
            <Text
              size="500"
              weight="medium"
              uppercase
              className="mb-[2px] leading-none"
            >
              Shop
            </Text>
            <Text
              size="700"
              weight="bold"
              uppercase
              className="leading-none tracking-[1px]"
            >
              Accessories
            </Text>
          </div>
        </NextLink>
      </section>
      <section className="flex flex-col items-center max-w-7xl min-h-[20rem] mx-auto lg:flex-row lg:items-start">
        <div className="py-4 pl-4 pr-4 h-full text-center lg:flex lg:justify-center lg:items-center lg:self-center lg:basis-1/2 lg:pl-16 lg:pr-0 lg:text-left lg:order-last">
          <div>
            <Heading className="mb-6" level="large">
              Metzinger X Soissons
            </Heading>
            <Text size="400" className="mb-9 max-w-[55ch]">
              A collaboration that pays homage to the an artistic legend, taking
              influences from his stunning neo-baroque architecture.
            </Text>
            <Link intent="primary" icon={false} href="/women">
              Shop Women
            </Link>
          </div>
        </div>
        <div className="relative lg:basis-1/2 lg:order-first">
          <Image
            fill
            src="/images/home/collab.webp"
            alt=""
            className="relative z-[-1] top-0 left-0 object-cover h-full min-h-[25rem] lg:min-h-[20rem]"
          />
        </div>
      </section>
    </main>
  );
}
