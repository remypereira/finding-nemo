var ref = new Firebase("https://blistering-torch-1660.firebaseio.com/restaurants");

document.getElementById('restLoginForm').addEventListener('submit', function(e){
  e.preventDefault();
  var email=restLoginForm.elements.email.value;
  var pw=restLoginForm.elements.password.value;
  validateRestLoginDetails(email,pw);
});

function clearInvalidLoginMsg(){
  $("#incorrect-p")[0].innerHTML = "";
}

var validateRestLoginDetails = function(email,pw){
  ref.authWithPassword({
    email    : email,
    password : pw
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      $("#incorrect-p")[0].innerHTML = "Incorrect email address or password!";
    } else {
      console.log("Authenticated successfully with payload:", authData);
      localStorage.setItem('RUID',authData.auth.uid);
      window.location.replace('./restOverview');
    }
  });
};
