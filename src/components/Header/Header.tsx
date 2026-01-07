import { Wrench } from "lucide-react";
import { CircleUserRound } from "lucide-react";

export function Header () {
    return (
        <nav className="flex justify-between pt-8 md:pt-12 px-6 md:px-28">
            <a href="" className="flex items-center gap-2 md:gap-3">
                <Wrench />
                <span className="text-xl md:text-2xl">Autom IA</span>
            </a>

            <ul className="flex items-center gap-2 md:gap-9 hover:cursor-pointer">
                <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black
                after:transition-all after:duration-300 hover:after:w-full">
                    Soporte
                </li>
                <li><CircleUserRound size={30}/></li>
            </ul>
        </nav>
    );  
}   



