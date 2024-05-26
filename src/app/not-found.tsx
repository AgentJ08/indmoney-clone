import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className=' flex flex-col items-center gap-8 h-96 justify-center bg-gray-200 '>
      <p className=' text-3xl font-bold '>Oops, Page Not Found</p>
      <p className=' font-semibold '>Sorry, this is a minimal prototype, and I have not implemented this route yet. <br /><br /> Please checkout other routes and features I have implemented, thank you :)</p>
      <p className="font-semibold"></p>
      <Link href="/" className=' text-blue-600 '>Return Home</Link>
    </div>
  )
}