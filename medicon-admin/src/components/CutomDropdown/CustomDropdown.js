// CustomDropdown.js
import React, { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css';
import {ArrowDropDownOutlined} from "@mui/icons-material";
// import {ArrowDownwardOutlined} from "@mui/icons-material";


const CustomDropdown = ({ items, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        onSelect(item);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                <span>
                    {selectedItem ? selectedItem.label : 'None'}
                </span>
                <ArrowDropDownOutlined/>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map((item) => (
                        <li key={item.value} onClick={() => handleItemClick(item)}>
                            {item.label}
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
