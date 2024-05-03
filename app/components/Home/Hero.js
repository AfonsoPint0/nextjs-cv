import TypingText from "../TypingText";
export default function Hero(){
    return(
        <div className="p-2 pt-40 pb-48">
            <div className="inline-block align-bottom">
                <div className="text-3xl md:py-1 py-2"><TypingText text={['Frontend', 'Backend', 'Full-Stack']} delay={200}/> Developer</div>
                <div className="text-xl md:py-1 py-2">Currently working as a software engineer/analyst at Capgemini</div>        
            </div>
        </div>
    )
}