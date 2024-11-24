// 创建一个包含完整时间信息的 data 对象
const data = {
    year: 0,
    month: 0,
    day: 0,
    weekday: '',
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    timeZoneOffset: '',  // 新增字段，保存时区偏移信息
    updateTime: function() {
      const now = new Date(); // 获取当前时间
      this.year = now.getFullYear();
      this.month = now.getMonth() + 1; // 月份从 0 开始，需要加 1
      this.day = now.getDate();
      this.weekday = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()]; // 获取星期
      this.hours = now.getHours();
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
      this.milliseconds = now.getMilliseconds(); // 获取毫秒
  
      // 获取时区偏移量（单位为分钟），并将其转换为类似 "UTC+8" 的格式
      const offset = now.getTimezoneOffset();  // 获取时区偏移（相对于 UTC，单位为分钟）
      const sign = offset > 0 ? "-" : "+";  // 根据偏移量判断时区符号
      const hours = Math.floor(Math.abs(offset) / 60);  // 获取时区的小时部分
      const minutes = Math.abs(offset) % 60;  // 获取时区的分钟部分
  
      this.timeZoneOffset = `UTC${sign}${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    },
    formatTime: function() {
      // 格式化时间为完整的时间字符串，精确到毫秒并包含时区
      let timeString = `${this.year}年${this.month < 10 ? '0' + this.month : this.month}月${this.day < 10 ? '0' + this.day : this.day}日 ` +
             `${this.weekday} ` +
             `${this.hours < 10 ? '0' + this.hours : this.hours}:${this.minutes < 10 ? '0' + this.minutes : this.minutes}:${this.seconds < 10 ? '0' + this.seconds : this.seconds}.${this.milliseconds < 100 ? '0' + (this.milliseconds < 10 ? '0' + this.milliseconds : this.milliseconds) : this.milliseconds} ` +
             `时区: ${this.timeZoneOffset}`;
  
      // 如果分钟数为50，输出“还差十秒一分钟”
      if (this.seconds === 50) {
        timeString += "\n还差十秒一分钟！";
      }
  if(this.minutes==20||this.minutes==50)
      {
          timeString+="\n站起来活动一下吧！";
      }
      return timeString;
    }
  };
  
  // 每毫秒更新一次时间并显示
  function updateClock() {
    data.updateTime(); // 更新时间
    document.getElementById('clock').textContent = data.formatTime(); // 更新时钟显示
  }
  
  // 初次加载时更新一次时钟
  updateClock();
  // 每毫秒更新时钟
  setInterval(updateClock, 1); // 以毫秒为单位更新

  //
  // 获取当前网页的最后修改时间
function displayLastModified() {
    const lastModified = document.lastModified;  // 获取网页最后修改时间
    const lastModifiedElement = document.getElementById('last-modified');
  
    // 将最后修改时间显示在页面上
    lastModifiedElement.textContent = `网页最后修改时间: ${lastModified}`;
  }
  
  // 调用函数显示网页最后修改时间
  displayLastModified();

  //
  // 创建一个包含鼠标按下坐标的 data 对象
const mouseData = {
    mouseX: 0,
    mouseY: 0,
    updateMousePosition: function(event) {
      this.mouseX = event.clientX;  // 获取鼠标相对于视口的水平坐标
      this.mouseY = event.clientY;  // 获取鼠标相对于视口的垂直坐标
    },
    formatMousePosition: function() {
      // 格式化鼠标坐标信息为一个字符串
      return `鼠标按下时的坐标: (${this.mouseX}, ${this.mouseY})`;
    }
  };
  
  // 鼠标按下时更新坐标并显示
  document.addEventListener('mousedown', function(event) {
    mouseData.updateMousePosition(event);  // 更新鼠标坐标
    document.getElementById('mouse-coordinates').textContent = mouseData.formatMousePosition();  // 更新鼠标坐标显示
  });

  //
  // 创建一个包含屏幕信息的 data 对象
const screenData = {
    screenWidth: 0,
    screenHeight: 0,
    colorDepth: 0,
    availWidth: 0,
    availHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    updateScreenInfo: function() {
      this.screenWidth = screen.width;  // 获取屏幕的实际宽度
      this.screenHeight = screen.height;  // 获取屏幕的实际高度
      this.colorDepth = screen.colorDepth;  // 获取屏幕色盘深度
      this.availWidth = screen.availWidth;  // 获取显示区域的宽度
      this.availHeight = screen.availHeight;  // 获取显示区域的高度
      this.windowWidth = window.innerWidth;  // 获取当前浏览器窗口的宽度
      this.windowHeight = window.innerHeight;  // 获取当前浏览器窗口的高度
    },
    formatScreenInfo: function() {
      // 格式化屏幕信息为一个字符串，增加窗口大小信息
      return `屏幕实际宽度: ${this.screenWidth}px, 屏幕实际高度: ${this.screenHeight}px, ` +
              
           `浏览器窗口宽度: ${this.windowWidth}px, 浏览器窗口高度: ${this.windowHeight}px`;
    }
  };
  
  // 每秒更新一次屏幕信息并显示
  function updateScreenInfo() {
    screenData.updateScreenInfo(); // 更新时间
    document.getElementById('screen-info').textContent = screenData.formatScreenInfo(); // 更新屏幕信息显示
  }
  
  // 初次加载时更新一次屏幕信息
  updateScreenInfo();
  // 每秒更新屏幕信息
  setInterval(updateScreenInfo, 1000); // 每秒更新一次

  //
  // JavaScript 添加事件处理器（onclick、onchange、onmousedown、onmouseout、onmouseover、onmouseup）

document.addEventListener("DOMContentLoaded", function() {
    // 选择所有书籍项
    const bookItems = document.querySelectorAll(".book-item");
  
    // 添加点击事件（onclick）
    bookItems.forEach(function(item) {
      item.onclick = function() {
        alert("你点击了： " + this.textContent);
      };
    });
  
    // 添加更改事件（onchange）（对于 div 元素不常用，通常用于 input 元素）
    const specialBook = document.getElementById("special-book");
    if (specialBook) {
      specialBook.addEventListener("change", function() {
        console.log("特殊书籍已更改");
      });
    }
  
    // 添加鼠标按下事件（onmousedown）
    bookItems.forEach(function(item) {
      item.onmousedown = function() {
        this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色
      };
    });
  
    // 添加鼠标移出事件（onmouseout）
    bookItems.forEach(function(item) {
      item.onmouseout = function() {
        this.style.backgroundColor = ""; // 鼠标移出时恢复原样
      };
    });
  
    // 添加鼠标悬停事件（onmouseover）
    bookItems.forEach(function(item) {
      item.onmouseover = function() {
        this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
      };
    });
  
    // 添加鼠标松开事件（onmouseup）
    bookItems.forEach(function(item) {
      item.onmouseup = function() {
        this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
      };
    });
  });