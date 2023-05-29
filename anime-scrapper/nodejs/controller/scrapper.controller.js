const Xray = require('x-ray');
const x = Xray()


const scrapTrendingAnime=(req, res) =>{
    x('https://anilist.co/search/anime/trending', {
        titles: ['a.title']
    })((err, result) => {
        res.status(200).json({"message":"Found","list":result.titles.map((title)=>title.trim())})
    });   
}

module.exports={scrapTrendingAnime}
