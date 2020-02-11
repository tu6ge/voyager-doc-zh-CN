# 复选框

```php
{
    "on" : "On Text",
    "off" : "Off Text",
    "checked" : true
}
```
在Voyager中，复选框转换为切换开关，如上图所示，当切换开关打开时，`on`键将包含该值，`off`键将包含该开关关闭时设置的值。如果将`checked`设置为`true`，则复选框默认将打开；否则默认情况下将关闭。

# 多种复选框

```php
{
    "checked" : true,
    "options": {
        "checkbox1": "Checkbox 1 Text",
        "checkbox2": "Checkbox 2 Text"
    }
}
```
你可以根据自己的想法创建更多的复选项

# 单选按钮

```php
{
    "default" : "radio1",
    "options" : {
        "radio1": "Radio Button 1 Text",
        "radio2": "Radio Button 2 Text"
    }
}
```
单选按钮与下拉菜单完全相同。如果尚未设置“默认值”，则可以指定 `default` 。在`options` 对象中，您将在**左侧**指定选项的“值”，
并在**右侧**指定要显示的“文本”。