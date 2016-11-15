var header_expl = "<p>This is the <strong>&lt;header&gt;</strong> element.</p>\
<p>This has been styled to give a blue <strong>background</strong>. A <strong>font-family</strong> is also set and applies to any content inside the header i.e. a h1 and h3. </p>\
<p class=\"panel\">\
 header { <br>\
 background: #0288D1; <br>\
 padding: 1em 10%; <br>\
 font-family: arial, sans-serif; <br>\
 }</p>";

var body_expl = "<p>The <strong>&lt;body&gt;</strong> element represents the whole page. It has been styled to <ul><li>set the overall font and font size</li><li>set the light grey colour in the backgorund</li></ul></p>\
<p class=\"panel\">body {<br>\
font-family: 'Open Sans', sans-serif;<br>\
font-size: 16px;<br>\
line-height: 1.3;<br>\
margin: 0;<br>\
background: #EEEEEE;<br>\
color: #212121;<br>\
}</p>";

var hheading_expl = " <p>Both the <strong>&lt;h1&gt;</strong> and <strong>&lt;h3&gt;</strong> in the header are styled to be white. <strong>Margins</strong> are reset and their bold style removed.</p>\
 <p class=\"panel\">header h1, header h3 {<br>\
     color: #fff;<br>\
     margin: 0;<br>\
     font-weight: normal;<br>\
   }</p>";

var h1heading_expl = "<p>The <strong>&lt;h1&gt;</strong> in the header has its text transformed to uppercase. </p>\
<p class=\"panel\">header h1 {<br>\
  text-transform: uppercase;<br>\
}</p>";
var article_expl = "<p>The <strong>&lt;article&gt;</strong> element has been styled to give:<ul>\
  <li>a <strong>width</strong> of 80% of the web page's width</li><li><strong>margin</strong> is set to <strong>auto</strong> so it sits the article centrally</li><li>background is white</li><li><strong>padding</strong> is added to put some space around the inside edge </li></ul>\
  <p class=\"panel\">article {<br>\
  width: 80%;<br>\
  margin: 0 auto;<br>\
  background: #fff;<br>\
  padding: 1em;<br>\
}</p>";

var articleh_expl = "<p>This <strong>&lt;h1&gt;</strong> header has had its font changed to Georgia and has had the bold style taken off.</p>\
  <p class=\"panel\">article h1 {<br>\
    font-weight: normal;<br>\
    font-family: georgia, serif;<br>\
  }</p>";
  var avatar_expl = "<p>This is an image element with a class name attribute:</p>\
  <p class=\"panel\">&lt;img src=\"images/person-804035_640.jpg\" <span class=\"class\">class=\"author\"</span> /&gt;</p>\
  <p>The class allows me to style this image differently to other images by selecting it's class name.</p>\
  <p>In CSS, the image (by proxy of its class name) has been styled:</p>\
  <ul><li>a fixed width of 75px (pixels)</li><li>the circle is achieved by setting border radius (rounding of the corners) to 50%</li><li>a subtle border is added</li><li>the image is aligned to the middle of the line of text using vertical-align</li><li>anda bit of margin is added to the right to push it away from the text</li></ul>\
  <p class=\"panel\"><span class=\"class\">.author</span> {<br>\
  width: 75px;<br>\
  border-radius: 50%;<br>\
  border: 1px solid #bbb;<br>\
  vertical-align: middle;<br>\
  margin-right: 0.33em;<br>\
  }</p>";

  var articleh4_expl = "<p>The key CSS to this element's style are:</p><ul>\
    <li>red background colour</li><li>white text</li>\
    <li>setting the <strong>display</strong> property to <strong>inline</strong> makes the element only as wide as it's content</li>\
  </ul>\
  <p class=\"panel\">article h4 {<br>\
      text-transform: uppercase;<br>\
      font-weight: normal;<br>\
      font-size: 0.7em;<br>\
      background: #E53935;<br>\
      <span class=\"class\">display: inline;</span><br>\
      padding: 0.5em;<br>\
      color: #fff;<br>\
    }</p>";

    var imgcap_expl = "<p>For this we use a <strong>figure</strong> and <strong>figcaption</strong> with our image.</p><p class=\"panel\">\
      &lt;figure&gt;<br>\
      &lt;img src=\"images...\" /&gt;<br>\
      &lt;figcaption&gt;From fantasy to forge...&lt;/figcaption&gt;<br>\
    &lt;/figure&gt;</p>\
    <p>Reset the margin of the figure:</p>\
    <p class=\"panel\"> figure {<br>\
      margin: 0;<br>\
    }</p>\
    <p>Setting the max-width of the image will shrink it if it's oversized.</p>\
    <p class=\"panel\">figure img {<br>\
      max-width: 100%;<br>\
    }</p>\
    <p>The text in the figcaption can be styled however you want:</p>\
    <p class=\"panel\">figcaption {<br>\
      font-size: 0.66em;<br>\
    }</p>";

    var bq_expl = "<p> Blockquotes can be styled to add interest and waypoints to your content.</p><p>This blockquote has been styled to have</p>\
    <ul>\
      <li>a light grey background</li><li>darker grey borders on the top & bottom edges</li><li>a width and to sit centred in the content</li></ul>\
      <p class=\"panel\">blockquote {<br>\
      width: 66%;<br>\
      margin: 1em auto;<br>\
      background: #ddd;<br>\
      padding: 1em;<br>\
      font-size: 1.33em;<br>\
      text-align: center;<br>\
      border-bottom: 1px solid #999;<br>\
      border-top: 1px solid #999;<br>\
      }    </p>";

