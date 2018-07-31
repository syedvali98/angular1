//starting of class
class profile {

    name  : string;
    work : string;
    dateOfBirth : string;
    numberOfFriends : number;
    placesVisited : string[];
    phoneNumber : number;
    website : string;
    lastOnline : string;
    relationshipStatus : string;
    studyPlace : string;
   

    //start constructor
    constructor (name : string,work : any,dateOfBirth : string,numberOfFriends : number,placesVisited : string[],phoneNumber : number,website : string,lastOnline : string,relationshipStatus : string,studyPlace : string,){
          
        this.name = name;
        this.work = work;
        this.numberOfFriends =numberOfFriends;
        this.dateOfBirth =  dateOfBirth;
        this.placesVisited = placesVisited;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.lastOnline =lastOnline;
        this.relationshipStatus = relationshipStatus;
        this.studyPlace = studyPlace;
      
    }//end constructor

    //methods
    //use this to get all details 
    getCompleteDetails = () =>{
        console.log(` Name: `+this.name+ `\n Relationship Status: `+this.relationshipStatus+ `\nPlace of Study: `+this.studyPlace +`\n Work: `+this.work+`\n No.of Friends: `+this.numberOfFriends+`\n Date of Birth: `+this.dateOfBirth + `\n Places Visited: `+this.placesVisited + `\n Mobile Number: `+ this.phoneNumber+ `\n Website: `+this.website+ `\n Last Seen: `+this.lastOnline)
    }
    // use whatever you need by the below methods
    getName = ()=>{
        return this.name;
    }
    getrelationshipStatus = ()=>{
        return this.relationshipStatus;
    }
    getStudyPlace = ()=>{
        return this.studyPlace;
    }
    getWork = ()=>{
        return this.work;
    }
    getNoOfFriends =()=>{
        return this.numberOfFriends;
    }
    getDateOfBirth =()=>{
        return this.dateOfBirth;
    }
    getPlacesVisited =()=>{
        return this.placesVisited
    }
    getPhoneNumber=()=>{
        return this.phoneNumber;
    }
    getWebsite=()=>{
        return this.website;
    }
    getLastOnline=()=>{
        return this.lastOnline;
    }
}//end of the class

let getProfile = new profile(`Syed Vali`,`Student`,`18-01-1999`,59,["Hyderabad","Bangalore","Chennai"],7780159626,`https://candidfella.com`,`10 mins ago`,`single`,`Hyderabad`);
let completeProfileDetails = getProfile.getCompleteDetails();
console.log(completeProfileDetails);