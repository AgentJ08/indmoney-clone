'use client';

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "../../components/ui/navigation-menu"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import DashboardSidebar from "./dashboardsidebar";

export default function NavigationBarAfterLogin() {
  return (
    <div className=" flex fixed bg-white w-full items-center ">
      <NavigationMenu>
        <Link href="/">
          <Image
            src={'/logo.png'}
            alt="INDMoney Logo"
            width={85}
            height={85}
            className=" ml-36 "
          />
        </Link>
        <div className=" relative ">
          <Image
            src={'/search.png'}
            alt="INDMoney Logo"
            width={20}
            height={20}
            className=" ml-4 my-2.5 absolute "
          />
          <Input type="text" placeholder="Search" className=" rounded-3xl pl-8 ml-2 " />
        </div>
        <button type="button" className=" bg-[#F5F5F8] rounded-2xl px-4 py-2 ml-36 border border-cyan-600 text-blue-600 ">
          <Link href="/dashboard">Dashboard
          </Link>
        </button>
        <button type="button" className=" ml-4 bg-[#F5F5F8] rounded-2xl px-4 py-2 ">
          <Link href="/investments/stocks">INDstocks
          </Link>
        </button>
        <button type="button" className=" ml-4 bg-[#F5F5F8] rounded-2xl px-4 py-2 ">
          <Link href="/investments/mutual-funds">Mutual Funds
          </Link>
        </button>
        <button type="button" value="help centre" className=" ml-32 rounded-full p-2 ">
          <Link href="/watchlists">
            <Image
              src={'/watchlist.png'}
              alt="Customer Servive Button"
              width={20}
              height={20}
            />
          </Link>
        </button>
        <button type="button" value="help centre" className=" ml-4 rounded-full p-2 ">
          <Link href="/advisory-cards">
            <Image
              src={'/notification.png'}
              alt="Customer Servive Button"
              width={20}
              height={20}
            />
          </Link>
        </button>
        <button type="button" value="help centre" className=" ml-4 bg-[#E8F4FD] rounded-full p-2 text-gray-600 hover:text-blue-400 ">
          <Link href="/profile/profile-details">
            AM
          </Link>
        </button>
        <DashboardSidebar />
      </NavigationMenu>
    </div>
  )
}