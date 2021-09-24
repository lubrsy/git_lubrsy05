window.onload = function(){
	var img1 = document.getElementById("img1");
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var imgArr = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
	var index = 0;
	var timer;
	btn1.onclick = function(){
		// 在开启定时器之前，需要将当前定时器上的其它定时器关闭
		clearInterval(timer);
		timer = setInterval(function(){
			index++;
			index %= imgArr.length;
			img1.src = imgArr[index];
		}, 1000);
	};
	btn2.onclick = function(){
		clearInterval(timer);
	};
};