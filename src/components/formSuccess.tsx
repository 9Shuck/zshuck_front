import { useState, useEffect } from 'react'

function FormSuccess(props) {

    const[openModal, setOpenModal] = useState(props.opened)

    useEffect(() => {
        console.log('CHILD', openModal)
    }, [openModal])

    const closeModal = () => {
        setOpenModal(false)
    }

    return(
        <>
        {openModal ? (
            <div className="formSuccessContainer">
                <div className="formSuccessModal">
                    <div className="closeModal">
                        <div 
                            className="closeModal__cross"
                            onClick={() => {closeModal()}}
                        >X</div>
                    </div>
                    <p>El formulario se ha enviado correctamente 🥳</p>
                    <p>Me pondré en contacto contigo lo antes posible</p>
                </div>
            </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default FormSuccess;