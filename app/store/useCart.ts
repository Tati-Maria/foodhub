import {create} from 'zustand';

//cart type
export type Cart = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
}

//cart state
interface CartState {
    items: Cart[];
    addToCart: (item: Cart) => void;
    removeFromCart: (id: Cart) => void;
    increaseQuantity: (id: Cart) => void;
    decreaseQuantity: (id: Cart) => void;
    clearCart: () => void;
}

//cart store
export const useCart = create<CartState>((set) => ({
    items: [],
    addToCart: (item) => 
    set((state) => {
        const isItemInCart = state.items.find((i) => i.id === item.id);
        if (isItemInCart) {
            return {
                items: state.items.map((i) =>
                    i.id === item.id ? {...i, quantity: i.quantity + 1} : i
                ),
            };
        } else {
            return {items: [...state.items, {...item, quantity: 1}]};
        }
    }),
    removeFromCart: (item) => 
    set((state) => ({
        items: state.items.filter((i) => i.id !== item.id),
    })),
    increaseQuantity: (item) =>
    set((state) => ({
        items: state.items.map((i) => 
            i.id === item.id ? {...i, quantity: i.quantity + 1} : i
        ),
    })),
    decreaseQuantity: (item) =>
    set((state) => ({
        items: state.items.map((i) =>
            i.id === item.id ? {...i, quantity: i.quantity - 1} : i
        ),
    })),
    clearCart: () => set(() => ({items: []})),
}));

