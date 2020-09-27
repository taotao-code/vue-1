// 用mockjs模拟生成数据
var Mock = require('mockjs');



// node app.js 要求db.js 暴露一个object
let mapData = (n) => {
	let data = [];

	for (let i = 1; i <= n; i++) {
		data.push({
			_id: i + '',
			id: i + '',
			ct: '@province',
			um: '@city',
			sellPrice: "@float(30, 60, 0, 2)",
			cs: "@float(7, 10, 1, 2)",
			des: '@ctitle(2,4)',
			dep: '@ctitle(2,4)',
			km: "@float(30, 60, 0, 2)",
			ab: '@character("upper")',
			title: '@ctitle(4,8)',
			des: '@ctitle(2,4)',
			time: '@integer(1594004307038,1598004307038)',
			detail: {
				auth_icon: Mock.Random.image('128x179', Mock.Random.color(), Mock.Random.cword(1)),
				auth_img: Mock.Random.image('130x179', Mock.Random.color(), Mock.Random.cword(5)),
				auth: '@cname()',
				content: [1].map(() => (
					"<p style='margin-top: 20px;text-indent: 2em'>" + "@cparagraph(10,15)" + "</p>"
				)).join('')
			}
		})
	}

	return data;
};

let mapData2 = (n) => {
	let data = [];

	for (let i = 1; i <= n; i++) {
		data.push({
			_id: i + '',
			id: i + '',
			title: '@ctitle(4,8)',
			dep: '@ctitle(2,4)',
			sellPrice: "@float(30, 60, 0, 2)",
			cs: "@float(7, 10, 1, 2)",
			des: '@ctitle(2,4)',
			km: "@float(30, 60, 0, 2)",
			sub_title: '@ctitle(6,12)',
			banner: Mock.Random.image('1680x745', Mock.Random.color(), Mock.Random.cword(4, 8)),
			time: '@integer(1594004307038,1598004307038)',
			detail: {
				auth_icon: Mock.Random.image('128x179', Mock.Random.color(), Mock.Random.cword(1)),
				auth_img: Mock.Random.image('130x179', Mock.Random.color(), Mock.Random.cword(5)),
				auth: '@cname()',
				content: '@cparagraph(3)'
			}
		})
	}

	return data;
};

let mapData3 = (n) => {
	let data = [];

	for (let i = 1; i <= n; i++) {
		data.push({
			_id: i + '',
			id: i + '',
			title: '@ctitle(4,8)',
			cs: "@float(7, 10, 1, 2)",
			num: "@natural(300, 1000)",
			des: '@ctitle(2,4)',
			sellPrice: "@float(30, 60, 0, 2)",
			dep: '@ctitle(2,4)',
			km: "@float(30, 60, 0, 2)",
			time: '@integer(1594004307038,1598004307038)',
			detail: {
				auth_icon: Mock.Random.image('128x179', Mock.Random.color(), Mock.Random.cword(1)),
				auth: '@cname()',
				auth_img: Mock.Random.image('130x179', Mock.Random.color(), Mock.Random.cword(5)),
				content: [1].map(() => (
					"<p style='margin-top: 20px;text-indent: 2em'>" + "@cparagraph(10,15)" + "</p>"
				)).join('')
			}
		})
	}

	return data;
};
let mapData4 = (n) => {
	let data = [];

	for (let i = 1; i <= n; i++) {
		data.push({
			_id: i + '',
			id: i + '',
			title: '@ctitle(10,15)',
			sellPrice: "@float(30, 60, 0, 2)",
			des: '@ctitle(2,4)',
			km: "@float(30, 60, 0, 2)",
			cs: "@float(7, 10, 1, 2)",
			dep: '@ctitle(2,4)',
			time: '@integer(1594004307038,1598004307038)',
			detail: {
				auth_icon: Mock.Random.image('128x179', Mock.Random.color(), Mock.Random.cword(1)),
				auth_img: Mock.Random.image('130x179', Mock.Random.color(), Mock.Random.cword(5)),
				auth: '@cname()',
				content: [1].map(() => (
					"<p style='margin-top: 20px;text-indent: 2em'>" + "@cparagraph(10,15)" + "</p>"
				)).join('')
			}
		})
	}

	return data;
};
module.exports = Mock.mock({

	'user': {
		"follow": Mock.Random.integer(0, 100),
		"fans": Mock.Random.integer(0, 100),
		"nikename": Mock.Random.cname(),
		"icon": Mock.Random.image('20x20', Mock.Random.color(), Mock.Random.cword(1)),
		"time": Mock.Random.integer(13)
	},
	'banner': mapData2(20),
	'home': mapData3(100),
	'follow': mapData(80),
	'column': mapData(60),
	'cilist': mapData4(100)

});

// module.exports = () => {
//   // 使用 Mock
//   var data = Mock.mock({
//     'course|227': [
//       {
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1000,
//         course_name: '@ctitle(5,10)',//中文标题
//         autor: '@cname',//中文作者名
//         college: '@ctitle(6)',//
//         'category_Id|1-6': 1//课程id
//       }
//     ],
//     'course_category|6': [
//       {
//         "id|+1": 1,
//         "pid": -1,
//         cName: '@ctitle(4)'
//       }
//     ]
//   });
//   // 返回的data会作为json-server的数据
//   return data;
// };
