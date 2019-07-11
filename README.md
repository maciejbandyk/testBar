# Test Bar

You can find example use of this widget below:
https://maciejbandyk.github.io/testBar/

It's a bar you can specify two things on: message and position. 
Available positions: *top*, *bottom*, *initial*.
You can use on your site and it's very simple!

First of all, you need to attach 2 things to your index.html file.

1. In head element add css file with widget style configuration
```<link rel="stylesheet" href="widget.css" />```

2. Add within body element:
```html
<script src="widget.js" charset="utf-8"></script>
<script type="text/javascript">
let myBar = new TaskBar({
    message: 'add beautiful widgets to your website',
    position: 'top'
});
</script>
```

Modify message or position to see how it looks on your website!
