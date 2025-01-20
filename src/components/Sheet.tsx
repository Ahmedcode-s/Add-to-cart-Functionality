"use client"

import { FiMenu } from "react-icons/fi";
// import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";


const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            {/* <Button variant={"secondary"}> */}
              <FiMenu />
            {/* </Button> */}
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader >
              <SheetTitle className="text-center">
                Shop.co
              </SheetTitle>

            </SheetHeader>

            <ul>

              <li className="grid grid-cols-1 gap-y-4">
                <Link className="ml-3" href={""}>Home</Link>
                <Link className="ml-3" href={"/products"}>Products</Link>
                <Link className="ml-3" href={"/DressStyles"}>Browse Styles</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
