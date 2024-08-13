export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: Category;
  additionalInfo: string;
  quantityInStock: number;
  images: IImage[];
  brand: string;
  outsideLocationDeliveryFee: number;
  withinLocationDeliveryFee: number;
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
  isDeleted: boolean;
  currentOffer: Offer;
}

export interface IImage {
  url: string;
  public__id: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Offer {
  _id: string;
  name: string;
  description: string;
  type: OfferType;
  priceSlash: number;
  percentageOff: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum OfferType {
  PriceSlash = "Price Slash",
  PercentageOff = "Percentage Off",
}
