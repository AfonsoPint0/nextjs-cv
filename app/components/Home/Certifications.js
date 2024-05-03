import ScreenTransition from "../ScreenTransition";
export default function Certifications(){
    return(
        <div className="py-10">
            <ScreenTransition ScrollY={1900} delay={500}>
                <div className="text-3xl flex justify-center pb-2">Certifications</div>
                <div className="mb-4 border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">                                
                    <div className="flex justify-between">
                        <div className="text-2xl">AZ-900</div>
                        <div className="text-zinc-600 dark:text-zinc-400">2024</div>
                    </div>
                    <div className="pl-1">
                        <div className="">Microsoft Certified: Azure Fundamentals</div>
                        <a className="underline hover:animate-pulse" target="none" href="https://learn.microsoft.com/pt-pt/users/afonsopinto-2548/credentials/f25caa501aca9132">View certification</a>
                    </div>               
                </div>  
                <div className="border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">                                
                    <div className="flex justify-between">
                        <div className="text-2xl">Foundational C#</div>
                        <div className="text-zinc-600 dark:text-zinc-400">2024</div>
                    </div>
                    <div className="pl-1">
                        <div className="">Foundational C# with Microsoft</div>
                        <a className="underline hover:animate-pulse" target="none" href="https://freecodecamp.org/certification/fcc264ee571-1ddd-497d-ac0b-454a3a8165d5/foundational-c-sharp-with-microsoft">View certification</a>
                    </div>               
                </div>  
            </ScreenTransition>
        </div>
    )
}