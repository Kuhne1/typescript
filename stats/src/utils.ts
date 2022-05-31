

export const dateStringToDate = (dateString: string): Date => {
    const dateParse = dateString
        .split("/")
        .map((val): number => {
            return parseInt(val);
        });

    return new Date(dateParse[2], dateParse[1] - 1, dateParse[0]);
};