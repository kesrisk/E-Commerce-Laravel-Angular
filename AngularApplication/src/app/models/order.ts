import { IAddress } from '../user/address/address';
import { ICartProduct } from './cart';

export interface IOrder{
  id: number
  user_id: number
  total: number
  address_id: number
  created_at: string
  updated_at: string
}

export interface IOrderDetails{
  address: IAddress
  products: ICartProduct[]
}
