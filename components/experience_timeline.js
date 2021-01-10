import timelineElements from "./timelineElements"
import styles from "./experience_timeline.module.css"

export default function ExperienceTimeline({ }) {

    return (
        <div >

            {timelineElements.map((element) => {
                return (

                    <div class="flex-row">
                        <img class=" w-1/6 transform rotate-11 animate-wiggle float-right " src={require('../public/assets/images/' + element.iconPath + '.svg')} />

                        <div style={{ fontSize: '1em', fontFamily: 'sans-serif' }}>
                            <p style={{ fontSize: '1.5em', }} >
                                {element.title}
                            </p>
                            <p >
                                {element.subtitle}
                            </p>
                            <p >
                                {element.location}
                            </p>
                            <p>{element.description}</p>
                        </div>

                    </div>



                );
            })}
        </div>
    )
}