import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ title, content, show, onClose, onConfirm, confirmText = 'conferma' }) => {

    if (!show) return null;

    console.log('Modal props:', { title, content, show, onClose, onConfirm, confirmText });
    return createPortal(

        <div className='overlay'>
            <div className='modale'>
                <h2 className='text-white'>{title}</h2>
                {content}
                <div className='modale-action'>
                    <button className='me-4 mt-5 btn btn-warning p-3' onClick={onClose}>Annulla</button>
                    <button className='btn mt-5 btn-danger p-3' onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>

        </div>,
        document.body
    )
}

export default Modal
