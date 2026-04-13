const plugin = {
    name: "FlixBaba",
    baseUrl: "https://flixbaba.is",
    lang: "it",
    description: "Plugin per film rari da FlixBaba",
    version: 1,

    // Funzione di ricerca
    search: async function(query) {
        // Costruiamo l'indirizzo di ricerca
        const searchUrl = `${this.baseUrl}/search?q=${encodeURIComponent(query)}`;
        
        // Chiediamo alla pagina i dati
        const response = await fetch(searchUrl);
        const text = await response.text();

        // Questa riga cerca nel codice del sito quello che hai trovato tu
        // Cerca tutti i tag <h6> che hanno la classe del titolo
        const results = [];
        const regex = /<h6[^>]*title="([^"]*)"[^>]*>([\s\S]*?)<\/h6>/g;
        let match;

        while ((match = regex.exec(text)) !== null) {
            results.push({
                title: match[1], // Il titolo del film
                url: this.baseUrl, // Per ora rimaniamo sulla home
                poster: "" // Da implementare in seguito
            });
        }

        return results;
    }
};

export default plugin;
