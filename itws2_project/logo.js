document.getElementById("ra").value='FFFFFF'

var c = document.getElementById("myCanvas1")
var ctx = c.getContext("2d");
var c1 = document.getElementById("myCanvas2")
var ctx1= c1.getContext("2d");
var rotate_angle=0
var pu_pd_flag=0;
ctx.fillStyle="#FFFFFF";
ctx.fillStyle="#FFFFFF";
var x1=c.width
var y1=c.height
var sx=2;
var sy=2;
ctx.scale(sx,sy)
ctx1.scale(sx,sy)

ctx.fillRect(0,0,x1,y1);

var x=x1/(2*sx)
var y=y1/(2*sy)
var slope=90
var sqr_brc_flag=0
var sc_hc_flag=0


String.prototype.replaceAt = function(index, character) 
{
    return this.substr(0, index) + character + this.substr(index+character.length);
}

document.getElementById("ra").value = "000000";
document.getElementById("cmd_t_exe").value = "Enter Command Here..."
$(document).ready(function(){
	$(window).load(function(){
		$("#hea").fadeIn(750, function(){
			$("#hea").animate({left: '0px', top: '0px'}, 750, function(){
				$("#all").slideDown(1000);
				$("#nxt").slideDown(750);
			});
		});
	});
});

function setpensize(a,b)
{
sx=parseInt(a)
sy=parseInt(b)

ctx.scale(1,1)
ctx.save()
ctx.scale(sx,sy)
ctx.restore()
pc(0)
}

function pc(v)
{
	
	if(v==-1)//white
	{
		ctx.strokeStyle = '#FFFFFF';
		document.getElementById("ra").value = 'FFFFFF';
	}
	else if(v==0)//black
	{
		ctx.strokeStyle = '#000000';
		document.getElementById("ra").value = '000000';
	}
	else if(v==1)//violet
	{
		ctx.strokeStyle = '#9400D3';
		document.getElementById("ra").value = '9400D3';
	}
	else if(v==2)//gold
	{
		ctx.strokeStyle = '#FFD700';
		document.getElementById("ra").value = 'FFD700';
	}
	else if(v==3)//light green
	{
		ctx.strokeStyle = '#9ACD32';
		document.getElementById("ra").value = '9ACD32';
	}
	else if(v==4)//pink
	{
		ctx.strokeStyle = '#FF1493';
		document.getElementById("ra").value = 'FF1493';
	}
	else if(v==5)//green
	{
		ctx.strokeStyle = '#00FF00';
		document.getElementById("ra").value = '00FF00';
	}
		
	else if(v==6) // navy blue
	{
		ctx.strokeStyle = '#000080';
		document.getElementById("ra").value = '000080';
	}
	else if(v==7)//orange red
	{
		ctx.strokeStyle = '#FF4500';
		document.getElementById("ra").value = 'FF4500';
		
	}
	else if(v==8) // red
	{
		ctx.strokeStyle = '#FF0000 ';
		document.getElementById("ra").value = 'FF0000';
	}
	else if(v==9) // violet
	{
		ctx.strokeStyle = '#EE82EE';
		document.getElementById("ra").value = 'EE82EE';
	}
	else if(v==10) //yellow
	{
		ctx.strokeStyle = '#FFFF00';
		document.getElementById("ra").value = 'FFFF00';
		
	}
	document.getElementById("ra").style.backgroundColor="#"+document.getElementById("ra").value
	document.getElementById("ra").style.color=document.getElementById("ra").style.backgroundColor
	
}



function make_triangle()
{
if(sc_hc_flag==0)
{
if(pu_pd_flag==0)
{
ctx1.strokeStyle = '#006600';
}
else
{
ctx1.strokeStyle = '#FF4500';
}
ctx1.save()
ctx1.translate(x,y)
ctx1.rotate((rotate_angle)*Math.PI/180)
ctx1.beginPath()
ctx1.moveTo(0,0)
ctx1.lineTo(0,-5)
ctx1.lineTo(6,-5)
ctx1.lineTo(-6,-5)
ctx1.lineTo(0,-13)
ctx1.lineTo(6,-5)
ctx1.lineTo(0,-5)
ctx1.stroke()
ctx1.restore()

}
}


function clear_triangle()
{
ctx1.clearRect(0, 0, 1600,1600);
}


function on_reload()
{
slope=90
rotate_angle=0
x=x1/(2*sx)
y=y1/(2*sy)
pu_pd_flag=0;
document.getElementById("cmd_t_exe").value="Type your command here ..."
make_triangle()
ctx.moveTo(x,y)
}

window.onload=on_reload

function sc()
{
sc_hc_flag=0;
make_triangle()
}

