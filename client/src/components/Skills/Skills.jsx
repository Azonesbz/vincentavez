import Skill from "./Skill"

const Skills = () => {
    return (
        <>
            <section className="container py-20 mt-10" id="skills">
                <h2 className="text-center text-5xl font-bold">Skills</h2>
                <div className="grid grid-cols-12 justify-items-center mt-10 text-white">
                    <Skill title={"Front-end"}>
                        <ul className="flex flex-col">
                            <li>React</li>
                            <li>EJS</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </Skill>
                    <Skill title={"Back-end"}>
                        <ul className="flex flex-col">
                            <li>NodeJS</li>
                        </ul>
                    </Skill>
                    <Skill title={"Others"}>
                        <ul className="flex flex-col">
                            <li>Linux</li>
                            <li>Illustrator</li>
                            <li>Photoshop</li>
                            <li>ChatGPT</li>
                        </ul>
                    </Skill>
                </div>
            </section>
        </>
    )
}

export default Skills