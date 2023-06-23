import React from "react";
import NextLink from "next/link";
import { Facebook, GitHub, Instagram, MapPin, Twitter } from "react-feather";

// Components
import { Heading, Link, Text } from "@/components/ui";
import FooterInput from "../Navbar/FooterInput";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="pt-0 border-t border-gray-200 font-sm">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(7.25rem,_20rem))] gap-6 max-w-7xl mx-auto px-6 py-4 md:py-8 lg:grid-cols-[repeat(4,_1fr)] lg:gap-4 lg:justify-between lg:px-16 ">
        <section>
          <Heading level="small" as="h3" className="mb-2">
            Subscribe to our Newsletter
          </Heading>
          <Text size="200" className="max-w-[40ch] mb-4">
            Enter your email to sign up for our newsletter concerning new
            Metzinger events and collections.
          </Text>
          <FooterInput id="email" label="Email Address" />
        </section>
        <section>
          <Heading level="small" as="h3" className="mb-2">
            Customer Service
          </Heading>
          <ul className="text-sm">
            <li className="mt-2 leading-none">
              <NextLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/justinpv98"
              >
                My Account
              </NextLink>
            </li>
            <li className="mt-3 leading-none">
              <NextLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/justinpv98"
              >
                FAQ
              </NextLink>
            </li>
            <li className="mt-3 leading-none">
              <NextLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/justinpv98"
              >
                Returns
              </NextLink>
            </li>
          </ul>
        </section>
        <section>
          <Heading level="small" as="h3" className="mb-2">
            About Us
          </Heading>
          <ul className="text-sm">
            <li className="mt-2 leading-none">
              <NextLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/justinpv98"
              >
                Press Lounge
              </NextLink>
            </li>
            <li className="mt-3 leading-none">
              <NextLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/justinpv98"
              >
                Terms and Conditions
              </NextLink>
            </li>
            <li className="mt-3 leading-none">
              <NextLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/justinpv98"
              >
                Privacy
              </NextLink>
            </li>
            <li className="mt-3 leading-none">
              <NextLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/justinpv98"
              >
                Accessibility
              </NextLink>
            </li>
            <li className="mt-3 leading-none">
              <NextLink
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.github.com/justinpv98"
              >
                Brand Protection
              </NextLink>
            </li>
          </ul>
        </section>
        <section>
          <div className="mb-4">
            <Heading level="small" as="h3" className="">
              Find a Store
            </Heading>
            <ul>
              <li className="mt-2 leading-none">
                <Link
                  rel="noopener noreferrer"
                  icon
                  intent="primaryAlt"
                  className="text-black h-auto w-auto mr-2"
                  target="_blank"
                  href="https://www.github.com/justinpv98"
                >
                  <MapPin size={14} />
                </Link>
                Store Locator
              </li>
            </ul>
          </div>
          <div>
            <Heading level="small" as="h3" className="">
              Follow Us On
            </Heading>
            <ul className="flex gap-2">
              <li className="mt-3 leading-none">
                <Link
                  rel="noopener noreferrer"
                  rounded
                  target="_blank"
                  href="https://www.github.com/justinpv98"
                >
                  <GitHub size={20} />
                </Link>
              </li>
              <li className="mt-3 leading-none">
                <Link
                  rel="noopener noreferrer"
                  rounded
                  target="_blank"
                  href="https://www.github.com/justinpv98"
                >
                  <Facebook size={20} />
                </Link>
              </li>
              <li className="mt-3 leading-none">
                <Link
                  rel="noopener noreferrer"
                  rounded
                  target="_blank"
                  href="https://www.github.com/justinpv98"
                >
                  <Twitter size={20} />
                </Link>
              </li>
              <li className="mt-3 leading-none">
                <Link
                  rel="noopener noreferrer"
                  rounded
                  target="_blank"
                  href="https://www.github.com/justinpv98"
                >
                  <Instagram size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section className=" mt-4 py-2 border-t border-gray-200">
        <div className="px-6 lg:px-16 lg:max-w-7xl lg:mx-auto xl:px-auto">
          <small className="text-xs">
            &copy; 2022 - 2023 Metzinger. &nbsp;
          </small> <address className="text-xs">
            <NextLink
              className="underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.githubcom/justinpv98"
            >
              Made by Justin V.
            </NextLink>
          </address>
        </div>
      </section>
    </footer>
  );
}
