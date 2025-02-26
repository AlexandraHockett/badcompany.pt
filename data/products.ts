import { CartItem } from "@/types/types";

// Define a type that includes optional ticket-specific fields
type Product = Omit<CartItem, "quantity" | "uniqueId"> & {
  category: string;
  date?: string; // Optional, only for tickets
  location?: string; // Optional, only for tickets
};

export const products: Product[] = [
  // Merchandising
  {
    id: 1,
    title: "T-Shirt BadCompany",
    price: "25.00€",
    image: "/img/bclandia.jpg",
    category: "Merchandising",
  },
  {
    id: 2,
    title: "Boné BadCompany",
    price: "15.00€",
    image: "/img/bclandia.jpg",
    category: "Merchandising",
  },
  {
    id: 3,
    title: "Hoodie BadCompany",
    price: "45.00€",
    image: "/img/bclandia.jpg",
    category: "Merchandising",
  },
  // Exclusives
  {
    id: 4,
    title: "Vinil Omah Lay",
    price: "50.00€",
    image: "/img/bclandia.jpg",
    category: "Exclusives",
  },
  {
    id: 5,
    title: "Poster Nelson Freitas",
    price: "30.00€",
    image: "/img/bclandia.jpg",
    category: "Exclusives",
  },
  // Tickets
  {
    id: 6,
    title: "BC Fest 2023",
    price: "30.00€",
    image: "/img/bclandia.jpg", // Update to a ticket-specific image if available
    category: "Tickets",
    date: "2023-12-15",
    location: "Altice Arena, Lisboa",
  },
  {
    id: 7,
    title: "Monsanto Fest 2023",
    price: "20.00€",
    image: "/img/bclandia.jpg", // Update to a ticket-specific image if available
    category: "Tickets",
    date: "2023-11-20",
    location: "Monsanto, Lisboa",
  },
];

export const tickets = products.filter((p) => p.category === "Tickets");
