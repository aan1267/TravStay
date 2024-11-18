const data = [
  // {
  //   title: "A Quaint Indo-Portuguese Heritage Villa In Goa",
  //   description:
  //     "We are Casa Sara, a quaint place you can call 'home' away from the hustle & bustle of life. Located in a traditional village in south Goa, our gorgeous Portuguese-styled heritage villa has a charm of its own - it's a peep into a 'Goa' you will always fondly cherish & wish you were a part of forever!",
  //   images: [
  //     {
  //       url: "https://a0.muscache.com/im/pictures/miso/Hosting-548838707677454931/original/75594cf3-d551-485c-9a2d-2f735b9a75f4.jpeg?im_w=1440",
  //       caption:
  //         "Casa Sara - An Indo Portuguese heritage villa located in a peaceful & scenic Goan village.",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/3a8340fd-a39d-4c59-a315-ed310254a2ae.jpg?im_w=1440",
  //       caption: "Master Bed Room",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/fa91b366-2f0d-4987-803d-54ee53a6cca0.jpg?im_w=1440",
  //       caption:
  //         "Sitting room with a Smart TV, a sofa cum bed & a study table with an ergonomic chair",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/miso/Hosting-548838707677454931/original/75b18059-523c-4c8f-b67f-704ec9b342be.jpeg?im_w=1440",
  //       caption: "The hallway",
  //     },
  //   ],
  //   price: "₹2,482 night",
  //   country: "India",
  //   location: "Dramapur, Goa",
  // },
  // {
  //   title: "Leela homestay Indore Tulip-2 BHK Luxury Apartment",
  //   description:
  //     "LHS -Tulip is a two bedroom luxury appartment having all modern  amenities , it is having two bedrooms one living room one dinning room , porch etc.",
  //   images: [
  //     {
  //       url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1064842555985660140/original/49812598-d04f-45fd-afac-771d40ced340.jpeg?im_w=1200",
  //       caption: "living room",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1064842555985660140/original/54302c94-ac5a-4a4f-8714-3b64b49443de.jpeg?im_w=1440",
  //       caption: "1st bedroom",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1064842555985660140/original/9c276352-6b40-474e-ad4b-ff3d70fb4f51.jpeg?im_w=1440",
  //       caption: "2nd bedroom",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1064842555985660140/original/c38c78d4-4ed5-4f01-9bf3-a4621e5acf36.jpeg?im_w=1440",
  //       caption: "kitchen",
  //     },
  //   ],
  //   price: "3,410 night",
  //   country: "India",
  //   location: "Indore, India",
  // },
  // {
  //   title: "2 BR Villa with Scenic Hill Views & Pool (1/2)",
  //   description:
  //     " Welcome to your serene getaway! Our property features two charming 2-bedroom villas, each with a private entry, ensuring complete privacy during your stay. You will enjoy one of these beautiful villas, complete with modern amenities and stunning surroundings.",
  //   images: [
  //     {
  //       url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4Mzg5Nzk1ODA2MzI4MjA2NQ%3D%3D/original/53170c73-432e-4061-9a2f-a8e49aa859e8.jpeg?im_w=1440",
  //       caption: "Exterior",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4Mzg5Nzk1ODA2MzI4MjA2NQ%3D%3D/original/25e7460b-da68-4aa0-be2a-a2b2e837582d.jpeg?im_w=1200",
  //       caption: "Bedroom",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4Mzg5Nzk1ODA2MzI4MjA2NQ%3D%3D/original/cb4df95c-f92e-4a6a-99f9-eed5aba7238a.jpeg?im_w=1440",
  //       caption: "Dining Area",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4Mzg5Nzk1ODA2MzI4MjA2NQ%3D%3D/original/7cc03d97-4d01-4063-84a3-8f7f33e2872b.jpeg?im_w=1440",
  //       caption: "kitchen",
  //     },
  //   ],
  //   price: "8,410 night",
  //   country: "India",
  //   location: "Pune, India",
  // },
  // {
  //   title: "Natural Lake View Heritage Property",
  //   description:
  //     "Heritage Property very close to all the tourist attractions in Udaipur. All the rooms offer picturesque lake view. Peaceful environment for couples and family. Easily accessible road and parking space is available.",
  //   images: [
  //     {
  //       url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-48104213/original/3e48dc38-397d-40af-906b-fbb641626b14.jpeg?im_w=1200",
  //       caption: "",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-48104213/original/06d685b9-f743-4022-a8c1-a2480fb42060.jpeg?im_w=1440",
  //       caption: "",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/miso/Hosting-48104213/original/f172f260-2a2f-4910-81a0-3bb275eed5ca.jpeg?im_w=1440",
  //       caption: "",
  //     },
  //     {
  //       url: "https://a0.muscache.com/im/pictures/miso/Hosting-48104213/original/ed59a3ce-f65b-45e2-b3c8-52e5d63c5367.jpeg?im_w=1440",
  //       caption: "",
  //     },
  //   ],
  //   price: "3,050 night",
  //   country: "India",
  //   location: " Udaipur, India",
  // },

  {
    title: "Bella 69 - Sea Front Cabana",
    description:
      "The cabana is a one of two cabanas with sea view is situated at the edge of the beach and just a little steps to nightlife, transport, restaurants and family-friendly activities such as sea bathing, snorkeling, diving, lagoon safari and more",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/daa1a014-a6db-4bfe-bf2f-204cee17d43c.jpg?im_w=1200",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/d745ca38-3d7b-46d0-9619-8518adea562f.jpg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/e4aa1b52-c366-4bc4-9e46-7083b3edcecf.jpg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/058eefd2-3a12-41bc-a78d-f42824094736.jpg?im_w=1440",
        caption: "",
      },
    ],
    price: "₹2,300 night",
    country: "Sri Lanka",
    location: "Hikkaduwa, Sri Lanka",
  },
  {
    title: "Sultan Beach Residence",
    description:
      "With direct access to the beach and lagoon, you’ll have no trouble connecting with nature at this gorgeous island home. When you’re not out exploring, settle into the sunken poolside lounge for cocktails, grill up some fresh seafood on the barbeque, or relax in the steam room while the kids splash around on the waterslide.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/78a724c8-397b-4fef-ac20-6419bde44f99.jpeg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/68e6f38a-d6a4-4c83-96ff-077e97c5c34d.jpeg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/3d217810-720d-4bb2-a818-9180cb4fdcba.jpeg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-912305060013575560/original/9df653bc-c0df-415f-9551-799eea73b658.jpeg?im_w=1440",
        caption: "",
      },
    ],
    price: "₹ 50,000 night",
    country: "Maldives",
    location: "Dhonakulhi, Maldives",
  },
  {
    title: "Privy Stays- Green Palm Villa",
    description:
      "Experience the epitome of luxury living with this exquisite 3BHK private property, boasting opulent furnishings and amenities. Dive into relaxation with your very own small private pool, offering a serene oasis right at your doorstep. Whether you're entertaining guests or seeking solitude, this lavish retreat promises an unforgettable stay.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1155717567444391643/original/4b7c0e48-d023-40d3-932b-f88b32c08082.jpeg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1155717567444391643/original/59948bf1-a8be-4828-987f-a7c19c04f2da.jpeg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1155717567444391643/original/0953668d-a196-4523-abc1-c57db6b9d7bc.jpeg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1155717567444391643/original/a5e9c108-6f0c-4429-814f-a39f9926d68d.jpeg?im_w=1440",
        caption: "",
      },
    ],
    price: "₹9,999 night",
    country: "India",
    location: "Alibag, India",
  },
  {
    title: "10BR Luxury Stay at Lake w Private Pool - Udaipur",
    description:
      "This 10BR Luxury Lake View Stay is located in Udaipur. This stay boasts a Private Pool/ Lake view Outdoor Setting. With spacious bedrooms with ensuite bathroom, in-house kitchen with chef & menu and common areas to relax with family or friends. This holiday rental is ideal for families, group of friends or corporate groups for a perfect getaway in Udaipur.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1046081364268291049/original/ce4b032b-a8b2-43be-a87d-8230e335766e.jpeg?im_w=1200",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1046081364268291049/original/e2dd5aaa-61a4-46b3-a550-e2dcf8bc7b4a.jpeg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1046081364268291049/original/569e8b21-0fc7-4a1a-ba86-ee60aea87d9c.jpeg?im_w=1440",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1046081364268291049/original/ef05fd33-550b-40db-a7ab-8c26f52f5700.jpeg?im_w=1440",
        caption: "",
      },
    ],
    price: "₹84,000 night",
    country: "India",
    location: "Udaipur, India",
  },
  {
    title: "Premium Cottage 4@ khattu tara agro resort",
    description: "You won’t want to leave this charming, one-of-a-kind place. free wifi , free parking , swimming pool , complimentary breakfast.",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/76f03f4f-cd98-4e55-8fba-102264a62d5a.jpg?im_w=1200",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/dfa15279-f06a-47ba-9469-73677bc911a7.jpg?im_w=720",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/d20f5e6e-f140-4954-a2ff-adca9befb399.jpg?im_w=720",
        caption: "",
      },
      {
        url: "https://a0.muscache.com/im/pictures/af72bd2f-7c31-4706-bd91-e50ca6a77a55.jpg?im_w=1440",
        caption: "",
      },
    ],
    price: "₹5,000 night",
    country: "India",
    location: "Mahabaleshwar, India",
  },
  // {
  //   title: "",
  //   description: "",
  //   images: [
  //     {
  //       url: "",
  //       caption: "",
  //     },
  //     {
  //       url: "",
  //       caption: "",
  //     },
  //     {
  //       url: "",
  //       caption: "",
  //     },
  //     {
  //       url: "",
  //       caption: "",
  //     },
  //   ],
  //   price: "₹ ",
  //   country: "",
  //   location: "",
  // },
  // {
  //   title: "",
  //   description: "",
  //   images: [
  //     {
  //       url: "",
  //       caption: "",
  //     },
  //     {
  //       url: "",
  //       caption: "",
  //     },
  //     {
  //       url: "",
  //       caption: "",
  //     },
  //     {
  //       url: "",
  //       caption: "",
  //     },
  //   ],
  //   price: "₹ ",
  //   country: "",
  //   location: "",
  // },
];

module.exports = data;
