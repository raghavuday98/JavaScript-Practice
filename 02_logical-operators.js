UserloggedInWithMobileNo = false;
UserloggedInWithEmail = true;
if(UserloggedInWithMobileNo || UserloggedInWithEmail){
    console.log("User Logged In" );
    
}
else{
    console.log("Invalid Access");
    
}
if(UserloggedInWithMobileNo && UserloggedInWithEmail){
    console.log("All personal details submitted" );
    
}
else{
    console.log("Please submit Personal Details");
    
}


