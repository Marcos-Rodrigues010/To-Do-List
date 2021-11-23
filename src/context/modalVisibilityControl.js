import React, { useState } from "react";

export const modalVisibilityControlContext = React.createContext({});

export const ModalProvider = (props) => {

    const [visibleModal, setVisibleModal] = useState(false);

    return(
        <modalVisibilityControlContext.Provider value={{visibleModal, setVisibleModal}}>
            {props.children}
        </modalVisibilityControlContext.Provider>
    );
};