import { 
    Cloudstream
} from "../dist/cloudstream.js"; // Questo serve all'app per capire il linguaggio

const FlixBaba = {
    name: "FlixBaba",
    baseUrl: "https://flixbaba.is",
    lang: "it",
    
    search: async function(query) {
        // Logica di ricerca (da implementare insieme)
        return [];
    },

    load: async function(url) {
        // Logica di caricamento film (da implementare insieme)
        return {};
    }
};

export default FlixBaba;
