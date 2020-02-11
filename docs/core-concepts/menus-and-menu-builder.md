# 菜单和菜单生成器

使用Voyager，您可以轻松地为应用程序创建菜单。实际上，Voyager管理后台正是使用的菜单生成器创建的左侧导航

单击“菜单生成器”按钮可以查看当前菜单。您可以添加、编辑或删除任何当前菜单。这意味着您可以为网站的页眉、边栏或页脚创建新菜单。创建任意数量的菜单。

准备向菜单添加菜单项时，可以单击相应菜单的“生成器”按钮：



![](../.gitbook/assets/menu_1.jpg)

这将带您进入菜单生成器，您可以在其中添加、编辑和删除菜单项。

![](../.gitbook/assets/menu_2.jpg)

创建和配置菜单后，您可以在应用程序中轻松显示该菜单。假设我们有一个名为`main`的菜单。在任何视图文件中，我们现在可以使用以下代码输出菜单：

```php
menu('main');
```

这将把你的菜单输出到一个无样式的列表中。如果您确认使用bootstrap设置web应用的样式，则可以向menu 方法传递第二个参数，告诉它您希望使用如下bootstrap样式设置菜单的样式：

```php
menu('main', 'bootstrap');
```

再往前走一步，你甚至可以指定你自己的视图和风格化你的菜单，如你所想。假设我们有一个位于`resources/views/my_menu.blade.php`的文件，其中包含以下代码：

```markup
<ul>
    @foreach($items as $menu_item)
        <li><a href="{{ $menu_item->link() }}">{{ $menu_item->title }}</a></li>
    @endforeach
</ul>
```

然后你就可以使用下面这种方式，引用上面这个文件，使用这个文件的方式来渲染菜单

```php
menu('main', 'my_menu');
```

## 以 JSON格式输出菜单

如果您不想呈现您的菜单，而是获取一个数组，则可以将第二个参数设置为`_json` 。例如：

```php
menu('main', '_json')
```
这样可以方便你使用比较流行的前端框架（vue等）来渲染菜单
