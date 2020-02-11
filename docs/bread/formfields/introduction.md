# 表单域

表单域是BREAD系统的一大亮点。
每一个表单域在BREAD中都对应一个你的数据库的字段的类型
如下所述，你可以使用json格式的选择调整你的表单域

所有的表单类型都有如下配置项:

## 描述信息

所有的类型都包含一个描述信息，用于帮助别人理解这个字段的含义，你可以在BREAD设置页的每个字段的详细设置项里这样设置他

```json
{
    "description": "A helpful description text here for your future self."
}
```

## 显示配置

当可以对BREAD默认的展示形式进行一些小的修改，使用`display`关键字，可以设置这列数据的显示宽度甚至可以为这一列定义一个id

```json
{
    "display": {
        "width": "3",
        "id": "custom_id"
    }
}
```

这个宽度使用的12栅格布局系统，如果设置成3，最终这列数据显示的宽度是25%

这个 **id** 的设置，最终效果如下:

```html
<div id="custom_id">
    <!-- Your field element -->
</div>
```

## 默认值

很多表单域允许你在添加记录的时候，设置一个默认值

```json
{
    "default" : "Default text"
}
```

## Null Values

你可能希望在数据库中保存的数据是一个`null`,而不是一个空字符串

你可以这样设置:

```json
{
    "null": ""
}
```

这样的话，如果你想插入一个空值，可以在文本框中输入`null`,但是有时候你即需要输入空值，又希望可以输入字符串`null`,你可以做如下修改，给null配置项加上一个值，比如是`Nothing`,这样，当你输入`Nothing`,就等于输入了一个空值

```json
{
    "null": "Nothing"
}
```

## 生成Slugs

使用BREAD 可以使用一个确定的字段自动生成url slug，假如你有title字段，你希望用slug字段来存储url slug，你可以使用下面的代码
放到slug字段的*详细配置*里面，然后就可以自动生成了

```json
{
    "slugify": {
        "origin": "title",
        "forceUpdate": true
    }
}
```
当一个slug已经存在的时候，只有把 `forceUpdate`设置为`true`的时候，才可以更新这个slug，这个设置默认是 `false`

## 自定义视图

如果你需要对一个表单字段使用自定义的视图，用来满足你的特定的业务需求，你可以为这个字段作如下设置:

```json
{
    "view": "my_view"
}
```

这将会从`resources/views` 加载`my_view`代替该表单域的默认视图

您将获得大量数据传递到视图供您使用:

* `$view` 存在于 `browse`, `read`, `edit`, `add` or `order`视图中
* `$content` 这个表单域的内容
* `$dataType` 该字段的数据类型
* `$dataTypeContent`  整个模型的实例
* `$row` 一行数据，可以用这个获取该条记录的其他表单域内容
* `$options` 字段的详细配置，本例中的`{"view": "my_view"}`

::: warning 开发一个自定义的表单域？

If you are developing a custom formfield and want to customize any of the views, you can do so by merging `view` into `$options` in your formfields `createContent()` method.
:::
