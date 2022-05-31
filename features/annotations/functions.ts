const add = (a: number, b: number): number => {
    return a + b;
};

function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

//Throwing an error means that the function is never returned.
const throwError = (message: string): never => {
    throw new Error(message);
};

//Define the return not the throw
const throwErrorWithGaurd = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }

    return message;
};

const todaysWeather = {
    date: new Date(),
    weather: "sunny"
};

const logWeather = (todaysWeather: { date: Date, weather: string }): void => {
    console.log(todaysWeather.date)
};

logWeather(todaysWeather);

const logWeatherDestructure = ({
    date,
    weather
}: {
    date: Date;
    weather: string
}): void => {
    console.log(date);
    console.log(weather);
};