function fill()
{

ctx.fillStyle='#EE82EE';
ctx.fill();
}

function hc()
{
clear_triangle()
sc_hc_flag=1;
}

function pu()
{
clear_triangle();
pu_pd_flag=1;
make_triangle();
}
function pd()
{
clear_triangle();
pu_pd_flag=0;
make_triangle();
}

function pe()
{
pd()
pc(-1)
}

function pn()
{
pc(0)
pd()
}

function fd(v)
{
clear_triangle()
	
	ctx.beginPath()
	ctx.moveTo(x,y)
	x=x+(v)*Math.cos((Math.PI/180)*slope);
	y=y-(v)*Math.sin((Math.PI/180)*slope);
	if(pu_pd_flag==0)
	{
		ctx.lineTo(x,y);
		ctx.stroke();
	}


make_triangle()
}



function bk(v)
{
clear_triangle()

	
	ctx.beginPath()
	ctx.moveTo(x,y)
	x=x-v*Math.cos((Math.PI/180)*slope);
	y=y+v*Math.sin((Math.PI/180)*slope);
	if(pu_pd_flag==0)
	{
		ctx.lineTo(x,y);
		ctx.stroke();
	}
make_triangle()
}


function rt(v)
{
clear_triangle()

	rotate_angle+=v
	slope-=v

make_triangle()
}


function lt(v)
{
clear_triangle()

	rotate_angle-=v
	slope+=v

make_triangle()
}


function cs()
{
ctx.clearRect(0, 0, c.width, c.height);
on_reload()
ctx.fillRect(0,0,800,800);
ctx1.clearRect(0, 0, 800,800);
make_triangle()
}

function home()
{
clear_triangle()
ctx.beginPath()
ctx.moveTo(x,y)
x=x1/(2*sx)
y=y1/(2*sy)

if(pu_pd_flag==0)
{

ctx.lineTo(x,y);
ctx.stroke();
}
ctx.moveTo(x,y)

rotate_angle=0
make_triangle()
rotate_angle=0;
slope=90;


}

var s111;
var arr = new Array();
var arri=0;
var che;
function push(str123)
{

arr[arri]=str123;
arri++;
}
function pop()
{
arri--;
che=arr[arri];
}
var random_flag=0;
var forloopi=0;
function for_function(a1,a2)
{
console.log("for_hi")
var ab=a1;
var bc=a2;
ab = ab.replaceAt(0," ")
bc = bc.replaceAt(0,"_")
ab = ab.replaceAt((ab.length)-1," ")
bc = bc.replaceAt((bc.length)-1," ")
var ab_s=ab.split(" ")
	sqr_brc_flag=0;
	var flen=bc.length
	for(i=1;i<flen;i++)
	{
		
		if(bc[i] == "[")
		{
			
			sqr_brc_flag+= 1;
		}
		else if(sqr_brc_flag == 0 && bc[i] == " " )
		{
			bc = bc.replaceAt(i, "_");
		}
		else if(bc[i] == "]")
		{
			
			sqr_brc_flag-=1;
		}
		
	}

var bc_s=bc.split("_")

var iyn =bc_s.length

var fi = parseInt(ab_s[2])
var fn = parseInt(ab_s[3])
var fp = parseInt(ab_s[4])

for(ix=fi+1;ix<fn;ix=ix+fp)
{	forloopi=ix;
	for(iy=1;iy<iyn;iy++)
	{	
		var cm = bc_s[iy]
		
		
		if(cm =="fd"||cm =="bk"||cm =="rt"||cm =="lt")
		{
			iy=iy+1
			
			if(bc_s[iy]==ab_s[1])
			{
				if(cm== "fd")
				{
					fd(ix);
				}
				else if(cm== "bk")
				{
					bk(ix);
				}
				else if(cm== "lt")
				{
					lt(ix)
				}
				else if(cm== "rt")
				{
					rt(ix)
				}
			}
			else
			{
				var cm2=parseInt(bc_s[iy])				
				if(cm== "fd")
				{
					fd(cm2);
				}
				else if(cm== "bk")
				{
					bk(cm2);
				}
				else if(cm== "lt")
				{
					lt(cm2)
				}
				else if(cm== "rt")
				{
					rt(cm2)
				}				
			} 
		}
		else if(cm=="repeat" )
		{	
			iy=iy+1;
			repeat(bc_s[iy])
		}
	}
}
}

