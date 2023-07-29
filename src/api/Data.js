
export const ListData = async () => {
    const data = await fetch('http://universities.hipolabs.com/search?country=India');
    const response = await data.json();
    return response;
};
