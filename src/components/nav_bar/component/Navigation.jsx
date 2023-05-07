'use client';
import Link from "next/link"
import { usePathname } from 'next/navigation';
export default function Navigation() {
  
 const currentPage = usePathname()


  return (
    <nav className={`flex flex-row lg:gap-20   gap-3 md:gap-6 text-light `}>
    <Link href="/" className=  {` lg:hover:scale-110  xl:hover:scale-110 ${currentPage==="/"&&`border-b-2`}`} > Home</Link>
    <Link href="/about" className=  {` lg:hover:scale-110  xl:hover:scale-110 ${currentPage==="/about"&&`border-b-2`}`} > About</Link>
    <Link href="/projects" className=  {` lg:hover:scale-110  xl:hover:scale-110 ${currentPage==="/projects"&&`border-b-2`}`}  > Projects</Link>
 </nav>
  )
}
