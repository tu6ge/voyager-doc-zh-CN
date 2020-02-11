# 自定义看守器

从Voyager 1.2开始，您可以定义一个在整个Voyager中使用一个自定义的看守器。

为此，只需将新的看守器类名绑定到`VoyagerGuard`。

首先，确保您已经按照[Laravel文档](https://learnku.com/docs/laravel/5.8/authorization/3908#gates)定义了一个守卫

然后打开你的 `AuthServiceProvider` 在 register 方法中添加如下代码:

```php
$this->app->singleton('VoyagerGuard', function () {
    return 'your-custom-guard-name';
});
```

现在使用这个新的看守器，而不是默认的看守器。


# 举例 - 为Admins使用一个不同的模型和表

首先创建一个表. 就叫他 `admins`好了:  
```php
<?php
Schema::create('admins', function (Blueprint $table) {
    $table->bigIncrements('id');
    $table->bigInteger('role_id')->unsigned()->nullable();
    $table->string('name');
    $table->string('email')->unique();
    $table->string('avatar')->nullable()->default('users/default.png');
    $table->string('password')->nullable();
    $table->string('remember_token')->nullable();
    $table->text('settings')->nullable()->default(null);
    $table->timestamps();
    $table->foreign('role_id')->references('id')->on('roles');
});
```

以及扩展Voyagers用户模型的模型

```php
<?php

namespace App;

class Admin extends \TCG\Voyager\Models\User
{

}
```
接下来在你的`config/auth.php`中创建一个名字为`admin`的看守器：
```php
'guards' => [
    'admin' => [
        'driver' => 'session',
        'provider' => 'admins',
    ],

    // ...
],
```
并且创建一个名字是 `admins`的用户提供器:
```php
'providers' => [
    'admins' => [
        'driver' => 'eloquent',
        'model' => App\Admin::class,
    ],

    // ...
],
```

接下来你得告诉Voyager使用你的新看守器。

打开你的 `AppServiceProvider.php` 并在 `register` 方法中添加如下代码:

```php
public function register()
{
    $this->app->singleton('VoyagerGuard', function () {
        return 'admin';
    });
}
```

::: warning 提示
请注意，user的BREAD仍然负责编辑用户，而不是管理员。
如果要更改admins，请为`admins`表创建一个BREAD。
:::