# 网站设置

“设置”部分允许您添加所需的任何站点范围的设置。您可以为网站徽标添加图像上载设置，也可以为主页上的主标题添加文本框。

![](../.gitbook/assets/settings.png)

在这个新版本中，您可以为不同的设置添加不同的组。因此，如果您在`site`组中创建了一个新设置，并且该设置的键为`title`，则可以通过执行以下操作引用该设置：

```php
<?php
echo setting('site.title');
```

或者在任意blade模板中引用这个设置项

```text
{{ setting('site.title') }}
```

所以，现在您可以在Voyager中添加各种设置并在应用程序中引用它们。

