var e=function(e,t,n,i,s){var a=document.createElement("div"),o=document.createElement("h2"),c=document.createElement("p");a.classList.add("notification"),a.classList.add(s),o.classList.add("title"),o.textContent=n,c.textContent=i,a.append(o,c),a.style.top="".concat(e,"px"),a.style.right="".concat(t,"px"),document.body.append(a),setTimeout(function(){a.style.visibility="hidden"},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.453c4346.js.map
