
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('mainContent'));

function randomData() {
    now = now + 1;
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            now,
            Math.random() * 100
        ]
    }
}

var data = [];
var now = +0;
var oneDay = 1;
var value = Math.random() * 1000;
for (var i = 0; i < 7; i++) {
    data.push(randomData());
}

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        //stack: '总量',
        data: data
    }]
};

setInterval(function () {

    for (var i = 0; i < 1; i++) {
        data.shift();
        data.push(randomData());
    }

    myChart.setOption({
        series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            //stack: '总量',
            data: data
        }]
    });
    myChart.setOption({
        xAxis: [{
            type: 'value',
            splitLine: {
                show: false
            },
            min: +data[0].name,
            max: +20
        }]
    });
}, 1000);

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
