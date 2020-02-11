# 路由

运行完voyager安装程序后，您将看到一些新的路由，它们已添加到`routes/web.php`文件中，如下所示：

```php
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
```

这就是Voyager提供路由的地方。如果需要，可以更改`admin`前缀，或者你可以根据自己需要来配置其他路由选项，如`middleware` or `domain`。


当我们创建一个新的BREAD类型并且指定了slug后，你可以使用下面的链接访问到他:

```text
URL /admin/slug-name
```

举例来说，如果你有一个`products`表，并且我们规定了他的slug是`products`，那么你现在可以访问这个链接

```text
URL /admin/products
```

::: warning 注意
您可能在管理菜单中看不到指向新创建的路由或BREAD的链接，要创建新的菜单链接，请访问文档[菜单管理](menus-and-menu-builder)
:::

