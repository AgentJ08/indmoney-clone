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

export default function Home() {
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
                  <Input type="text" id="name" placeholder="John Doe" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="abc@example.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" placeholder="********" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="rpassword">Re-enter Password</Label>
                  <Input type="password" id="rpassword" placeholder="********" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-around">
            <Button type="submit" >Sign Up</Button>
          </CardFooter>
        </Card>
        <div className=" font-gray-500 text-sm ">By clicking signup, you agree to our <Link href={'/terms-of-services'} className=" text-blue-600 ">Terms & Conditions.</Link></div>
      </div>
    </div>
  );
}
