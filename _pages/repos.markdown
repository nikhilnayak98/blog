---
layout: page
title: Repos
permalink: /repos/
---
<div id="w">
    <div id="ghapidata"></div>
  </div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script>
  $(function(){
  $(window).load(function(e){
    e.preventDefault();
    $('#ghapidata').html('<center><div id="loader"><img src="https://camo.githubusercontent.com/9b83e235aadc0f0233a6954393cbb691b4dfb4fb/687474703a2f2f692e696d6775722e636f6d2f514c34756238352e676966" alt="Loading..."></div></center>');
    
    var username = 'nikhilnayak98';
    var requri   = 'https://api.github.com/users/'+username;
    var repouri  = 'https://api.github.com/users/'+username+'/repos';
    
    requestJSON(requri, function(json) {
      if(json.message == "Not Found" || username == '') {
        $('#ghapidata').html("<h2>No User Info Found</h2>");
      }
      
      else {
        // user data
        var fullname   = json.name;
        var username   = json.login;
        var profileurl = json.html_url;
	var avatarurl = json.avatar_url;
        
        if(fullname == undefined) { fullname = username; }
        
        var outhtml = '<img class="materialboxed" width="70" src="' + avatarurl + '"><h2>'+' <span>@<a href="'+profileurl+'" target="_blank">'+username+'</a></span></h2>';
	
	$.getJSON("https://api.github.com/users/nikhilnayak98/orgs", function(result){
            $.each(result, function(i, field){
                outhtml = outhtml + '<a href="https://github.com/' + field.login + '"><div class="chip waves-effect waves-light btn z-depth-4 grey lighten-2" style="text-transform: none"><img src="' + field.avatar_url + '" height="50px" width="50px">' + field.login + '</div></a>';
            });
	    $('#orgdata').html(outhtml);
        });
       
        outhtml = outhtml + '<div>';
        
        var repositories;
        $.getJSON(repouri, function(json){
          repositories = json;   
          outputPageContent();                
        });          
        
        function outputPageContent() {
          if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
          else {
            outhtml = outhtml + '<p></p> <ul>';
            $.each(repositories, function(index) {
              var stafork=repositories[index].fork?'<svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>':'';
	      var desc=repositories[index].description;
              if(desc==null){ desc="No Description Available"; }
             outhtml = outhtml + '<li><div class="row"> <div class="col s12 m12"> <div class="card hoverable"> <div class="card-content black-text"> <span class="card-title"><b>'+repositories[index].name+'</b></span> <p>'+desc+'</p> </div> <div class="card-action"> <a href="'+repositories[index].html_url+'">VIEW ON GITHUB</a> <span style="float:right;">'+stafork+'</span> </div> </div> </div> </div>'+'</li>';
	      localStorage.setItem(repositories[index].name, repositories[index].html_url);
            });
	    outhtml = outhtml + '</ul></div>'; 
          }
          $('#ghapidata').html(outhtml);
        } // end outputPageContent()
      } // end else statement
    }); // end requestJSON Ajax call
  }); // end onpageload event handler
  
  function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }
});
  </script>
