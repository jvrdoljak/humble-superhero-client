import { useMemo, useState } from 'react'
import './App.css'
function App() {
    const [superheroes, setSuperheroes] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        superpower: '',
        humilityScore: '',
    })

    useMemo(() => {
        fetch('http://localhost:4000/superheroes')
            .then((res) => res.json())
            .then((json) => setSuperheroes(json))
            .catch((e) => console.error('Error fetching data: ', e))
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            !!formData.name &&
            !!formData.superpower &&
            !!formData.humilityScore
        ) {
            fetch('http://localhost:4000/superheroes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
                .then((res) => {
                    console.info(res)
                })
                .catch((error) => {
                    console.error({ error })
                })
        }
    }
    return (
        <>
            <div className="superheroList">
                <div className="superhero">
                    <span>NAME</span>
                    <span>SUPERPOWER</span>
                    <span>HUMILITY SCORE</span>
                </div>
                <br />
                {superheroes.map((a, index) => {
                    return (
                        <div key={index} className="superhero">
                            <span>{a.name} </span>
                            <span>{a.superpower} </span>
                            <span>{a.humilityScore} </span>
                        </div>
                    )
                })}
            </div>
            <form className="superheroForm" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    ></input>
                </label>
                <br />
                <label>
                    Superpower:
                    <input
                        name="superpower"
                        value={formData.superpower}
                        onChange={handleChange}
                    ></input>
                </label>
                <br />
                <label>
                    Humility Score:
                    <input
                        type="number"
                        name="humilityScore"
                        value={formData.humilityScore}
                        onChange={handleChange}
                    ></input>
                </label>
                <button className="superheroFormSubmitButton" type="submit">
                    Submit
                </button>
            </form>
        </>
    )
}

export default App
