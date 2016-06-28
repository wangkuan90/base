var vm = new Vue({
	el: '#app',
	data: {
		list: []
	},
	methods: {
		lixiaclik: function(item, $index){
			console.log($index);
			console.log(item.id);
			console.log(item.name);
		}
	}
});

// ajax

var studentList = [{
	id: 1,
	name: "李霞",
	sex: "女",
	age: 18,
	"class": "初三五班"
}, {
	id: 2,
	name: "王宽",
	sex: "男",
	age: 28,
	"class": "初三五班"
}, {
	id: 3,
	name: "李霞2",
	sex: "nv",
	age: 18,
	"class": "初三五班"
}];

vm.$data.list = studentList;