# retimer
Использование:
в HTML добавить элемент с id="timer"

```
<div id="timer"></div>
```

конструктор принимает два параметра
время в секундах
callback функцию которая выполнится по истечении времени таймера

```
var timer = new Timer(seconds, callback);
```

 для старта таймера существует метод-свойство timerStart
 пример кода JS:
 
```
var timer = new Timer(10, function() {
    alert('Time is over!')
});
setTimeout(timer.timerStart, 1000);
```
