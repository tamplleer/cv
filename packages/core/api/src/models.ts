export type BaseRequest<T> = { arguments: T; messageMapId?: string };
export type BaseResponse<T> = { data: T; errors?: string[]; success: boolean };
