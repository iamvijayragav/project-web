export const MenuItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about-us",
  },
  {
    id: 3,
    title: "Services",
    children: [
      {
        id: 31,
        title: "Sustainability Consulting",
        path: "/sustainability-consulting",
        children: [
          {
            id: 311,
            title: "Environmental Factor",
            path: "/environmental-factors",
          },
          {
            id: 312,
            title: "Social Factors",
            path: "/social-factors",
          },
          {
            id: 313,
            title: "Governance Factors",
            path: "/governance-factors",
          },
        ],
      },
      {
        id: 32,
        title: "Engineering",
        path: "/engineering",
      },
      {
        id: 33,
        title: "Enterprise Asset Management",
        path: "/enterprise-asset-management",
      },
      {
        id: 34,
        title: "Risk Management",
        path: "/risk-management",
      },
    ],
  },
  {
    id: 4,
    title: "Projects",
    children: [
      {
        id: 41,
        title: "Engineering Projects",
        path: "/engineering-project",
      },
      {
        id: 42,
        title: "Data Management Project",
        path: "/data-management-project",
      },
      {
        id: 43,
        title: "Risk Management Project",
        path: "/risk-management-project",
      },
    ],
  },
  {
    id: 5,
    title: "Careers",
    path: "/careers",
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contact-us",
  },
];
