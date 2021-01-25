
import useInView from "react-cool-inview";

export default function SlideInImage({direction, img}) {
    const directionSign = direction == 'right' ? '' : '-'; 

    const { ref, inView } = useInView({
        // Stop observe when the target enters the viewport, so the "inView" only triggered once
        unobserveOnEnter: false,
        // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
        rootMargin: "-100px 0%",
    });

    return <div class={"transform transition-all ease-in-out duration-1000 " + (inView ? 'translate-x-0 opacity-100' : directionSign + 'translate-x-20 opacity-0')}  ref={ref}>
        {img}
     </div>

}

