# 附加 CSS 和 JS

从最新版本开始，您现在可以向voyager的`master.blade`添加其他CSS和JS文件，而无需复制或修改blade文件本身，从而避免以后可能出现的手动迁移问题。CSS和JS文件添加在任何Voyager资源之后，这样您就可以轻松地覆盖样式和功能。

这都是通过 `voyager.php` 配置文件处理的：

```php
// Here you can specify additional assets you would like to be included in the master.blade
'additional_css' => [
    //'css/custom.css',
],
'additional_js' => [
   //'js/custom.js',
],
```

::: warning 注意
填入的路径，将使用laravel的[asset](https://learnku.com/docs/laravel/6.x/helpers/5164#method-asset) 函数转换成实际路径
:::

