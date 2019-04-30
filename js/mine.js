//---------------------次元皇尊力宙帝你太牛逼了！！！！！！！！！！！！！！

var mysrc=new Array("image/1.jpg",
"image/2.jpg",
"image/3.jpg",
"image/4.jpg",
"image/5.jpg");//存放地址 用于更改地址

var mytitle=new Array("Dancing Lake",
	"The Raining",
	"Butterflies Fly",
	"The Redpanda",
	"Design Test");
var authorsrc = new Array("image/author1.png",
	"image/author2.png",
	"image/author3.png",
	"image/author3.png",
	"image/author3.png");

var date = new Array("  26 Jul 2017",
	"  26 Jul 2017",
	"  26 Jul 2017",
	"  26 Jul 2017",
	"  22 Apr 2019");

var author = new Array("Repn Ka  |",
	"Repn Ka  |",
	"Repn Ka  |",
	"Repn Ka  |",
	"Repn Ka  |");
	
var stitles = new Array("Dancing Lorem",
	"Lorem Ipsum Girl",
	"Butterflies with Ipsum",
	"A lovely Redpanda",
	"National Geography");
	
var essays = new Array("Lorem Ipsum is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sad do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sad do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");

var len = mysrc.length;//数组长度

var total = 0;

var mydelta = 0;

var delay = 1500;

var fadetime = 650;

var fadetime2 = 650;

var titledelay = 1500;     //设置延时

var door = 0 ;





//-----------------------------↓鼠标滑轮事件--------------------------------------
	$(document).on('mousewheel DOMMouseScroll', onMouseScroll);    //计算鼠标滚轮次数
function onMouseScroll(e){
	if (door == 1) return;
	door = 1;
	e.preventDefault();

    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max((-len/len), Math.min((len/len), wheel));



		

	    if(delta > 0){
			if(total == len - 1) {
				door = 0;
				return;
			}

			total++;				//获得滚到的图片位置
		}
	    
	    else{
			if(total == 0) {
				door = 0;
				return;
			}

			total--; 				//获得滚到的图片位置
		}			
	               

	    mydelta = delta;            //把鼠标滑轮滚动方向传出去

		

	    //----------------------------当鼠标滚轮滚动触发以下函数--------------------------------
	    
		fadebackrgound();

		changeimg();

		changetitle();

		changeauthor();
		
		changestitle();

	    console.log("total:");
	    console.log(total);
	    console.log("------------");

		setTimeout(opendoor,1500);
    }
function opendoor(){
	door = 0;
}
   








//-------------------------背景淡入淡出↓--------------------------------------


function fadebackrgound(){



	var totallast = total - 1;
	var totalnext = total + 1;

		console.log("changeimg:");
		console.log(total);
		
    	if(mydelta>0)
	    {
			$("#img"+total).fadeIn(delay);
	    	$("#img"+totallast).fadeOut(delay);
			
	    }
	    if(mydelta<0)
	    {
	    	$("#img"+total).fadeIn(delay);
			$("#img"+totalnext).fadeOut(delay);
		}

}

//------------------------------------------------------------------------------


//-------------------------鼠标滑轮滚动图片↓-------------------------------------


function changeimg(){
    var fuck = total+2;
	var next = total+1;
	var last = total-1;

	if(next<0)               //定义total2值永远不会小于0
    {
    	next = 0;
    }

    console.log("------------");

    console.log("next:");
	console.log(next);

	console.log("last:");
	console.log(last);

	console.log("fuck:");
	console.log(fuck);
	
//-------------------------当鼠标向上滑↓--------------------------------------

	if(mydelta>0)
	{
		dynamics.animate(document.querySelector('#mainimg'+next), {
        translateX: 1920
    }, {
        type: dynamics.bezier,
		duration: delay,
        points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });
//-------------------------排除是第一张的时候↓--------------------------------------
        if(total==1)
        {
        	dynamics.animate(document.querySelector('#mainimg'+total), {
        translateX: 1920
    }, {
        type: dynamics.bezier,
		duration: delay,
        points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });


        }
		
		

//---------------------------------------------------------------------------------
        else{
		dynamics.animate(document.querySelector('#mainimg'+total), {
        translateX: 3840
    }, {
        type: dynamics.bezier,
		duration: delay,
        points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });
		}
	}

//-------------------------当鼠标向下滑↓--------------------------------------------

    if(mydelta<0)
    {
		dynamics.animate(document.querySelector('#mainimg'+fuck), {
        translateX: 0
    }, {
        type: dynamics.bezier,
		duration: delay,
        points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });
//-------------------------排除是第一张的时候↓--------------------------------------
		 if(total==0)
        {
        	dynamics.animate(document.querySelector('#mainimg'+next), {
        translateX: 0
    }, {
        type: dynamics.bezier,
		duration: delay,
        points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });
        }
        else{
		dynamics.animate(document.querySelector('#mainimg'+next), {
        translateX: 1920
    }, {
        type: dynamics.bezier,
		duration: delay,
        points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });
		}
//---------------------------------------------------------------------------------
	}
}


