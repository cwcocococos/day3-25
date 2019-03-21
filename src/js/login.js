//   uname     张三      upwd   123456
	var user = getCookie('myCookie');
	//console.log(usrP);
	var userI = user.phone;
	var userP = user.pwd;
	var userN = user.name;
	/*var btn = document.getElementById("btn");
	var uphone = document.getElementById("uphone");
	var uname = document.getElementById("uname");
	var upwd = document.getElementById("upwd");*/
	$("#btn").click(function(){
		var phone = $("#uphone").val();
		var name = $("#uname").val();
		var pwd = $("#upwd").val();
		console.log(pwd)
		if(name == userN && pwd == userP && phone==userI){
			alert("登录成功");
			window.location.href = "index.html";
		}else{
			if(name!=userN){
				alert("用户名错误");
			}else if(phone!=userI){
				alert("手机号不一致")
			}else if(pwd!=userP){
				alert("密码错误")
			}
		}
	})
		