import React, {useState} from "react";

export default function DropDown() {

    const [isOpen, setIsOpen] = useState(false);

    function ToogleDropDpwn() {
        setIsOpen(!isOpen);
    }
    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={ToogleDropDpwn}>
                DropDown
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li>DropDown 01</li>
                        <li>p2</li>
                        <li>p3</li>
                    </ul>
                </div>
            )}
        </div>)
}