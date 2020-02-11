# 重写路由

通过在 `Voyager::routes()`下面写入要覆盖的路由，可以覆盖任何Voyager的路由。例如：

```php
Route::group(['prefix' => 'admin'], function () {
   Voyager::routes();

   // Your overwrites here
   Route::post('login', ['uses' => 'MyAuthController@postLogin', 'as' => 'postlogin']);
});
```
这样就可以用新的路由覆盖登录页提交路由
