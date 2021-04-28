export const shortenName = (name: string) => {
    return name.substring(0, name.lastIndexOf(" "));
}

export const getInitials = (name: string) => {
    return shortenName(name).split(" ").map((n)=>n[0]).join(" ");
}

export const getPupilClass = (parallel: number, letter: string) => {
    return `${parallel}-${letter} класс`
}