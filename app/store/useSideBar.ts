import {create} from 'zustand';

type UseSideBar = {
    open: boolean;
    openSideBar: () => void;
    closeSideBar: () => void;
}


export const useSideBar = create<UseSideBar>((set) => ({
    open: false,
    openSideBar: () => set({open: true}),
    closeSideBar: () => set({open: false}),
}));