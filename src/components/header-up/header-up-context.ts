import React from 'react';

export const HeaderUpContext = React.createContext({
    openSideMenu: false,
    setOpenSideMenu(param: boolean) {}
});