var user_Boolean = false;
var password_Boolean = false;
var varconfirm_Boolean = false;
var emaile_Boolean = false;
var Mobile_Boolean = false;
$('.reg_user').blur(function(){
  if ((/^[0-9]{11}$/).test($(".reg_user").val())){
    $('.user_hint').html("✔").css("color","green");
    user_Boolean = true;
  }else {
    $('.user_hint').html("×").css("color","red");
    user_Boolean = false;
  }
});
// password
$('.reg_password').blur(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())){
    $('.password_hint').html("✔").css("color","green");
    password_Boolean = true;
  }else {
    $('.password_hint').html("×").css("color","red");
    password_Boolean = false;
  }
});