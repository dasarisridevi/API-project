const books = [
    {
        ISBN:"1234book",
        title:"tesla!!",
        pubDate:"2021-08-05",
        language:"en",
        numpage:250,
        author:[1,2],
        publication: [1],
        category:["tech","space","education"]
    }
]

const author = [
    {
        id:1,
        name:"sridevi",
        books:["1234book","secretBook"]

    },
    {
        id:2,
        name:"Elon musk",
        books:["1234book"]

    }
]

const publication=[
    {
        id:1,
        name:"writex",
        books:["1234book"]
    }
]

module.exports={books,author,publication};
