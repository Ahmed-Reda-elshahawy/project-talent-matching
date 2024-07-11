import { useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

interface skill {
    id: number;
    title: string;
}

export default function NewProject() {
    const skillRef = useRef<HTMLInputElement>(null);
    const [skills, setSkills] = useState<skill[]>([]);
    function handleAddSkill() {
        if (skillRef.current && skillRef.current.value) {
            setSkills((prev) => [...prev, { id: skills.length, title: skillRef.current!.value }])
            // skillRef.current.value = '';
        }
    }


    return (
        <>
            <Navbar />
            <main className="mx-10 my-10">
                <h2 className=" text-black mb-6 font-semibold text-xl">Add New Project</h2>
                <form className="flex flex-col gap-6 md:w-1/2">
                    <input type="text" name="project-title" id="project-title" className=" bg-white p-2 text-black text-lg rounded-md outline-none" placeholder="Project Title" />
                    <input type="text" name="project-category" id="project-category" className=" bg-white p-2 text-black text-lg rounded-md outline-none" placeholder="Project Category" />
                    <textarea name="project-description" id="project-description" className=" resize-none bg-white p-2 text-black text-lg rounded-md outline-none" placeholder="Project Description"></textarea>
                    <div>
                        <div className="flex rounded-md">
                            <input type="text" name="project-skills" id="project-skills" className="flex-grow bg-white p-2 text-black text-lg rounded-md rounded-r-none outline-none" placeholder="Project Skills" ref={skillRef} />
                            <button type="button" className="px-2 font-medium bg-blue-500 border border-blue-600 rounded-md rounded-l-none" onClick={handleAddSkill}>Add Skill</button>
                        </div>
                        <ul className="bg-slate-300 rounded-md my-2 p-2 flex flex-wrap gap-2">
                            {
                                skills.map((skill) => (
                                    <li key={skill.id} className="rounded-skill">
                                        {skill.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <input type="submit" value="Submit" className="btn-primary w-fit ml-auto" />
                </form>
            </main>
        </>
    )
}