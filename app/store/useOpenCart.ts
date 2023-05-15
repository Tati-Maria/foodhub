import {create} from 'zustand';

type UseOpenCart = {
    cart: boolean;
    openCart: () => void;
    closeCart: () => void;
}

export const useOpenCart = create<UseOpenCart>((set) => ({
    cart: false,
    openCart: () => set({cart: true}),
    closeCart: () => set({cart: false}),
}));