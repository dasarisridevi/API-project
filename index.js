const express  =require("express");
//database
const database =require ("./database");

//intilize express
const booky = express();

/*
route
description    get all the books
access         public
parameter      none
methods        get
*/

booky.get("/",(req,res) =>{
    return res.json({books:database.books});
});


/*
route
description    get specific book on isbn
access         public
parameter      isbn
methods        get
*/
booky.get("/is/:isbn",(req,res)=>{
    const getSpecificBook = database.books.filter(
        (book)=>book.ISBN === req.params.isbn
    );

    if(getSpecificBook.length===0){
        return res.json({error: `No book found for the ISBN of ${req.params.isbn}`});
    }

    return res.json({book: getSpecificBook});
});




/*
route          /c
description    get specific book on category
access         public
parameter      category
methods        get
*/

booky.get("/c/:category",(req,res)=>{
    const getSpecificBook= database.books.filter(
        (book)=>book.category.includes(req.params.category)
    )

    if(getSpecificBook.lenght ===0){
        return res.json({error: `No book foud for the category of ${req.params.category}`})
    }
    return res.json({book: getSpecificBook});

});


/*
route          /c
description    get specific book on category
access         public
parameter      category
methods        get
*/

booky.get("/lang/:language",(req,res)=>{
    const getSpecificBook=database.books.filter(
        (book)=>book.language===req.params.language
    )

    if(getSpecificBook.lenght===0){
        return res.json({error: `No book foud for the language of ${req.params.language}`})
    }
    return res.json({book: getSpecificBook});
});


/*
route          /author
description    get all authors
access         public
parameter      none
methods        get
*/


booky.get("/author",(req,res)=>{
   return res.json({authors: database.author});
});


/*
route
description    get specific author on isbn
access         public
parameter      isbn
methods        get
*/
booky.get("/author/is/:isbn",(req,res)=>{
    const getSpecificAuthor = database.author.filter(
        (author)=>author.ISBN === req.params.isbn
    );

    if(getSpecificAuthor.length===0){
        return res.json({error: `No author found for the ISBN of ${req.params.isbn}`});
    }

    return res.json({author: getSpecificAuthor});
});



/*
route          /author/book
description    get author based on book
access         public
parameter      isbn
methods        get
*/



booky.get("/author/book/:ISBN",(req,res)=>{
    const getSpecificAuthor= database.author.filter(
        (author)=>author.category.includes(req.params.isbn)
    )

    if(getSpecificAuthor.lenght ===0){
        return res.json({error: `No author foud for the book of ${req.params.isbn}`})
    }
    return res.json({authors: getSpecificAuthor});

});



/*
route          /publication
description    get all publication
access         public
parameter      none
methods        get
*/

booky.get("/publication",(req,res)=>{
    return res.json({pulications: database.publication});
 });



 /*
route
description    get specific publication on isbn
access         public
parameter      isbn
methods        get
*/
booky.get("/publication/is/:isbn",(req,res)=>{
    const getSpecificPublication= database.publication.filter(
        (publication)=>publication.ISBN === req.params.isbn
    );

    if(getSpecificPubliation.length===0){
        return res.json({error: `No publication found for the ISBN of ${req.params.isbn}`});
    }

    return res.json({publication: getSpecificPublication});
});



/*
route          /publication/book
description    get publication based on book
access         public
parameter      isbn
methods        get
*/


booky.get("/publication/book/:ISBN",(req,res)=>{
    const getSpecificPubliation= database.publication.filter(
        (publication)=>publication.category.includes(req.params.isbn)
    )

    if(getSpecificPubliation.lenght ===0){
        return res.json({error: `No publicatioin foud for the book of ${req.params.isbn}`})
    }
    return res.json({publications: getSpecificPubliation});

});


booky.listen(3000,() => {
    console.log("server is up and running");
});