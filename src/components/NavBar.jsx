
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter();
    const handleHome = () => {
       router.push("/")
    }
    const handleCreate = () => {
        router.push("/makanan/Create")
    }
    return (
        <nav className="p-4 bg-gray-800">
        <div className="container flex items-center justify-between mx-auto">
          <p className="text-2xl font-bold text-white cursor-pointer" onClick={() => router.push('/')}>Restoran Kami</p>
          <div className="flex space-x-4">
            <p className="text-gray-300 cursor-pointer hover:text-white" onClick={handleHome}>Home</p>
            <p className="text-gray-300 cursor-pointer hover:text-white" onClick={handleCreate}>Create Menu</p>
          </div>
        </div>
      </nav>
    )
}
                                