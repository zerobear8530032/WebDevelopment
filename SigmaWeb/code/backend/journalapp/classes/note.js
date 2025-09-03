class Note{
    title;
    description;
    author;
    time;

    constructor(title,description,author,time=Date.now()){
        this.title=title;
        this.description=description;
        this.author=author;
        this.time=time;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getTime(){
        return this.time;
    }

    getAuthor(){
        return this.author;
    }

    setTitle(title){
        return this.title=title;
    }

    setDescription(description){
        this.description=description;
    }

    setTime(time){
        this.time=time;
    }

    setAuthor(author){
         this.author=author;
    }
}

export default Note;
