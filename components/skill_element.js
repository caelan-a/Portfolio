import { SkillBars } from 'react-skills';
import useInView from "react-cool-inview";



export default function SkillElement({ title, icon, level, percentage, color }) {

    const { ref, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: false,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        rootMargin: "-100px 0%",
    });


    return <div class="transition-all duration-1000 ease-in-out rounded-lg shadow-lg p-3 m-1 flex flex-row justify-between motion-safe:transition-none" style={{ width: inView ? (percentage + '%') : '50%', opacity: inView ? '100%' : '0%', backgroundColor: color }} ref={ref}>
        <p style={{ color: "white" }} class="font-bold">{title}</p>
        <p style={{ color: "white" }} class="font-bold">{level}</p>

    </div>


}

