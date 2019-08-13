import { Injectable } from '@angular/core';
import { ILoggedUser } from '../models/user';
import { IAddress } from '../user/address/address';
import { ApiService } from './api.service';

@Injectable()

export class UserService{
    constructor(private api:ApiService){

    }

    login(data){
        return this.api.post<ILoggedUser>('/login',data, 'login')
    }

    register(data){
        return this.api.post<ILoggedUser>('/register',data, 'resgiter')
    }

    logout(){
        return this.api.post<ILoggedUser>('/logout', {}, 'logout')
    }

    getAddress(){
        return this.api.get<IAddress[]>('/address', 'getAddress')
    }

    createAddress(data: IAddress){
        return this.api.post<IAddress>('/address', data, 'createAddress')
    }
}
