$(function() {

	var Tweet = Backbone.Model.extend({});

	var TweetList = Backbone.Collection.extend({		
		model: Tweet,
		//localStorage: new Backbone.LocalStorage("TweetList"),
		/*refreshFromServer : function(options) {
		    return Backbone.ajaxSync('read', this, options);
		},*/
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

	/*tweetList.refreshFromServer({success: function(freshData) {
	    tweetList.reset(freshData);
	    tweetList.each(function(model) {
	        model.save();
	    });
	}});*/

	var tweetView = new viewTweets({model: tweetList});

	tweetList.bind('reset', function () {	
		$("#tweets").append(tweetView.render().$el);
	}); 
	
	tweetList.fetch({reset: true});	

});