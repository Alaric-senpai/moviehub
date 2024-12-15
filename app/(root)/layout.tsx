import { Navbar } from "@/components/navbar";

export default function BaseLayout({children}: {children:React.ReactNode}){
    return(
        <main className="overflow-x-hidden">
        <Navbar />
        {children}
        </main>
    )
}