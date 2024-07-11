import Navbar from "../../components/Navbar/Navbar";
import personImg from "../../assets/man.png";


export default function ProjectDetails() {
    return (
        <>
            <Navbar />
            <main className="text-black mx-10">
                <h2 className=" text-2xl font-semibold mb-6">Project Details</h2>
                <div className="mb-4 flex flex-wrap gap-2">
                    <h3 className=" font-medium mb-2">Project Title:</h3>
                    <p className="text-stone-500">project 1</p>
                </div>
                <div className="mb-4">
                    <h3 className=" font-medium mb-2">Description:</h3>
                    <p className=" text-stone-500">Description: this is project 1</p>
                </div>
                <div className="mb-4">
                    <h3 className=" font-medium mb-2">Required Skills:</h3>
                    <ul className="flex flex-wrap gap-2 sm:w-70">
                        <li className="rounded-skill">Python</li>
                        <li className="rounded-skill">Machine Learning</li>
                        <li className="rounded-skill">Data Analysis</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className=" font-medium mb-2">Current Contributors:</h3>
                    <ul className=" flex flex-wrap gap-2 sm:w-60">
                        <li className=" w-12">
                            <img src={personImg} alt="person image" className=" object-cover" />
                        </li>
                        <li className=" w-12">
                            <img src={personImg} alt="person image" className=" object-cover" />
                        </li>
                        <li className=" w-12">
                            <img src={personImg} alt="person image" className=" object-cover" />
                        </li>
                        <li className=" w-12">
                            <img src={personImg} alt="person image" className=" object-cover" />
                        </li>
                        <li className=" w-12">
                            <img src={personImg} alt="person image" className=" object-cover" />
                        </li>
                    </ul>
                </div>
                <div className="mt-10 flex gap-4">
                    <button className="btn-primary">Join Projects</button>
                    <button className="btn-primary">Contact Supervisor</button>
                </div>
            </main>
        </>
    )
}