//starting of class
var profile = /** @class */ (function () {
    //start constructor
    function profile(name, work, dateOfBirth, numberOfFriends, placesVisited, phoneNumber, website, lastOnline, relationshipStatus, studyPlace) {
        var _this = this;
        //methods
        //use this to get all details 
        this.getCompleteDetails = function () {
            console.log(" Name: " + _this.name + "\n Relationship Status: " + _this.relationshipStatus + "\nPlace of Study: " + _this.studyPlace + "\n Work: " + _this.work + "\n No.of Friends: " + _this.numberOfFriends + "\n Date of Birth: " + _this.dateOfBirth + "\n Places Visited: " + _this.placesVisited + "\n Mobile Number: " + _this.phoneNumber + "\n Website: " + _this.website + "\n Last Seen: " + _this.lastOnline);
        };
        // use whatever you need by the below methods
        this.getName = function () {
            return _this.name;
        };
        this.getrelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getStudyPlace = function () {
            return _this.studyPlace;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getNoOfFriends = function () {
            return _this.numberOfFriends;
        };
        this.getDateOfBirth = function () {
            return _this.dateOfBirth;
        };
        this.getPlacesVisited = function () {
            return _this.placesVisited;
        };
        this.getPhoneNumber = function () {
            return _this.phoneNumber;
        };
        this.getWebsite = function () {
            return _this.website;
        };
        this.getLastOnline = function () {
            return _this.lastOnline;
        };
        this.name = name;
        this.work = work;
        this.numberOfFriends = numberOfFriends;
        this.dateOfBirth = dateOfBirth;
        this.placesVisited = placesVisited;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.lastOnline = lastOnline;
        this.relationshipStatus = relationshipStatus;
        this.studyPlace = studyPlace;
    } //end constructor
    return profile;
}()); //end of the class
var getProfile = new profile("Syed Vali", "Student", "18-01-1999", 59, ["Hyderabad", "Bangalore", "Chennai"], 7780159626, "https://candidfella.com", "10 mins ago", "single", "Hyderabad");
var completeProfileDetails = getProfile.getCompleteDetails();
console.log(completeProfileDetails);
