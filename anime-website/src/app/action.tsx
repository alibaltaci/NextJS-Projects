"use server"

export const fetchAnime = async( page:number ) => {

    try {
        const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText} - ${errorDetails}`);
        }
        
        const data = await response.json()
    
        return data
        
    } catch (error) {
        console.error(error);
        throw error;
    }
}