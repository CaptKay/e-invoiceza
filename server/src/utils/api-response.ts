export interface ApiResponse<T> {
  readonly success: boolean;
  readonly data?: T;
  readonly message?: string;
  readonly error?: string;
}

export const successResponse = <T>(data: T, message?: string): ApiResponse<T> => ({
  success: true,
  data,
  message
});

export const errorResponse = (error: string, message?: string): ApiResponse<null> => ({
  success: false,
  error,
  message,
  data: null
});
