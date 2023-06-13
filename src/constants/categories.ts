export type Category = {
  pathname: string,
  name: string,
  imageURL?: string;
  items?: Category[];
}

const categories = [
  {
    pathname: "/gifts",
    name: "Gifts",
    imageURL: "/images/navimage.webp",
    items: [
      {
        pathname: "/women",
        name: "Gifts for Women",
        items: [{ pathname: "/gifts", name: "All Gifts" }],
      },
      {
        pathname: "/men",
        name: "Gifts for Men",
        items: [{ pathname: "/gifts", name: "All Gifts" }],
      },
    ],
  },
  {
    pathname: "/women",
    name: "Women",
    imageURL: "/images/navimage.webp",
    items: [
      {
        pathname: "/clothes",
        name: "Clothes",
        items: [
          {
            pathname: "/dresses",
            name: "Dresses",
          },
          {
            pathname: "/outerwear",
            name: "Outerwear",
          },
          {
            pathname: "/shirts",
            name: "Shirts",
          },
          {
            pathname: "/shorts",
            name: "Shorts",
          },
          {
            pathname: "/t-shirts",
            name: "T-shirts",
          },
        ],
      },
      {
        pathname: "/bags",
        name: "Bags",
        items: [
          {
            pathname: "/backpacks",
            name: "Backpacks",
          },
          {
            pathname: "/briefcases",
            name: "Briefcases",
          },
          {
            pathname: "/shoulder-bags",
            name: "Shoulder Bags",
          },
        ],
      },
      {
        pathname: "/shoes",
        name: "Shoes",
        items: [
          {
            pathname: "/lace-ups",
            name: "Lace-ups",
          },
          {
            pathname: "/loafers",
            name: "Loafers",
          },
          {
            pathname: "/sandals",
            name: "Sandals",
          },
          {
            pathname: "/sneakers",
            name: "Sneakers",
          },
        ],
      },
      {
        pathname: "/accessories",
        name: "Accessories",
        items: [
          {
            pathname: "/belts",
            name: "Belts",
          },
          {
            pathname: "/hats",
            name: "Hats",
          },
          {
            pathname: "/scarves",
            name: "Scarves",
          },
          {
            pathname: "/sunglasses",
            name: "Sunglasses",
          },
          {
            pathname: "/wallets",
            name: "Wallets",
          },
        ],
      },
    ],
  },
  {
    pathname: "/men",
    name: "Men",
    imageURL: "/images/navimage.webp",
    items: [
      {
        pathname: "/clothes",
        name: "Clothes",
        items: [
          {
            pathname: "/dresses",
            name: "Dresses",
          },
          {
            pathname: "/outerwear",
            name: "Outerwear",
          },
          {
            pathname: "/shirts",
            name: "Shirts",
          },
          {
            pathname: "/shorts",
            name: "Shorts",
          },
          {
            pathname: "/t-shirts",
            name: "T-shirts",
          },
        ],
      },
      {
        pathname: "/bags",
        name: "Bags",
        items: [
          {
            pathname: "/backpacks",
            name: "Backpacks",
          },
          {
            pathname: "/briefcases",
            name: "Briefcases",
          },
          {
            pathname: "/messenger-bags",
            name: "Messenger Bags",
          },
        ],
      },
      {
        pathname: "/shoes",
        name: "Shoes",
        items: [
          {
            pathname: "/lace-ups",
            name: "Lace-ups",
          },
          {
            pathname: "/loafers",
            name: "Loafers",
          },
          {
            pathname: "/sandals",
            name: "Sandals",
          },
          {
            pathname: "/sneakers",
            name: "Sneakers",
          },
        ],
      },
      {
        pathname: "/accessories",
        name: "Accessories",
        items: [
          {
            pathname: "/belts",
            name: "Belts",
          },
          {
            pathname: "/hats",
            name: "Hats",
          },
          {
            pathname: "/scarves",
            name: "Scarves",
          },
          {
            pathname: "/sunglasses",
            name: "Sunglasses",
          },
          {
            pathname: "/wallets",
            name: "Wallets",
          },
        ],
      },
    ],
  },
  {
    pathname: "/children",
    name: "Children",
    imageURL: "/images/navimage.webp",
    items: [
      {
        pathname: "/girls",
        name: "Girls",
        items: [
          {
            pathname: "/coats",
            name: "Coats",
          },
          {
            pathname: "/dresses",
            name: "Dresses",
          },
          {
            pathname: "/tops",
            name: "Tops",
          },
        ],
      },
      {
        pathname: "/boys",
        name: "Boys",
        items: [
          {
            pathname: "/coats",
            name: "Coats",
          },
          {
            pathname: "/dresses",
            name: "Dresses",
          },
          {
            pathname: "/tops",
            name: "Tops",
          },
        ],
      },
      {
        pathname: "/accessories",
        name: "Accesories",
        items: [
          {
            pathname: "/bags",
            name: "Bags",
          },
          {
            pathname: "/hats",
            name: "Hats",
          },
          {
            pathname: "/scarves",
            name: "Scarves",
          },
          {
            pathname: "/shoes",
            name: "Shoes",
          },
        ],
      },
    ],
  },
  {
    pathname: "/sign-in",
    name: "Sign In / Register",
  },
];

export default categories;
