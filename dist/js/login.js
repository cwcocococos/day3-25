var user=getCookie("myCookie"),userI=user.phone,userP=user.pwd,userN=user.name;$("#btn").click(function(){var e=$("#uphone").val(),r=$("#uname").val(),u=$("#upwd").val();console.log(u),r==userN&&u==userP&&e==userI?(alert("登录成功"),window.location.href="index.html"):r!=userN?alert("用户名错误"):e!=userI?alert("手机号不一致"):u!=userP&&alert("密码错误")});