import {
  AttachMoney,
  Calculate,
  HelpOutline,
  LocalShipping,
  Logout,
  Paid,
  Person,
  PinDrop,
  ShoppingBag,
  ShoppingBasket,
} from "@mui/icons-material";

export const routes = {
  HowItWorks: { label: "How it works", href: "/howitworks", translationKey: "howItWorks", icon: HelpOutline },
  CalculateShipping: {
    label: "Calculate Shipping",
    href: "/calculateshipping",
    translationKey: "calculateShipping",
    icon: Calculate,
  },
  Packages: { label: "Packages", href: "/account/packages", translationKey: "account.packages", icon: ShoppingBag },
  Addresses: { label: "Addresses", href: "/account/addresses", translationKey: "account.addresses", icon: PinDrop },
  Cartons: { label: "Cartons", href: "/account/cartons", translationKey: "account.cartons", icon: ShoppingBasket },
  DeliveryRequests: {
    label: "Delivery Requests",
    href: "/account/deliveries",
    translationKey: "account.deliveries",
    icon: LocalShipping,
  },
  Transactions: {
    label: "Transactions",
    href: "/account/transactions",
    translationKey: "account.transactions",
    icon: Paid,
  },
  Wallet: { label: "Wallet", href: "/account/wallet", translationKey: "account.wallet", icon: AttachMoney },
  PersonalInformation: {
    label: "Personal Information",
    href: "/account/personal",
    translationKey: "account.personal",
    icon: Person,
  },
  Logout: { label: "Logout", href: "/logout", translationKey: "account.logout", icon: Logout },
};

export const navBarRoutes = [
  { label: "Home", href: "/", translationKey: "routes.home" },
  { label: "OurStory", href: "/ourstory", translationKey: "routes.ourStory" },
  { label: "Services", href: "/services", translationKey: "routes.service" },
  { label: "HowItWorks", href: "/howitworks", translationKey: "routes.howItWorks" },
  { label: "Contact", href: "/contact", translationKey: "routes.contact" },
];
