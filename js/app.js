(function(){

/**
 * 02〜04:モデルの練習
 */
/*
	//モデル
	var Task = Backbone.Model.extend({
		defaults: {
			title: "do something",
			completed: false
		},
		validate: function(attrs){
			if(_.isEmpty(attrs.title)){
				return 'title must not be empty!';
			}
		},
		toggle: function(){
			this.set('completed', !this.get('completed'));
		}
	});

	var task1 = new Task({
		completed: true
	});

//	task1.set('title', 'newTitle');
//	console.log(task1.toJSON());
//	var title = task1.get('title');
//	console.log(title);

	console.log(task1.toJSON());

	task1.toggle();
	console.log(task1.toJSON());

	task1.set({title: ''}, {validate: true});
	console.log(task1.toJSON());
*/

/**
 *
 */
	//モデル
	var Task = Backbone.Model.extend({
		defaults: {
			title: 'do something',
			completed: false
		}
	});

	var task = new Task();

	//ビュー
	var TaskView = Backbone.View.extend({
		tagName: 'li'
	});
	var taskView = new TaskView({model:task});

	console.log(taskView.el);
})();