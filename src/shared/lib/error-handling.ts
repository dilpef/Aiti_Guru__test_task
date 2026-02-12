type ErrorProps = {
    error: Error | unknown;
};

export const errorHandling = ({ error }: ErrorProps) => {
    if (error instanceof Error) {
        return error.message;
    }

    return 'Неизвестная ошибка';
};
