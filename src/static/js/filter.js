import Vue from 'vue';
// 大于99的数字变成99+
Vue.filter('numthumbnail', function (value) {
  if (value > 99) {
    value = '99+';
  }
  return value;
})
// 将数量进行千分转换过滤器
Vue.filter('millesimal', function (value) {
  if (value > 999) {
    value = value / 1000;
    value = value.toFixed(1) + 'k';
  }
  return value;
});
// 金钱的保留两位小数，3位隔开，加“¥”过滤器
Vue.filter('money', function (money, point) {
  point = point > 0 && point <= 20 ? point : 2;
  var isNegative = false;
  if (money < 0) {
    money = Math.abs(money);
    isNegative = true;
  }
  money = parseFloat((money + '').replace(/[^\d\.-]/g, '')).toFixed(point) + '';
  var l = money.split('.')[0].split('').reverse();
  var r = money.split('.')[1];
  var result = '';
  for (var i = 0; i < l.length; i++) {
    result += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
  }
  return '¥ ' + ((isNegative ? '-' : '') + result.split('').reverse().join('') + '.' + r);
});
Vue.filter('ToFixed', function (num, point) {
  if (!num) {
    return '0.00'
  } else {
    point = point > 0 && point <= 20 ? point : 2;
    var isNegative = false;
    if (num < 0) {
      num = Math.abs(num);
      isNegative = true;
    }
    num = parseFloat((num + '').replace(/[^\d\.-]/g, '')).toFixed(point) + '';
    var l = num.split('.')[0].split('').reverse();
    var r = num.split('.')[1];
    var result = '';
    for (var i = 0; i < l.length; i++) {
      result += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
    }
    return '' + ((isNegative ? '-' : '') + result.split('').reverse().join('') + '.' + r);
  }
});
// 时间过滤器 年月日
Vue.filter('time', function (value) {
  if (typeof value === 'undefined') {
    return '';
  }
  var updateDate = new Date(parseInt(value.toString().replace('/Date(', '').replace(')/', ''), 10));
  updateDate.format = function (format) {
    var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S': this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return format;
  };
  return updateDate.format('yyyy-MM-dd');
});
// 时间过滤器 时分秒
Vue.filter('YbTime', function (value) {
  if (typeof value === 'undefined') {
    return '';
  }
  var updateDate = new Date(parseInt(value.toString().replace('/Date(', '').replace(')/', ''), 10));
  updateDate.format = function (format) {
    var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S': this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return format;
  };
  return updateDate.format('yyyy-MM-dd hh:mm:ss');
});
// 时间过滤器
Vue.filter('dateFilter', function (value) {
  if (typeof value === 'undefined') {
    return '';
  }
  var updateDate = new Date(parseInt(value.toString().replace('/Date(', '').replace(')/', ''), 10));
  updateDate.format = function (format) {
    var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S': this.getMilliseconds()
    };

    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return format;
  };

  let currentDate = new Date();
  let days, hours, minutes;
  days = currentDate.getDate() - updateDate.getDate();
  hours = currentDate.getHours() - updateDate.getHours();
  minutes = currentDate.getMinutes() - updateDate.getMinutes();
  if (days === 0) {
    if (hours === 0) {
      if (minutes <= 0){
        return "刚刚";
      }
      else {
        return minutes + "分钟前";
      }
    }
    else if (hours < 12){
      return hours + "小时前";
    }
    return "今天 " + updateDate.format("hh:mm");
  }
  else if (days === 1){
    return "昨天 " + updateDate.format("hh:mm");
  }
  else if (days === 2){
    return "前天 " + updateDate.format("hh:mm");
  }
  else {
    return updateDate.format("yyyy/MM/dd");
  }
  return updateDate.format("yyyy/MM/dd hh:mm");
})
Vue.filter('distance', function (value) {
  if (value === null || value === undefined) {
    return '--'
  } else if (value < 1000) {
    return value + ' m'
  } else {
    return (value / 1000).toFixed(1) + ' km'
  }
});
// 卡号加***
Vue.filter('bindCardNo',(value)=>{
  if(value){
    let arr1 = value.substr(value.length-4);
    let arr2 = value.substr(0,4)
    return arr2+' **** **** **** '+arr1
  }
})
Vue.filter('timeFormat', function (value) {
  return value.replace(/:/g," : ");
})
Vue.filter('money', function (value) {
  if (!value) return '0.00';
  var intPart = Number(value).toFixed(0);
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  var floatPart = '.00';
  var value2Array = value.toString().split('.');

  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString();
    if (floatPart.length === 1) {
      return intPartFormat + '.' + floatPart + '0';
    } else {
      return intPartFormat + '.' + floatPart;
    }
  } else {
    return intPartFormat + floatPart;
  }
})

