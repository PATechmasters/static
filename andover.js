var body = document.getElementsByTagName('body')[0];
var mj = document.createElement("script");
mj.type = "text/x-mathjax-config";
mj[(window.opera ? "innerHTML" : "text")] =
"MathJax.Hub.Config({\n tex2jax:{ inlineMath: [['$','$'], ['\\\\(','\\\\)']], ignoreClass: \"tex2jax_ignore|answer_text|answer_comment_html\" }\n});"
body.appendChild(mj);
mj = document.createElement("script");
mj.type = "text/javascript";
mj.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML";
body.appendChild(mj);
