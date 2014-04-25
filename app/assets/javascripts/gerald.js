var GeraldApp = {

	onReady: function(){
		$("h1").on("click", GeraldApp.changeText)
	},
	changeText: function(event){
		$(this).text("hey gerald");
		var h1Text = $(this).text();
		var h1Tag = this;
		
		$.ajax({
			url: "/reverse",
			datatype: 'json',
			type: "POST",
			data: { h1Text: h1Text},
			context: h1Tag
		}).done(function(response){
			$(h1Tag).text(response.h1Text)
		});
	}
}

$(document).ready(GeraldApp.onReady);