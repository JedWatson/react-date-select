var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'DateSelect',
		dependencies: [
			'blacklist',
			'classnames',
			'moment',
			'react',
			'react/addons'
		],
		less: {
			path: 'less',
			entry: 'component.less'
		}
	},

	example: {
		src: 'example/src',
		dist: 'example/dist',
		files: [
			'index.html',
			'.gitignore'
		],
		scripts: [
			'example.js'
		],
		less: [
			'example.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);
