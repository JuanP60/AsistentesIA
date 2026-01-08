export function Footer (){

    const year = new Date();

    return (
        <div className="flex flex-col items-center md:flex-row justify-center gap-2 md:gap-10 py-8 md:py-16 text-gray-500">
            <span>{`© ${year.getFullYear()} Gestión Asistentes IA`}</span>
            <div className="flex">
                <span>Diseñado por <a href="https://github.com/JuanP60">JuanP60</a></span>
            </div>
        </div>
    );
}