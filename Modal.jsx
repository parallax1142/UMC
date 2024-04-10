import React from "react";

const Modal = ({closeModal}) => {

    return (
        <div className="modalWrapper">
            <div className="modal">
                <h2 className="modalTitle">안녕하세요</h2>
                <p>모달 내용은 어쩌고 저쩌고..</p>
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    );
};

export default Modal;