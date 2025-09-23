export interface Gift {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  status: 'available' | 'taken';
  buyerName?: string;
  buyerPhone?: string;
  buyerCompanions?: string[] | string;
}
