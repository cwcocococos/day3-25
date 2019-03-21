/*var id = document.getElementById("btn");
	var uphone = document.getElementById("uphone");
	var uname = document.getElementById("uname");
	var upwd = document.getElementById("upwd");*/
	//手机号
	$("#uphone").blur(function(){
		var val = $(this).val();
		var reg =/^1[3578]\d{9}$/;
		if(reg.test(val)){
			$("#i-infor").html("√").css("color","darkgreen");
			
		}else{
			$("#i-infor").html("×").css("color","red");
		}
	})
	//昵称
	$("#uname").blur(function(){
		// 可以数字字母下划线但是 字母_ 开头   6,10
		var val = $(this).val();
		var reg = /^[a-zA-Z_]\w{5,}$/;
		if(reg.test(val)){
			$("#n-infor").html("√").css("color","darkgreen");
			
		}else{
			$("#n-infor").html("×").css("color","red");
		}
	})
	//密码
	$("#upwd").blur(function(){
		$("#uname").blur();
		var val = $(this).val();
		var reg = /^\w{8,}$/;
		if(reg.test(val)){
			$("#p-infor").html("√").css("color","darkgreen");
		}else{
			$("#p-infor").html("×").css("color","red");
		}
	})
	
	$("#btn").click(function(){
		var uname = $("#uname").val();
		var uphone = $("#uphone").val();
		var upwd = $("#upwd").val();
		var obj = {
			"name":uname,
             "phone":uphone,
             "pwd":upwd
		}
 		var objString = JSON.stringify(obj);
		setCookie("myCookie",objString,3);
		window.location.href = "login.html";
	})