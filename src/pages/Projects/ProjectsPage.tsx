import Navbar from "../../components/Navbar/Navbar";
import cardImg from "../../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className=" mx-10 my-10">
                <section className="mb-5 text-right">
                    <Link to="/newProject">
                        <button className="btn-primary">Add project</button>
                    </Link>
                </section>
                <section className="flex flex-col gap-6">
                    <div className="card text-black bg-white p-4 rounded-xl text-center shadow-md xl:mx-60 md:text-left md:flex md:flex-row-reverse md:justify-between">
                        <section className="flex flex-col items-center md:block">
                            <img src={cardImg} className=" w-full object-cover rounded-xl md:w-80 md:h-full" alt="project image" />
                        </section>
                        <section>
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold my-3 md:mt-0">Project one</h2>
                                <p className=" text-gray-500">This is discription about the project</p>
                            </div>

                            <div className="flex flex-col items-center gap-10">
                                <div>
                                    <p className=" font-semibold mr-4 text-xl mb-4">
                                        Skills
                                    </p>
                                    <ul className="flex items-center gap-3 flex-wrap">
                                        <li className=" rounded-skill">React</li>
                                        <li className=" rounded-skill">TypeScript</li>
                                        <li className=" rounded-skill">Tailwind css</li>
                                    </ul>
                                </div>
                                <Link to="/projects/:1">
                                    <button className="btn-primary">Details</button>
                                </Link>
                            </div>
                        </section>
                    </div>

                    <div className="card text-black bg-white p-4 rounded-xl text-center shadow-md xl:mx-60 md:text-left md:flex md:flex-row-reverse md:justify-between">
                        <section className="flex flex-col items-center md:block">
                            <img src={cardImg} className=" w-full object-cover rounded-xl md:w-80 md:h-full" alt="project image" />
                        </section>
                        <section>
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold my-3 md:mt-0">Project one</h2>
                                <p className=" text-gray-500">This is discription about the project</p>
                            </div>

                            <div className="flex flex-col items-center gap-10">
                                <div>
                                    <p className=" font-semibold mr-4 text-xl mb-4">
                                        Skills
                                    </p>
                                    <ul className="flex items-center gap-3 flex-wrap">
                                        <li className=" rounded-skill">React</li>
                                        <li className=" rounded-skill">TypeScript</li>
                                        <li className=" rounded-skill">Tailwind css</li>
                                    </ul>
                                </div>
                                <Link to="/projects/:1">
                                    <button className="btn-primary">Details</button>
                                </Link>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}