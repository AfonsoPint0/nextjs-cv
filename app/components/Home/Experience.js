import AppearFromRight from "../Animations/AppearFromRight";
import Appear from "../Animations/Appear";


export default function Experience(){
    return(
        <div className="py-10">
            <Appear duration={1000}>
                <div className="text-3xl flex justify-center pb-8">Experience</div>
                <ol className="relative border-s border-zinc-800 dark:border-zinc-500">
                    <AppearFromRight duration={1000} delay={350}>            
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-zinc-600 dark:bg-white"></div>
                            <time className="mb-1 text-base font-normal leading-none text-zinc-600 dark:text-zinc-400">Oct 2023 - present</time>
                            <div className="border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">
                                <div className="text-2xl">Capgemini</div>                        
                                <div className="pl-1">
                                    <div className="text-lg pb-1">Software Engineer / Analyst</div>
                                    <div className="text-base pb-2">Development of customized cloud applications primarily through the Microsoft Power Platform.</div>
                                </div>
                            </div>
                        </li>
                    </AppearFromRight>
                    <AppearFromRight duration={1000} delay={350}>                
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-zinc-600 dark:bg-white"></div>
                            <time className="mb-1 text-base font-normal leading-none text-zinc-600 dark:text-zinc-400">Jan 2022 - Oct 2023</time>
                            <div className="border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">
                                <div className="text-2xl">FEGIME</div>
                                <div className="pl-1">
                                    <div className="text-lg ">Full-Stack Developer</div>
                                    <div className="text-base pb-1">Planned, developed, deployed, and advertised a web application geared towards providing a suite of tools for daily use by partners within the group.</div>
                                </div>
                                <div className="pl-4">
                                    <div className="text-base"> - Languages: C# | JS | HTML | CSS | SQL</div>
                                    <div className="text-base"> - Frameworks: .NET</div>
                                    <div className="text-base"> - Arquitecture: MVC</div>
                                    <div className="text-base"> - Version control: Git</div>                        
                                </div>
                                <div className="w-full border-t border-dotted border-zinc-200 my-4 pb-1"></div>
                                <div className="pl-1">
                                    <div className="text-lg pb-1">Database administrator</div>
                                    <div className="text-base pb-2">Managed both SQL and SAP HANA databases, overseeing their administration, optimization, and integration for efficient data management and operations.</div>
                                </div>
                                <div className="pl-4 pb-1">
                                    <div className="text-base"> - Languages: SQL | SAP</div>                     
                                </div>                    
                            </div>
                        </li>           
                    </AppearFromRight>
                    <AppearFromRight duration={1000} delay={350}>                                        
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-zinc-600 dark:bg-white"></div>
                            <time className="mb-1 text-base font-normal leading-none text-zinc-600 dark:text-zinc-400">Oct 2021 - Dec 2021</time>
                            <div className="border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">                                 
                                <div className="text-2xl">Digital Xperience</div>
                                <div className="pl-1">
                                    <div className="text-lg ">Full-Stack Developer</div>
                                    <div className="text-base pb-1">Contributed as a Front-End Developer by crafting dynamic websites.</div>
                                </div>
                                <div className="pb-2">
                                    <div className="pl-4">
                                        <div className="text-base"> - Languages: HTML | CSS</div>                    
                                        <div className="text-base"> - Technologies: WordPress | Elementor</div>                    
                                    </div>
                                </div>                   
                            </div>    
                        </li>           
                    </AppearFromRight>
                    <AppearFromRight duration={1000} delay={350}>                
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-zinc-600 dark:bg-white"></div>
                            <time className="mb-1 text-base font-normal leading-none text-zinc-600 dark:text-zinc-400">May 2021 - Jul 2021</time>
                            <div className="border-2 hover:border-dotted p-2 dark:border-white border-zinc-700">                                
                                <div className="text-2xl">Web&Gamble</div>
                                <div className="pl-1">
                                    <div className="text-lg ">Full-Stack Developer</div>
                                    <div className="text-base pb-1">Planned, developed and deployed a billing application tailored for touch devices.</div>
                                </div>
                                <div className="pb-2">
                                    <div className="pl-4">
                                        <div className="text-base"> - Languages: PHP | HTML | CSS | SQL</div>                    
                                    </div>
                                </div>                   
                            </div>    
                        </li>        
                    </AppearFromRight>
                </ol>
            </Appear>
        </div>
    )
}