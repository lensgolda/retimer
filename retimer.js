function Timer(seconds, callback) {
    var self = this;
	this.start =  seconds <= 0 ? 0 : seconds;
    this.el = document.getElementById('timer');
    this.el = this.createHtml();
    
    this.timerStart = function () {
        self.setHtmlTimer();
        self.start--;
        if (self.start >= 0) {
            setTimeout(self.timerStart, 1000);
        } else {
            callback();
        }
    }
}

Timer.prototype.createHtml = function () {
        
    var d = document.createElement('span'); d.setAttribute('id', 'tday');
    var h = document.createElement('span'); h.setAttribute('id', 'thour');
    var m = document.createElement('span'); m.setAttribute('id', 'tmin');
    var s = document.createElement('span'); s.setAttribute('id', 'tsec');
    this.el.appendChild(d);
    this.el.appendChild(h);
    this.el.appendChild(m);
    this.el.appendChild(s);
    return this.el;
}

Timer.prototype.getSec = function () {
    return this.getTime().sec;
}

Timer.prototype.getMin = function () {
    return this.getTime().min;
}

Timer.prototype.getHour = function () {
    return this.getTime().hour;
}

Timer.prototype.getDays = function () {
    return this.getTime().day;
}

Timer.prototype.setHtmlTimer = function () {
    var timer = this.el.children;
    
    timer.tday.innerHTML = this.getDays() + ' : ';
    timer.thour.innerHTML = this.getHour() + ' : ';
    timer.tmin.innerHTML = this.getMin() + ' : ';
    timer.tsec.innerHTML = this.getSec();
}

Timer.prototype.addZero = function (num) {
    if (num < 10) {
            num = "0" + num;
    }
    return num;
}

Timer.prototype.getTime = function () {
    var sec = this.addZero(Math.floor(this.start % 60));
    var min = this.addZero(Math.floor(this.start / 60) % 60);
    var hour = this.addZero(Math.floor(this.start / 3600) % 24);
    var day = this.addZero(Math.floor(this.start / 86400));
    return { sec: sec, min: min, hour: hour, day: day }
}

var timer = new Timer(10, function() {
    alert('Time is over!')
});
setTimeout(timer.timerStart, 1000);