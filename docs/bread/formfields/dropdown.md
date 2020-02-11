# 下拉列表

```php
{
    "default" : "option1",
    "options" : {
        "option1": "Option 1 Text",
        "option2": "Option 2 Text"
    }
}
```
当指定输入类型应该是下拉列表时，需要指定该下拉列表的值。在上面的JSON中，如果下拉列表没有值，则可以指定`default`的值作为下拉列表的默认值。此外，在 `options`对象中，您可以在**左侧**指定选项的值，并在**右侧**指定要显示的文本。

