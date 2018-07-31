//starting of class
class video {

    title : string;
    videoUrl : any;
    views : number;
    likes : number;
    dislikes : number;
    channelName : string;
    subscribers : number;
    description : string;
    numberOfComments : number;
    relatedVideos : string[];

    //start constructor
    constructor (title : string,videoUrl : any,views : number,likes : number,dislikes : number,channelName : string,subscribers : number,description : string,numberOfComments : number,relatedVideos : string[]){

        this.title = title;
        this.videoUrl = videoUrl;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channelName = channelName;
        this.subscribers = subscribers;
        this.description = description;
        this.numberOfComments = numberOfComments;
        this.relatedVideos = relatedVideos;
    }//end constructor

    //methods
    //use this to get all details 
    getCompleteDetails = () =>{
        console.log(` Title: `+this.title+`\n Views: `+this.views+`\n Likes: `+this.likes+`\n Dislikes: `+this.dislikes + `\n Channel: `+this.channelName + `\n SUbscribers: `+ this.subscribers+ `\n Description: `+this.description+ `\n No.of Comments: `+this.numberOfComments+`\n Related Videos: `+this.relatedVideos)
    }
    // use whatever you need by the below methods
    getVideoTitle = ()=>{
        return this.title;
    }
    getVideoUrl = ()=>{
        return this.videoUrl;
    }
    getVideoViews =()=>{
        return this.views;
    }
    getVideolikes =()=>{
        return this.likes;
    }
    getVideoDislikes =()=>{
        return this.dislikes
    }
    getVideoChannelName=()=>{
        return this.channelName;
    }
    getVideoSubcribers=()=>{
        return this.subscribers;
    }
    getVideoDescription=()=>{
        return this.description
    }
    getVideoComments=()=>{
        return this.numberOfComments
    }
    getVideoRelated=()=>{
        return this.relatedVideos
    }
}//end of the class

let getDetails = new video(" Hello ","https://www.youtube.com/watch?v=CrLPOof7nfc",586,56,2," The killer ",540," hello friends ",21,["heybabay","Hellomoto", "Bachkerehna"]);
let completeVideoDetails = getDetails.getCompleteDetails();
console.log(completeVideoDetails);