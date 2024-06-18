"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast"

export default function Home() {

  const router = useRouter();
  const { toast } = useToast()

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  })

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user).
      then(() => {toast({description: "Sign up successful", variant:'success'})} );
      router.push("/login");

    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast({description: "Sign-up unsuccessful", variant:'destructive'})
    }
  }

  return (
    <div className=" flex flex-row gap-8 ">
      <Image src={'/login/b2.webp'} alt="banner" width={600} height={500} />
      <div className=" flex flex-col flex-1 justify-center items-start ml-64 gap-4 -mt-32 ">
        <Link href={'/'} className=" text-4xl font-extrabold "><button>←</button></Link>
        <p className=" font-bold text-2xl ">Welcome to INDmoney</p>
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Track your net-worth in one click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="John Doe" value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="abc@example.com" value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" placeholder="********" value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-around">
            <Button onClick={onSignup}>Sign Up</Button>
          </CardFooter>
        </Card>
        <div className=" font-gray-500 text-sm ">By clicking signup, you agree to our <Link href={'/terms-of-services'} className=" text-blue-600 ">Terms & Conditions.</Link></div>
      </div>
    </div>
  );
}
