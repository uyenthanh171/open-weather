export interface ApiResponse<T = any> {
    status: number;
    payload: T;
    headers: any;
}

export interface ApiError {
    message: string;
    code?: string;
    details?: any;
}