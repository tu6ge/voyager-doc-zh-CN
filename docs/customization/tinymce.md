# TinyMCE

如果您想在Voyager中自定义TinyMCE，可以在配置中添加一个[附加的JS文件](additional-css-js)。

在这个文件中，您必须定义如下函数

```javascript
function tinymce_init_callback(editor)
{
    //...
}
```

如果需要在TinyMCE初始化之前做一些操作，可以使用

```javascript
function tinymce_setup_callback(editor)
{
    //...
}
```

现在您可以控制页面上的TinyMCE实例的所有变量和函数

 请查看 [TinyMCE 文档](http://tinymce.ax-z.cn/).

