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
import DashboardSidebar from "./dashboard/dashboardsidebar";
import { user } from '../../middleware'

export default function NavigationBar() {

  return (
    <>
      {!user && (
        <div className=" flex fixed bg-white w-full items-center z-50 ">
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
            <NavigationMenuList className=" ml-24 ">
              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Invest</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Link href="/stocks">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        INDstocks
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/mutual-funds">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Mututal Funds
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
              <NavigationMenuItem>
                <Link href="/learn" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Learn
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/features" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Features
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Disclosure</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Link href="/comlaint-status">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Complaint Status
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/sebi-invester-charter">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        SEBI Investor Charter
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </NavigationMenuList>
            <button type="button" value="help centre" className=" ml-8 bg-[#F5F5F8] rounded-full p-2 ">
              <Link href="/customer-service">
                <Image
                  src={'/cs.png'}
                  alt="Customer Servive Button"
                  width={20}
                  height={20}
                />
              </Link>
            </button>
            <button type="button" className=" ml-4 bg-[#F5F5F8] rounded-2xl px-3 py-2 ">
              <Link href="/login">Log In
              </Link>
            </button>
            <button type="button" className=" ml-4 rounded-lg px-3 py-2 bg-lime-500 ">
              <Link href="/signup">Sign Up
              </Link>
            </button>
          </NavigationMenu>
        </div>
      )
      }
      {user && (
        <div className=" flex fixed bg-white w-full items-center z-50 ">
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
            <button type="button" className=" bg-[#F5F5F8] rounded-2xl px-4 py-2 ml-24 border border-cyan-600 text-blue-600 ">
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
            <button type="button" className=" ml-4 bg-[#F5F5F8] rounded-2xl px-4 py-2 ">
              <Link href="/investments/fixed-deposits">Fixed Deposits
              </Link>
            </button>
            <button type="button" className=" ml-4 bg-[#F5F5F8] rounded-2xl px-4 py-2 ">
              <Link href="/investments/us-stocks">US Stocks
              </Link>
            </button>
            <button type="button" value="help centre" className=" ml-8 rounded-full p-2 ">
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
      )}
    </>
  )
}