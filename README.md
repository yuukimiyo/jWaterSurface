jWaterSurface
===
Sample of javaScript and html5 canvas.

About
---
HTML5のキャンバスに波紋のような円を描くサンプルです。
「CanvasWater」のjQueryプラグイン版です

画面をクリックすると、クリックした場所を中心に円が拡大します。
(１つ以上の円の描写には問題があります)

Usage
---
次のようなHTMLファイルで動作します。

```html
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>CanvasWater</title>
<link rel="stylesheet" href="css/reset.css" />
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="js/jquery-1.7.2.js"></script>
<!--[if IE]>
<script type="text/javascript" src="js/excanvas.js"></script>
<![endif]-->
<script type="text/javascript" src="js/jquery.jwatersurface.js"></script>
<script type="text/javascript">
$(function() {
	$('#canvaswater').jwatersurface({wrapper:"wrapper", bgColor:"#000"});
});
</script>
</head>
<body>
<div id="wrapper">
<canvas id="canvaswater"></canvas>
</div>
</body>
</html>
```

Dependency
---
このソフトウェアは以下のコードを利用しています。
* jQuery-1.7.2
* excanvas.js (by Google Inc.)
* reset.css (by Yahoo! Inc.)

Change log
---
* 2012-11-02 ドキュメント作成
* 2012-10 目標達成