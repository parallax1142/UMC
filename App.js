import React, {useState} from "react";
import Modal from "./components/Modal";
import './App.css';


function App() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);
    
    return (
        <div>
            <h1>안녕하세요!</h1>
            <p>내용내용내용</p>
            <button onClick={openModal}>버튼 열기</button>
            {isModalOpen ? <Modal closeModal={closeModal} /> : null}
        </div>
    );
}

export default App;