class Reviews{
    client;
    text;
    date;
    rating;

    constructor(client, text, date, rating){
        this.client = client;
        this.rating = rating;
        this.date = date;
        this.text = text;
    }
}

export {Reviews}