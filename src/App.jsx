import React from "react"

const App = () => {
    return (
        <div>
            <main className="box-content h-full w-full text-center pt-10">
                <h1 className="text-4xl">Ziiemli</h1>
                <h2 className="text-xl mb-4">Freelance Artist, Visual Designer & Front-end Developer</h2>
                <ul className="flex justify-center gap-4">
                    <li>
                        <a href="https://www.instagram.com/ziiemli/" target="_blanck">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.artstation.com/ziiemli" target="_blanck">
                            Artstation
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitch.tv/ziiemli" target="_blanck">
                            Twitch
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ziiemli" target="_blanck">
                            Github
                        </a>
                    </li>
                </ul>
                <a href="mailto:ziiemli@outlook.fr">Contact: ziiemli@outlook.fr</a>
                <h3 className="mt-10 text-3xl">Portfolio In Development...</h3>
            </main>
        </div>
    )
}

export default App
