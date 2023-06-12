"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Types
import { Category } from "@/constants/categories";

// Constants
import navCategories from "@/constants/categories";

// Hooks
import { useMediaQuery } from "@mantine/hooks";

// Components
import { ArrowLeft, Menu, Search, ShoppingBag, User, X } from "react-feather";
import { Button, Heading } from "@/components/ui";

type Props = {};

export default function Navbar({}: Props) {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<String[]>([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const router = useRouter();

  const isDesktop = useMediaQuery("(min-width: 1024px)", true, {
    getInitialValueInEffect: false,
  });

  function onLinkClick(e: React.MouseEvent) {
    e.preventDefault();

    const target = e.target as HTMLLinkElement;
    const hasItems = target.getAttribute("data-haschildren") === "true";
    const level = target.getAttribute("data-level");
    const category = target.textContent || "";

    level == "1" && setCurrentCategory(category);

    if (hasItems && !isDesktop) {
      history.length > 0
        ? setHistory([...history, category])
        : setHistory([category]);
    } else {
      setOpen(false);
      setHistory([]);
      router.push(target.href);
    }
  }

  function renderSubcategories(
    subcategory: Category,
    pathName = "",
    level = 1
  ) {
    if (level == 1) {
      return (
        <div
          className={`
        ${level == 1 ? "lg:border-b-[1px] lg:border-gray-200 " : "lg:static bg-transparent h-auto "
        }
        fixed top-12 left-0 w-full h-full bg-white text-black lg:hidden lg:z-50 lg:top-[5.625rem] lg:max-h-[18rem] lg:p-4 lg:hover:block lg:group-hover:block lg:focus-within:block lg:group-focus-within:block lg:border-b-[1px] lg:border-gray-200`}
        >
          <div className="lg:flex lg:max-w-6xl lg:h-full lg:mx-auto">
            <ul
              className={`flex flex-col divide-y lg:flex-wrap lg:flex-1 lg:gap-y-7 lg:h-full lg:mt-auto lg:divide-none`}
            >
              {render(subcategory.items as Category[], pathName, level + 1)}
            </ul>
            {level == 1 && subcategory.imageURL && isDesktop && (
              <Image
                src={subcategory.imageURL}
                width={420}
                height={236}
                className="object-cover"
                alt=""
              />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="fixed top-12 left-0 w-full h-full bg-white text-black lg:hidden lg:z-50 lg:top-[5.625rem] lg:max-h-[18rem] lg:hover:block lg:group-hover:block lg:group-focus-within:block lg:static bg-transparent h-auto">
          <ul className="flex flex-col divide-y lg:flex-wrap lg:h-full lg:mt-auto lg:mb-7 lg:max-w-6xl lg:mx-auto lg:divide-none">
            {render(subcategory.items as Category[], pathName, level + 1)}
          </ul>
        </div>
      );
    }
  }

  function render(categories: Category[], previousPath = "", level = 1) {
    return categories.map((category) => {
      const fullPath = previousPath + category.pathname;
      return (
        <>
          <li
            key={fullPath}
            className={`
          ${level == 1 ? `group font-normal px-4 py-3 hover:font-bold lg:relative lg:text-sm lg:pb-7 lg:after:content-[""] lg:after:transition-[width] lg:after:ease-in-out lg:after:duration-200 lg:after:absolute lg:after:left-0 lg:after:bottom-7 lg:after:w-0 lg:after:h-[1px] lg:after:bg-white lg:hover:after:w-full lg:focus-within:after:w-full lg:last:hidden lg:px-0 lg:py-0` : ""} 
          ${level == 1 && currentCategory == category.name ? "lg:font-bold lg:after:w-full" : "lg:font-medium"}
          ${level >= 2 ? "top-0 lg:block font-normal px-4 py-3 lg:px-0 lg:py-0": ""}
          `}
          >
            <Link
              href={fullPath}
              className={`
            block uppercase tracking-[1px] lg:py-1 
            ${level === 1 ? "lg:text-white ": ""}
            ${level === 2 ? "lg:font-bold ": ""}
            ${level > 2 ? "lg:normal-case lg:hover:text-gray-700" : ""}
            `}
              data-haschildren={"items" in category}
              data-level={level}
              onClick={onLinkClick}
            >
              {category.name}
            </Link>
            {"items" in category &&
              (history.includes(category.name) || isDesktop) &&
              renderSubcategories(category, fullPath, level)}
          </li>
        </>
      );
    });
  }

  return (
    <div className="fixed top-0 z-[10] w-full max-h-16 py-4 lg:max-h-[5.625rem] lg:h-full bg-black">
      <div className="flex justify-between lg:mb-4  xl:max-w-6xl xl:mx-auto">
        <div className="relative w-[15%]">
          <Button
            className="absolute -top-3 lg:hidden"
            icon
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </Button>
        </div>
        <div className="w-[70%]">
          <Link className="block h-full" href="/">
            <Image
              src="/images/logo.svg"
              alt=""
              width="196"
              height="20"
              className="h-5 mx-auto lg:py-auto"
              priority
            />
          </Link>
        </div>
        <div className="relative w-[15%]">
          <ul className="absolute -top-3 right-0 flex lg:-top-3 lg:right-auto">
            <li className="">
              <Button icon>
                <Search size={20} />
              </Button>
            </li>
            <li className="flex w-11 hidden lg:block">
              <Link
                className="flex justify-center w-11 h-11 items-center text-white"
                href="/account"
              >
                <User size={20} />
              </Link>
            </li>
            <li className="">
              <Button icon>
                <ShoppingBag size={20} />
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <nav
          className={`${
            open && !isDesktop ? "fixed top-0 left-0" : "hidden"
          } w-full h-full bg-white lg:block lg:bg-transparent `}
        >
          <div className="flex justify-center items-center max-h-12 h-full w-full border-b-[1px] border-gray-200 lg:hidden">
            {history.length > 0 && (
              <Button
                icon
                intent={null}
                className="absolute left-0 text-black"
                onClick={() => {
                  const newHistory = history.slice(0, history.length - 1);
                  setHistory(newHistory);
                }}
              >
                <ArrowLeft size={20} />
              </Button>
            )}
            <Heading level="h5">
              {history.length ? history[history.length - 1] : ""}
            </Heading>
            <Button
              icon
              intent={null}
              className="absolute right-0 text-black"
              onClick={() => {
                setOpen(false);
                setHistory([]);
              }}
            >
              <X size={20} />
            </Button>
          </div>
          <ul
            className={`flex flex-col lg:gap-4 divide-y lg:flex lg:flex-row lg:justify-center lg:divide-none`}
          >
            {render(navCategories)}
          </ul>
        </nav>
      </div>
    </div>
  );
}
