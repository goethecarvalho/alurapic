export interface Photo{
    id:number;
    postDate:Date;
    url: string;
    descripton:string;
    allowComments:boolean;
    likes:number;
    comments:number;
    userId:number;
}