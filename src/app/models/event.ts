export class Event {//id:number;
    title:string;
    organisateur:string;
    description:string;
    dateBegin:Date;
    dateEnd:Date;
    
    
    constructor(title:string,organisateur:string,description:string,dateBegin:Date,dateEnd:Date){
        this.title=title;
        this.organisateur=organisateur;
        this.description=description;
        this.dateBegin=dateBegin;
        this.dateEnd=dateEnd;
    }
    
    }
    