function repeat(cmd1,xyz)
{	
	console.log("in repeat : cmd1 :"+cmd1)
	sqr_brc_flag=0;
	lenx=cmd1.length
	for(ix=0;ix<lenx;ix++)
	{
		if(cmd1[ix] == "[")
		{
			if(sqr_brc_flag==0)
			{
			cmd1 = cmd1.replaceAt(ix,"_")
			}
			sqr_brc_flag+= 1;
		}
		if(sqr_brc_flag == 1 && cmd1[ix] == " ")
		{
			cmd1 = cmd1.replaceAt(ix, "_");
		}
		if(cmd1[ix] == "]" )
		{
			if(sqr_brc_flag==1)
			{
				cmd1=cmd1.replaceAt(ix,"_")
			}
			sqr_brc_flag-=1;
		}
		
	}
	
	s111=cmd1.split("_")
	if(random_flag==0)
	{
	var len1x=parseInt(s111[0])
	}
	else
	{
	console.log(xyz)
	var len1x=xyz;
	}
	var strlen1x=s111.length
	
	for(k=0;k<len1x;k++)
	{
		
	for(jx=1;jx<strlen1x;jx++)
	{  
		c1 = s111[jx];
		if ( c1 == "repeat" )
		{
			jx=jx+1;
			v1 = s111[jx];
			push(k);
			push(len1x)
			push(strlen1x)			
			push(jx)
			push(s111)
			
			repeat(s111[jx]);
			pop()
			s111=che
			
			pop()
			jx=parseInt(che)
			
			pop()
			strlen1x=parseInt(che)
			pop()
			len1x=parseInt(che)
			pop()
			k=parseInt(che)
			
			c1=s111[jx]
			
		}
		if (c1 == "fd" || c1 == "bk" || c1 == "rt" || c1 == "lt")
		{	
			jx=jx+1;
			if(s111[jx]!="random" && s111[jx]!="i")
			{
				var v1=parseInt(s111[jx])
			}
			else if(s111[jx]=="i")
			{	
				var v1=parseInt(forloopi);
				
			}
			else if(s111[jx]=="random")
			{
				jx=jx+1;
			 	var v3=parseInt(s111[jx])
				var v1 = Math.floor((Math.random()*v3)+1); 
			}
			
			var v2= isNaN(v1)
			if(v2==true || v1=="" )
			{
				alert("wrong syntax : " + c1 + " ?? ");
				jx=jx-1;
			}
			else
			{
				if(c1 == "fd")
				{
					fd(v1);
				}
				else if(c1 == "bk")
				{
					bk(v1);
				}
				else if(c1 == "rt")
				{
					rt(v1);
				}
				else if(c1 == "lt")
				{
					lt(v1);
				}
			}	
		}
		else if(c1=="for")
		{
			jx=jx+1;
			for_function(s111[jx],s111[jx+1]);
			jx=jx+1;
			
		}
		else  if(c1 == "cs" || c1 == "home" || c1=="pu" || c1=="pd" || c1=="sc" ||c1=="hc")
		{
			if(c1 == "cs")
			{
				cs();
			}
			else if(c1 == "home")
			{
				home();
			}
			else if(c1=="pu")
			{
				pu()
			}
			else if(c1=="pd")
			{
				pd()
			}
			else if(c1=="sc")
			{
				sc()
			}
			else if(c1=="hc")
			{
				hc()
			}
		}
		else if(c1 == "pc")
		{	
			jx=jx+1;
			var v1=parseInt(s111[jx])
					
			pc(v1);
			
		}

	}
	}
		

	
}

