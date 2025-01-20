import { StaticImageData } from "next/image";

export type IProduct = {
    id: number; // Product ka unique identifier
    title: string; // Product ka title ya name
    image?: string[] | StaticImageData | string; // Product ki images
    slug: string; // URL-friendly unique identifier for the product
    price: number; // Product ki price
    category: string; // Product ka category name
    description: string; // Product ka detailed description
    size: string[]; // Product ke available sizes
    color: string[]; // Product ke available colors
    qty: number; // Available quantity of the product
    discount?: string; // Discount on product (optional)
    rating: string;
};


//cart data type

export type Cart = {
    id: number; // Product ka unique identifier
    title: string; // Product ka title ya name
    image?: string[] | StaticImageData | string; // Product ki images
    slug: string; // URL-friendly unique identifier for the product
    price: number; // Product ki price
    description: string; // Product ka detailed description
    size: string[]; // Product ke available sizes
    color: string[]; // Product ke available colors
    qty: number; // Available quantity of the product
    discount?: string; // Discount on product (optional)
    rating: string;
    uuid:string | number | undefined
};