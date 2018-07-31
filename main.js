//starting of class
var video = /** @class */ (function () {
    //start constructor
    function video(title, views, likes, dislikes, channelName, subscribers, description, numberOfComments, relatedVideos) {
        var _this = this;
        //methods
        //use this to get all details 
        this.getCompleteDetails = function () {
            console.log(" Title: " + _this.title + "\n Views: " + _this.views + "\n Likes: " + _this.likes + "\n Dislikes: " + _this.dislikes + "\n Channel: " + _this.channelName + "\n SUbscribers: " + _this.subscribers + "\n Description: " + _this.description + "\n No.of Comments: " + _this.numberOfComments + "\n Related Videos: " + _this.relatedVideos);
        };
        // use whatever you need by the below methods
        this.getVideoTitle = function () {
            return _this.title;
        };
        this.getVideoViews = function () {
            return _this.views;
        };
        this.getVideolikes = function () {
            return _this.likes;
        };
        this.getVideoDislikes = function () {
            return _this.dislikes;
        };
        this.getVideoChannelName = function () {
            return _this.channelName;
        };
        this.getVideoSubcribers = function () {
            return _this.subscribers;
        };
        this.getVideoDescription = function () {
            return _this.description;
        };
        this.getVideoComments = function () {
            return _this.numberOfComments;
        };
        this.getVideoRelated = function () {
            return _this.relatedVideos;
        };
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channelName = channelName;
        this.subscribers = subscribers;
        this.description = description;
        this.numberOfComments = numberOfComments;
        this.relatedVideos = relatedVideos;
    } //end constructor
    return video;
}()); //end of the class
var getDetails = new video(" Hello ", 586, 56, 2, " The killer ", 540, " hello friends ", 21, ["heybabay", "Hellomoto", "Bachkerehna"]);
var completeVideoDetails = getDetails.getCompleteDetails();
console.log(completeVideoDetails);