function changetitle(){
	var fuck = total+2;
	var next = total+1;
	var last = total-1;
	if(mydelta>0)
	{
		dynamics.animate(document.querySelector('#title'+next), {
        translateX: 256
    }, {
        type: dynamics.bezier,
		duration: titledelay,
        points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });
	
	if(total==1)
        {


        	dynamics.animate(document.querySelector('#title'+total), {
        translateX: 720
    }, {
        type: dynamics.bezier,
		duration: titledelay,
        points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });
        setTimeout(function(){$('#title'+total).fadeOut(1);},fadetime);
        setTimeout(function(){$('#title'+next).fadeIn(1);},fadetime);
        }

    else{

    	setTimeout(function(){$('#title'+total).fadeOut(1);},fadetime);
		setTimeout(function(){$('#title'+next).fadeIn(1);},fadetime);

  
		dynamics.animate(document.querySelector('#title'+total), {
        translateX: 976
    }, {
        type: dynamics.bezier,
		duration: titledelay,
        points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });

		
		}
}

	if(mydelta<0)
    {
		dynamics.animate(document.querySelector('#title'+fuck), {
        translateX: 0
    }, {
        type: dynamics.bezier,
		duration: titledelay,
         points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });
//-------------------------排除是第一张的时候↓--------------------------------------
		 if(total==0)
        {

        $('#title'+next).fadeIn(1);
        setTimeout(function(){$('#title'+fuck).fadeOut(1);},fadetime2);



        	dynamics.animate(document.querySelector('#title'+next), {
        translateX: 0
    }, {
        type: dynamics.bezier,
		duration: titledelay,
         points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });
        	
        }
        else{

        $('#title'+next).fadeIn(1);
        setTimeout(function(){$('#title'+fuck).fadeOut(1);},fadetime2);

		dynamics.animate(document.querySelector('#title'+next), {
        translateX: 256
    }, {
        type: dynamics.bezier,
		duration: titledelay,
         points: [{"x":0,"y":0,"cp":[{"x":0.8,"y":0}]},{"x":1,"y":1,"cp":[{"x":0,"y":1}]}]
    });


		}
//---------------------------------------------------------------------------------
	}
	
}

//---------------------------------------------------------------------------------
function changeauthor(){

	var fuck = total+2;
	var next = total+1;
	var last = total-1;
	if(mydelta>0)
	{
		dynamics.animate(document.querySelector('#stitle'+next), {
        translateX: 256
    }, {
        type: dynamics.bezier,
		duration: titledelay,
        points: [{"x":0,"y":0,"cp":[{"x":0.85,"y":0}]},{"x":1,"y":1,"cp":[{"x":0.00,"y":1}]}]
    });
	
	if(total==1)
        {


        	dynamics.animate(document.querySelector('#stitle'+total), {
        translateX: 720
    }, {
        type: dynamics.bezier,
		duration: titledelay,
        points: [{"x":0,"y":0,"cp":[{"x":0.85,"y":0}]},{"x":1,"y":1,"cp":[{"x":0.00,"y":1}]}]
    });
        setTimeout(function(){$('#stitle'+total).fadeOut(1);},fadetime);
        setTimeout(function(){$('#stitle'+next).fadeIn(1);},fadetime);
        }

    else{
  
		dynamics.animate(document.querySelector('#stitle'+total), {
        translateX: 976
    }, {
        type: dynamics.bezier,
		duration: titledelay,
        points: [{"x":0,"y":0,"cp":[{"x":0.85,"y":0}]},{"x":1,"y":1,"cp":[{"x":0.00,"y":1}]}]
    });

		setTimeout(function(){$('#stitle'+total).fadeOut(1);},fadetime);
		setTimeout(function(){$('#stitle'+next).fadeIn(1);},fadetime);
		}
}

	if(mydelta<0)
    {
		dynamics.animate(document.querySelector('#stitle'+fuck), {
        translateX: 0
    }, {
        type: dynamics.bezier,
		duration: titledelay,
        points: [{"x":0,"y":0,"cp":[{"x":0.85,"y":0}]},{"x":1,"y":1,"cp":[{"x":0.05,"y":1}]}]
    });
//-------------------------排除是第一张的时候↓--------------------------------------
		 if(total==0)
        {

        $('#stitle'+next).fadeIn(1);
        setTimeout(function(){$('#stitle'+fuck).fadeOut(1);},fadetime2);



        	dynamics.animate(document.querySelector('#stitle'+next), {
        translateX: 0
    }, {
        type: dynamics.bezier,
		duration: titledelay,
        points: [{"x":0,"y":0,"cp":[{"x":0.85,"y":0}]},{"x":1,"y":1,"cp":[{"x":0.05,"y":1}]}]
    });
        	
        }
        else{

        $('#stitle'+next).fadeIn(1);
        setTimeout(function(){$('#stitle'+fuck).fadeOut(1);},fadetime2);

		dynamics.animate(document.querySelector('#stitle'+next), {
        translateX: 256
    }, {
        type: dynamics.bezier,
		duration: titledelay,
        points: [{"x":0,"y":0,"cp":[{"x":0.85,"y":0}]},{"x":1,"y":1,"cp":[{"x":0.05,"y":1}]}]
    });


		}
//---------------------------------------------------------------------------------
	}
	


}
function changestitlewithoutdelay(){
		th=document.getElementById("stitle");
		th.innerHTML = stitles[total];
		te = document.getElementById("what");
		te.innerHTML = essays[total];
	
}

function changestitle(){
	if(mydelta > 0){
		setTimeout(changestitlewithoutdelay,fadetime);
	}
	
	if(mydelta<0){
		 setTimeout(changestitlewithoutdelay,fadetime2);
	}

//---------------------------------------------------------------------------------


}
