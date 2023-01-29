import { useState, useEffect } from 'react'

function FormSuccess(props) {

    const[openModal, setOpenModal] = useState(props.opened)

    useEffect(() => {
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
                    <div className="formSuccesModal__title">
                        <span className="secondary-color">z</span>
                        shuck
                    </div>
                        <div 
                            className="closeModal__cross"
                            onClick={() => {closeModal()}}
                        ><span className='bold'>X</span></div>
                    </div>
                    <div className='formSuccessModal__content'>
                        <div className='formSuccessModal__content__1'>
                            <p>El formulario se ha enviado correctamente.</p>
                        </div>
                        <div className='formSuccessModal__content__2'>
                            <p>Me pondré en contacto contigo lo antes posible.</p>
                        </div>
                    </div>

                </div>
            </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default FormSuccess;