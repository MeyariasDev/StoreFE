export interface IError {
    response: {
        data: {
            authenticated: boolean,
            email: string,
            profileImage: string,
            role: string
            status: number
            statusText: string
            userName: string
            _id: string
            error?: string
        }
    }
}