

    // Se realiza una funcion para entraer las imagens de la API
export const getGifs = async(categoria) => {   // Se le coloca el async para que la const se transforme en Promesa
        
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria)}&limit=20&api_key=HDMgrGKCOYdSSOxms0iA6oNJ8YQ3pDct`;
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {

            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url

            }
         }) 
          
         return gifs;         
        
    };