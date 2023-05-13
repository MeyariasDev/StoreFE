import { IError } from "../Interface/IError";


export const extracErrorObject = (errors: IError): string => {
    if (errors.response.data.error) {
        return 'El Usuario Ya Existe!';
    }
    return errors.response.data.statusText;
}
