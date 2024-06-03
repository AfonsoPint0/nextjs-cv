
import AppearOnScroll from "../Animations/AppearOnScroll";

export default function Intro(){    
    return(
        <div className="py-10">
            <AppearOnScroll duration={"1000"} delay={"200"}>
                <div className="text-3xl flex justify-center pb-8">Short introduction</div>
                <div className="text-3xl flex justify-center pb-2">
                    <img src="profilepic.JPG" className="rounded-lg  h-40 object-center" alt="Description" />             
                </div>
                <div className="p-2">
                Currently living in Portugal, started coding at 16 and haven't stopped since. I've always had a keen interest in understanding how things work, so when the time to choose my career path came, I had two options in mind: mechanics or software development.
                </div>
                <div className="p-2">
                Here I am, a couple of years later, and I can confidently say that I made the right choice.
                </div>
                <div className="p-2">
                Since I became a professional in 2021, I've had the opportunity to work on various challenging projects, each presenting its own unique set of obstacles. Throughout, I've remained committed to delivering my best while continuously enhancing my skills.
                </div>
                <div className="p-3">
                    <div className="pb-1 flex justify-center">
                        My main stack:
                    </div>
                    <div className="pl-4 flex justify-center">
                        <div className="text-base"> C# | .NET | JS | SQL | CSS</div>                    
                    </div>  
                </div>        
            </AppearOnScroll>
        </div>
    )
}