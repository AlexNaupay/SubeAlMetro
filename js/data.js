$(function() {

	var Tweet = Backbone.Model.extend({});

	var TweetList = Backbone.Collection.extend({
		model: Tweet,
		url: 'http://subealmetro.willyaguirre.me/lineauno.php',
		parse: function(response) {
			return response;
		}
	});

	var viewTweets = Backbone.View.extend({
		tagName: "ul",
		className: "badgeslist",
		initialize: function(){
			this.template = _.template( $("#template").html() );
		},
		render: function () {	
			this.$el.html(this.template({tweet: this.model.toJSON()}));
			return this;
		}
	});

	var tweetList = new TweetList();

	var tweetView = new viewTweets({model: tweetList});

	tweetList.bind('reset', function () {
		$("#tweets").append(tweetView.render().$el);
	}); 

	tweetList.fetch({reset: true});

});