import { useState } from "react"

function App() {
    const [date, setDate] = useState(new Date().toLocaleDateString())
    return (
        <>
            <div>
                <p>
                    This is a simple React app that uses Vite for development and build. It is a basic template to get you started with React and Vite.
                </p>
                <h2>
                    Home Page
                </h2>
                <p>
                    Current Date: {date}
                </p>
            </div>
        </>
    )
}

export default App
