$("#uphone").blur(function(){var o=$(this).val();/^1[3578]\d{9}$/.test(o)?$("#i-infor").html("√").css("color","darkgreen"):$("#i-infor").html("×").css("color","red")}),$("#uname").blur(function(){var o=$(this).val();/^[a-zA-Z_]\w{5,}$/.test(o)?$("#n-infor").html("√").css("color","darkgreen"):$("#n-infor").html("×").css("color","red")}),$("#upwd").blur(function(){$("#uname").blur();var o=$(this).val();/^\w{8,}$/.test(o)?$("#p-infor").html("√").css("color","darkgreen"):$("#p-infor").html("×").css("color","red")}),$("#btn").click(function(){var o={name:$("#uname").val(),phone:$("#uphone").val(),pwd:$("#upwd").val()},n=JSON.stringify(o);setCookie("myCookie",n,3),window.location.href="login.html"});