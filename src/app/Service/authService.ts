import { Injectable } from '@angular/core';
import { Iregister } from '../Interface/Iregister';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Iloging } from '../Interface/Iloging';
import { extracErrorObject } from '../Utils/Error';
import { IError } from '../Interface/IError';

@Injectable({
    providedIn: 'root',
})
export class AunthService {
    urlBase = environment.API_BACKEND;
    header = { 'Content-Type': 'application/json' };

    async createAccount(dataAcount: Iregister) {
        try {
            const userInfo = await axios.post(
                `${this.urlBase}/auth/register`,
                dataAcount,
                { headers: this.header }
            );
            console.log(userInfo, 'Service register');

            return userInfo;
        } catch (error) {
            
            console.log(error, 'error1');

            throw extracErrorObject(error as IError);
        }
    }

    async loginUser(datalogin: Iloging) {
        try {
            return await axios.post(`${this.urlBase}/auth/login`, datalogin, {
                headers: this.header,
            });
        } catch (error: any) {
            console.log(error);

            throw error.response.data.statusText;
        }
    }
}