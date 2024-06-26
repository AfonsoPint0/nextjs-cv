import Appear from "../Animations/Appear";

export default function Certificates(){
    return(
        <div className="py-10 pb-20">
            <Appear duration={"1000"} >
                <div className="text-3xl flex justify-center pb-8">Certificates</div>
                <div className="mb-4 border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">                                
                    <div className="flex justify-between">
                        <div className="text-2xl">AZ-900</div>
                        <div className="text-zinc-600 dark:text-zinc-400">2024</div>
                    </div>
                    <div className="pl-1">
                        <div className="">Microsoft Certified: Azure Fundamentals</div>
                        <a className="underline hover:animate-pulse" target="none" href="https://learn.microsoft.com/pt-pt/users/afonsopinto-2548/credentials/f25caa501aca9132">View certificate</a>
                    </div>               
                </div>
                <div className="mb-4 border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">                                
                    <div className="flex justify-between">
                        <div className="text-2xl">AI-900</div>
                        <div className="text-zinc-600 dark:text-zinc-400">2024</div>
                    </div>
                    <div className="pl-1">
                        <div className="">Microsoft Certified: Azure AI Fundamentals</div>
                        <a className="underline hover:animate-pulse" target="none" href="https://learn.microsoft.com/pt-pt/users/afonsopinto-2548/credentials/5a778d2d0b872114">View certificate</a>
                    </div>               
                </div>
                <div className="mb-4 border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">                                
                    <div className="flex justify-between">
                        <div className="text-2xl">PL-900</div>
                        <div className="text-zinc-600 dark:text-zinc-400">2024</div>
                    </div>
                    <div className="pl-1">
                        <div className="">Microsoft Certified: Power Platform Fundamentals</div>
                        <a className="underline hover:animate-pulse" target="none" href="https://learn.microsoft.com/en-us/users/afonsopinto-2548/credentials/61ccdc80991b64ad">View certificate</a>
                    </div>               
                </div>
                <div className="border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">                                
                    <div className="flex justify-between">
                        <div className="text-2xl">Foundational C#</div>
                        <div className="text-zinc-600 dark:text-zinc-400">2024</div>
                    </div>
                    <div className="pl-1">
                        <div className="">freeCodeCamp: Foundational C# with Microsoft</div>
                        <a className="underline hover:animate-pulse" target="none" href="https://freecodecamp.org/certification/fcc264ee571-1ddd-497d-ac0b-454a3a8165d5/foundational-c-sharp-with-microsoft">View certificate</a>
                    </div>               
                </div>  
            </Appear>
        </div>
    )
}
