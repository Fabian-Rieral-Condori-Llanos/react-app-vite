export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=x2ljqPgYNIX8ZB60vWrAifNLV9u9EapS&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((imagenes) => {
        return {
            id: imagenes.id,
            title: imagenes.title,
            url: imagenes.images.downsized_medium.url,
        };
    });
    // console.log(gifs);
    return gifs;
};