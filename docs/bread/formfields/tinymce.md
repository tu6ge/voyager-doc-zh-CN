# TinyMCE

如果您想在 Voyager 中自定义 TinyMCE ，可以在配置中添加一个附加的 JS 文件。

在这个文件中，您必须定义如下函数

```javascript
function tinymce_init_callback(editor)
{
    //...
}
```

如果需要在初始化 TinyMCE 之前对其进行操作，可以使用

```javascript
function tinymce_setup_callback(editor)
{
    //...
}
```
如果要自定义TinyMCE init 配置选项，可以在 BREAD details 中合并自定义选项，如下所示：

```json
{
    "tinymceOptions" : {
        "name": "value"
    }
}
```

如果要在默认模板富文本框之外使用tinyMCE，则需要使用以下命令对其进行初始化：

```javascript
tinymce.init(window.voyagerTinyMCE.getConfig());

```

有关所有可能的变量、函数和配置选项，请参阅[TinyMCE文档](http://tinymce.ax-z.cn/)