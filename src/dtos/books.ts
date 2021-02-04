interface ImageLinks {
  thumbnail?: string;
}

interface VolumeInfo {
  imageLinks?: ImageLinks;
  pageCount: number;
  title: string;
  description: string;
  authors: string[];
}

interface ListPrice {
  amount: number;
}

interface SaleInfo {
  buyLink: string;
  listPrice?: ListPrice;
  saleability: string;
}

export interface ListBooks {
  id: string;
  volumeInfo?: VolumeInfo;
  saleInfo?: SaleInfo;
}