function circle(v)
{
var rad = 2*Math.PI*v/360

repeat("360_fd_"+rad+"_rt_1_")
ctx.fill();
}
var ch = 1;
var limo = 1;
var id_i=1;
var id_i1=1;
function init()
{
	var co_val = document.getElementById("ra").value
	ctx.strokeStyle="#"+co_val
	cmd0 = document.getElementById("cmd_t_exe").value;
	if(cmd0 != "")
	{
	order = document.getElementById("cmds");
	if(limo%2 == 0)
	{
		var f  = '#FF0000';
		order.innerHTML = order.innerHTML + "<li id = "+id_i+" style='backgroundColor: f'>" + cmd0 + "</li>";
		limo = limo+1;
		id_i+=1;		

	}
	else
	{
		limo = limo + 1;
		te = "p" + limo;
		var g = '#00FF00';
		order.innerHTML = order.innerHTML + "<li id="+id_i+" style = 'backgroundColor: g'>" + cmd0 + "</li>";
		id_i+=1;
	}
	
	id_i1=id_i
	
	cmd1 = cmd0.replace(/[ ]+/g, " ").trim();
	cmd2 = cmd1.replace(" [","[")
	cmd3 = cmd2.replace(" ]","]")
	cmd4 = cmd3.replace("[ ","[")
	cmd  = cmd1.toLowerCase();
	len  = cmd.length
	sqr_brc_flag=0;
	for(i=0;i<len;i++)
	{
		
		if(cmd[i] == "[")
		{
			
			sqr_brc_flag+= 1;
		}
		if(sqr_brc_flag == 0 && cmd[i] == " " )
		{
			cmd = cmd.replaceAt(i, "_");
		}
		if(cmd[i] == "]")
		{
			
			sqr_brc_flag-=1;
		}
		
	}
	
	s = cmd.split("_");
	
	len1 = s.length;
	
	for(j=0;j<len1;j++)
	{
		c1 = s[j];
		
		
		if (c1 == "fd" || c1 == "bk" || c1 == "rt" || c1 == "lt")
		{
			
			
			j=j+1;
			if(s[j]!="random")
			{
			var v1=parseInt(s[j])
			}
			else
			{
			j=j+1;
			var v3=parseInt(s[j])
			var v1 = Math.floor((Math.random()*v3)+1); 
			}
			var v2 = isNaN(v1);
			
			if(v2==true || v1=="" )
			{
				alert("wrong syntax : " + c1 + " ?? ");
				j=j-1;
			}	
			
			else
			{
				
				if(c1 == "fd")
				{
					fd(v1);
				}
				else if(c1 == "bk")
				{
					bk(v1);
				}
				else if(c1 == "rt")
				{
					rt(v1);
				}
				else if(c1 == "lt")
				{
					lt(v1);
				}
			}
			
			
		}
		else if(c1=="for")
		{
			j=j+1;
			for_function(s[j],s[j+1]);
			j=j+1;
			
		}
		else if ( c1 == "repeat" )
		{
			j=j+1;
			if(s[j]!="random")
			{
			v1 = s[j] ;
			repeat(s[j],0);
			}
			else
			{
			console.log("hi")
			random_flag=1;
			j=j+1;
			var v3=parseInt(s[j])
			var v1 = Math.floor((Math.random()*v3)+1);
			repeat(s[j],v1)
			random_flag=0; 
			}
		}
		else if(c1 == "cs" || c1 == "home" || c1=="pu" || c1=="pd" || c1=="sc" ||c1=="hc" || c1=="pe" || c1=="pn" || c1=="fill")
		{
			if(c1 == "cs")
			{
				cs();
			}
			else if(c1=="fill")
			{
				fill()
			}
			else if(c1 == "home")
			{
				home();
			}
			else if(c1=="pu")
			{
				pu()
			}
			else if(c1=="pd")
			{
				pd()
			}
			else if(c1=="sc")
			{
				sc()
			}
			else if(c1=="hc")
			{
				hc()
			}
			else if(c1=="pe")
			{
				pe()
			}
			else if(c1=="pn")
			{
				pn()
			}
			
		}
		else if(c1=="setpensize")
		{
			j=j+1;
			setpensize(s[j],s[j+1])
			j=j+1;		
		}
		else if(c1 == "pc")
		{
			j=j+1;
			var v1=parseInt(s[j])
					
			pc(v1);
			
		}
		else if(c1 == "circle")
		{
			j=j+1;
			var v1=parseInt(s[j])
			circle(v1)
		}		
		else
		{
			
			alert("wrong command *** : " + s[j]);
		}
	}


	document.getElementById("cmd_t_exe").value=""
}
else
{
alert("Please Enter the Command");
}
}
var ok=0;
function check()
{
	if(ch == 1)
	{
		document.getElementById("cmd_t_exe").value = "";
		ch = 0;
		ok=1;
	}
}
function clean()
{
	id_i=1;
	id_i1=1;
	document.getElementById("cmds").innerHTML = "";
}
document.onkeydown=checkkey
function checkkey(e)
{
	
	e = e || window.event;
	if(e.keyCode == '38')
	{ ok=1
		if(id_i1>1)
		{
		id_i1-=1
		}
		document.getElementById("cmd_t_exe").value =document.getElementById(id_i1).innerHTML
	}
	else if(e.keyCode =='40')
	{ ok=1
		if(id_i1<id_i-1)
		{
		id_i1+=1
		
		document.getElementById("cmd_t_exe").value =document.getElementById(id_i1).innerHTML
}		
else if(id_i1==id_i-1)
		{
		document.getElementById("cmd_t_exe").value=""
		}
		
	}
	else if(e.keyCode == '13' && ok==1)
	{
		init()
		ok=0;
	}
}

function cap(obj)
{
	obj.style.backgroundColor = '#3B5998';
	obj.style.color = "#FFFFFF";
	obj.style.fontSize = '20px';
	obj.borderColor = '#3B5998'

}
function ca(obj)
{
	obj.style.backgroundColor = "#FFFFFF";
	obj.style.color = '#000000'; 
	obj.style.fontSize = '16px';	

}




