export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Product {
  id: number;
  title: string;
  brand: string;
  description: string;
  rating: number;
  price: number;
  stock: number;
  discountPercentage: number;
  shippingInformation: string;
  reviews: Review[];
  images: string[];
  thumbnail: string;
}
