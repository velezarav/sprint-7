import '../css/Modal.css'
export default function Modal({children, isOpen, closeModal}) {
    
    const handleCloseClick = (e) => e.stopPropagation();
    
    return(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleCloseClick}>
                {children}
            </div>
            
        </article>
    )
}