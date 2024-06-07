"use client"

export default function NewTask() {

    const onSubmit = async (e : any) => {
        e.preventDefault();
        const title: string = e.target.title.value;
        const description: string = e.target.description.value;
        
        const res = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
        console.log(data);
        
    }

    return (
        <div>
            <h1>Create a new task</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Titulo</label>
                <input type="text" id="title" placeholder="Escribe un titulo" />
                
                <label htmlFor="description">Descripcion</label>
                <textarea name="description" id="description" placeholder="Describe tu tarea"></textarea>

                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}
