export default async function getBooks(){
    try{
       return await fetch(`https://my-json-server.typicode.com/Jeck99/books-api/books`)
        .then(response=>response.json())

    }catch(error){
        console.log(error);
    }
}