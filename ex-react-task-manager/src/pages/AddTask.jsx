import React from 'react'
import { useState, useRef } from 'react'

const AddTask = () => {

    // campi input controllati   
    const [title, setTitle] = useState('')

    // campi input non controllati
    const description = useRef('')
    const status = useRef('')

    // funzione per l'invio della form
    function sendData(e) {
        e.preventDefault()
        console.log(`Riepilogo Task:
    Nome: ${title};
    Descrizione: ${description.current.value};
    Stato: ${status.current.value}
    `)
    }

    return (
        <>
            <div className="container">
                <h2 className='mt-4'>Aggiungi una nuova Task!</h2>
                <div className="row">
                    <form>
                        <p className='mt-3'>Inserisci il nome della Task</p>
                        <input type="text" placeholder='Nome' value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                        <p className='mt-3'>Descrizione della task</p>
                        <textarea ref={description}></textarea>
                        <p className='mt-3'>Stato della Task</p>
                        <select ref={status} defaultValue="To do">
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                        <br />
                        <button className='btn btn-primary mt-3' onClick={sendData}>Aggiungi task</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddTask
