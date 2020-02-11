# 使用 HTTPS

**症状:** 当使用HTTPS访问您的站点时，旅行者中的图像无法加载。

**原因:** 图片URL由Voyager创建

```php
Storage::disk(config('voyager.storage.disk'))->url($file);
```

如果将voyager.storage.disk设置为public，并且public disk是Laravel的默认disk，则磁盘配置中的url属性设置为

```php
'url' => env('APP_URL').'/storage',
```

它使用非HTTPS 的APP_URL值构建图像的绝对路径

**解决方案:** 如果你删除`env('APP_URL')`。从公共磁盘配置中，它将呈现一个与域相对的url，该url将始终使用当前域和协议保持一致

另外，如果需要完整的URL，可以用 `asset()`将对`Voyager::image('...')`的调用包装起来，这样

```php
asset(Voyager::image('...'))
```

这将返回到该进程的当前协议、域和正确路径。

