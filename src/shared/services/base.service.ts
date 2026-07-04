export interface ServiceResult<T> {
  success: boolean;
  data: T | null;
  error: string | null;
}

export async function execute<T>(
  callback: () => Promise<T>
): Promise<ServiceResult<T>> {
  try {
    const data = await callback();

    return {
      success: true,
      data,
      error: null,
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      data: null,
      error:
        err instanceof Error
          ? err.message
          : "Unknown Error",
    };
  }
}