import Skill from "./Skill"

const Skills = () => {
    return (
        <>
            <section className="px-2 lg:px-48 py-5" id="skills">
                <h2 className="text-center text-5xl font-bold">Skills</h2>
                <div className="flex flex-col sm:flex-row sm:gap-20 justify-center lg:gap-48 w-full mt-10">
                    <Skill title={"Front-end"}>
                        <ul className="flex flex-col">
                            <li>React.js</li>
                            <li>React Native</li>
                            <li>Redux</li>
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