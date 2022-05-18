import React from "react"
import "../src/news.css"
function News()  {
    return (
            <>
          <ul id="listticker">
	<li>
		<img src="img/1.png" />
		<a href="" className="news-title">Health care reform</a>
		<span className="news-text">President Obama has announced three bedrock requirements for real health care reform</span>
	</li>
	<li>
		<img src="img/2.png" />
		<a href="" className="news-title">National Geographic Animals</a>
		<span className="news-text">Killer whales, Bengal tigers, crocs, more</span>
	</li>
	<li>
		<img src="img/3.png" />
		<a href="" className="news-title">Spotlight stars</a>
		<span className="news-text">Marilyn Manson is not exactly a conformist. From his music — a meat-grinder...</span>
	</li>
	<li>
		<img src="img/4.png" />
		<a href="" className="news-title">Lost: the new serie is coming</a>
		<span className="news-text">Watch full episodes online. The final season begins early 2010</span>
	</li>
</ul>
        </>
  
    );
  }
  export default News