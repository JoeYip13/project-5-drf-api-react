import React from "react";
import Alert from "react-bootstrap/Alert";

const CustomAlert = ({ variant, onClose, children }) => {
    return (
        <Alert variant={variant} onClose={onClose} dismissible>
            {children}
        </Alert>
    );
};

export default CustomAlert;
