var e=document.querySelector(".logo"),n=document.querySelector("body"),t=document.createElement("div");t.classList.add("message");var r=document.createElement("div");r.classList.add("message","error-message");var o=new Promise(function(n){e.addEventListener("click",function(){n("Promise was resolved!")})}),c=new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)});o.then(function(e){t.innerText=e,n.appendChild(t)}),c.catch(function(e){r.innerText=e,n.appendChild(r)});//# sourceMappingURL=index.f06415e7.js.map

//# sourceMappingURL=index.f06415e7.js.map
