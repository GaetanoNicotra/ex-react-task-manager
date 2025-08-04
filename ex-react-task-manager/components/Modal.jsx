import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ title, content, show, onClose, onConfirm, confirmText = 'conferma' }) => {

    if (!show) return null;


    return createPortal(

        <div className='overlay'>
            <div className='modal'>
                <h3>{title}</h3>
                {content}
                <div className='modal-action'>
                    <button onClick={onClose}>Annulla</button>
                    <button onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>

        </div>,
        document.body
    )
}

export default Modal
