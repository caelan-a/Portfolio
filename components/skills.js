import SkillElement from './skill_element';

export default function Skills({skillsData, color}) {

    return <div class="flex flex-col w-full justify-start px-20 py-10 pb-20">
        {skillsData.sort((a, b) => b.percentage - a.percentage).map((s) => {
            return <SkillElement title={s.name} percentage={s.percentage} color={color} level={s.level}/>
        })}
    </div>

}

