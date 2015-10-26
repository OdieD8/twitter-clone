$(document).ready(function() {
    $("#tweet-controls").css("display", "none");
    
    $(".tweet").on("click", function() {
        $(".stats").fadeIn("slow", function() {
            $(".stats").css("display", "inherit");
        })
        $(".reply").fadeIn("slow", function () {
            $(".reply").css("display", "inherit");
        })
    });
    
    $(".tweet").on("focusout", function() {
        $(".stats").css("display", "none");
        $(".reply").css("display", "none");
    });
    
    $(".tweet").hover(
        
        function() {
        $(".tweet-actions li").css("display", "inline-block");
    },
        
    function() {
        $(".tweet-actions li").css("display", "none");
    }
    );
    
    
                      
    $(".tweet-compose").on("click", function() {
	
        $(this).css("height", "5em");
        if($(".tweet-compose").val().length > -1 && $(".tweet-compose").val().length < 140) {
        $("#tweet-controls").css("display", "inherit");
        }
        $(".tweet-compose").keyup(function() {
        var keyCount = 140 - $(".tweet-compose").val().length;
        $("#char-count").html(keyCount);
        if(keyCount <= 10) {
            $("#char-count").css("color", "#FF0000");
        }
        if(keyCount > 10) {
            $("#char-count").css("color", "#999");
        }
        if(keyCount < 0) {
            $("#tweet-controls").css("display", "none");
        }
        if(keyCount > 0) {
            $("#tweet-controls").css("display", "inherit");
        }
    });
});
    
    $(".tweet-compose").on("focusout", function() {
        $("#tweet-controls").css("display", "none");
        $(this).css("height", "2.5em");
    });
        
    $("#tweet-submit").on("click", function() {
        var thisTweet = $(".tweet-compose").val();
        $("#stream").prepend('<div class="tweet">' +
						'<div class="content">' +
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<strong class="fullname">RStrong </strong>' +
							'<span class="username">@rstrong</span>' +
							'<p class="tweet-text">' + thisTweet +'</p>' +
							'<div class="tweet-actions">' +
								'<ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span>Favorite</li><li><span class="icon action-more"></span>More</li></ul>' +
							'</div>' +
							'<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +
										'<img src="img/alagoon.jpg" />' +
										'<img src="img/vklimenko.jpg" />' +
									'</div>' +
								'</div>' +
								'<div class="time">' +
									'3:41 PM - 23 Oct 2015' +
								'</div>' +
							'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
							'</div>' +
						'</div>' +
					'</div>'
        );
        $(".tweet-compose").val("");
        $("#char-count").html(140);
    });
    
    $("tweet-actions").css("text-align", "left");
    
//    $(".tweet-actions").hoover(function() {
//    $(this).fadeIn(50);
//    $(this).fadeOut(50);
//    });
    
        
        
    
    
    
    
    

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
});