var footer_expl = "    <p>The footer's styling is quite simple.</p>\
    <p>The footer element is given some <strong>height</strong>, a dark grey <strong>background</strong> added and some <strong>padding</strong> to space the footer contents a bit. Text <strong>color</strong> is white. </p>\
    <p class=\"panel\">footer {<br>\
      background: #212121;<br>\
      color: #fff;<br>\
      height: 100px;<br>\
      padding: 1em 10%;<br>\
    }</p>";
// Define the tour!
    var tour = {
      id: "css-tour",
     scrollDuration: "500",
      steps: [
        {
          title: "The body",
          content: body_expl,
          target: "body_",
          placement: "right",
          showPrevButton: true,
          xOffset: "-50"
        },
        {
          title: "The header",
          content: header_expl,
          target: "header",
          placement: "bottom",
          yOffset: "-12"
        },
        {
          title: "The header's headings",
          content: hheading_expl,
          target: document.querySelector("#header span"),
          placement: "right",
          showPrevButton: true,
          yOffset: "-42"
        },
        {
          title: "The header's h1",
          content: h1heading_expl,
          target: document.querySelector("#header h1"),
          placement: "bottom",
          showPrevButton: true,
          yOffset: "-12"

        },

        {
          title: "The article",
          content: article_expl,
          target: "body_",
          placement: "right",
          showPrevButton: true,
          xOffset: "-14",
          width: "450"
        },
        {
          title: "The article's header",
          content: articleh_expl,
          target: "article-header",
          placement: "bottom",
          showPrevButton: true
        },
        {
          title: "The avatar image",
          content: avatar_expl,
          target: document.querySelector(".author"),
          placement: "right",
          showPrevButton: true,
          width: "500"

        },
        {
          title: "Nice little header",
          content: articleh4_expl,
          target: document.querySelector("article h4"),
          placement: "bottom",
          showPrevButton: true,
          width: "400",
          yOffset: "-10"
        },
        {
          title: "Image and caption",
          content: imgcap_expl,
          target: document.querySelector("figcaption"),
          placement: "top",
          showPrevButton: true,
          width: "500"

        },
        {
          title: "Block quote",
          content: bq_expl,
          target: document.querySelector("blockquote"),
          placement: "top",
          showPrevButton: true,
          width: "500"

        },
        {
          title: "The footer",
          content: footer_expl,
          target: document.querySelector("footer"),
          placement: "top",
          showPrevButton: true,
          width: "500"

        }
      ]
    };

    // Start the tour!
    // hopscotch.startTour(tour);

    /* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},

init = function() {
  var startBtnId = 'startTourBtn',
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(tour);
  }
  else {
    // Looking at the page for the first(?) time.
    setTimeout(function() {
      mgr.createCallout({
        id: calloutId,
        target: startBtnId,
        placement: 'right',
       yOffset: "-24",
        title: 'Take a tour of the CSS',
        content: 'You can take a tour of the CSS I used to style this page! ',

        width: 240
      });
    }, 100);
  }

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });
};

init();
