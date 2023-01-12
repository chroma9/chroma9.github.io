function renderStardate(source, output) {
    const timeStamp = $(source).html()
    const timeNow = new Date(timeStamp);
    const timeThen = new Date('July 15, 1987');
    
    let stardate = (timeNow.getTime() - timeThen.getTime());
    stardate = (stardate / (1000 * 60 * 60 * 24 * 0.036525));
    stardate = Math.floor(stardate + 410000);
    stardate = (stardate / 10);
    $(output).text(`Stardate ${stardate}`)
}