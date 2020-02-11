# 配置

随着Voyager的安装成功，你将在你的文件系统中看到新的配置文件（`config/voyager.php`）
在这个文件中，您可以找到各种选项来更改您的Voyager安装的配置

::: warning 温馨提示
如果你缓存了你的配置文件，你应该运行`php artisan config:clear`用于重新生成配置缓存
:::

下面我们将深入了解配置文件，并给出每个配置的详细描述。

## Users

```php
<?php

'user' => [
    'add_default_role_on_register' => true,
    'default_role'                 => 'user',
    'admin_permission'             => 'browse_admin',
    'namespace'                    => App\User::class,
    'redirect'                     => '/admin'
],
```

- **add\_default\_role\_on\_register:** 是否要将默认角色添加到所有新创建的用户
- **default\_role:** 你也可以通过 **default\_role** 为用户指定一个默认角色
- **admin\_permission:** 查看管理后台仪表板所需的权限
- **namespace:** 你应用的User模型的命名空间
- **redirect:** 登录后跳转的链接

## Controller

```php
<?php

'controllers' => [
    'namespace' => 'TCG\\Voyager\\Http\\Controllers',
],
```

你可以为Voyager指定控制器的命名空间. 如果您想覆盖Voyager的任何核心功能，可以复制Voyager控制器并指定自定义控制器的位置

::: warning 覆盖一个控制器
如果你只想覆盖一个控制器，你可以在你应用的`AppServiceProvider`文件中的`register` 方法中这样写
`$this->app->bind(VoyagerBreadController::class, MyBreadController::class);`
:::

## Model

```php
<?php

'models' => [
    //'namespace' => 'App\\',
],
```

可以指定模型的命名空间或位置。这在从Voyager的数据库部分创建模型时使用。如果未定义，则将使用默认的应用程序命名空间。

## Assets

```php
<?php

'assets_path' => '/vendor/tcg/voyager/assets',
```

您可能希望指定其他的资源路径。
如果站点位于子文件夹中，则可能需要将该目录包含到路径的开头。如果希望复制已发布的资源并自定义自己的资源，也可以使用此选项。



::: warning 提示
升级到新版本的voyager时，可能需要覆盖位于`/vendor/tcg/voyager/assets`目录中的资源，因此如果要自定义任何样式，
则需要复制该目录并指定资源路径的新位置。
:::

## Storage

```php
<?php

'storage' => [
    'disk' => 'public',
],
```
Voyager默认会使用`public`本地文件系统，另外你也可以指定一个在`config/filesystems.php`定义过的其他文件系统
，你可以使用 S3, Google Cloud Storage或其他的文件系统.

## Database

```php
<?php

'database' => [
    'tables' => [
        'hidden' => ['migrations', 'data_rows', 'data_types', 'menu_items', 'password_resets', 'permission_role', 'settings'],
    ],
    'autoload_migrations' => true,
],
```

您可能希望在Voyager数据库部分隐藏一些数据库表。在数据库配置中，您可以选择要隐藏哪些表。
当运行`php artisan migrate` 的时候`autoload_migrations` 可以允许您从加载中排除Voyager迁移文件.

## 多语言

```php
<?php

'multilingual' => [
    'enabled' => false,
    'default' => 'en',
    'locales' => [
        'en',
        //'pt',
    ],
],
```

你可以使用`enable`指定，是否开启多语言设置， 也可以通过`default`指定默认的语言，以及通过`locales`指定可选的语言列表

关于多语言的信息，[点击查看更多](../core-concepts/multilanguage) 

## 仪表盘

```php
<?php

'dashboard' => [
    'navbar_items' => [
        'Profile' => [
            'route'         => 'voyager.profile',
            'classes'       => 'class-full-of-rum',
            'icon_class'    => 'voyager-person',
        ],
        'Home' => [
            'route'         => '/',
            'icon_class'    => 'voyager-home',
            'target_blank'  => true,
        ],
        'Logout' => [
            'route'      => 'voyager.logout',
            'icon_class' => 'voyager-power',
        ],
    ],
    'widgets' => [
        'TCG\\Voyager\\Widgets\\UserDimmer',
        'TCG\\Voyager\\Widgets\\PostDimmer',
        'TCG\\Voyager\\Widgets\\PageDimmer',
    ],
],
```

在仪表盘的配置中，你可以添加一个 **navbar\_items**, make the **data_tables** responsive, and manage your dashboard **widgets**.

**navbar_items** 在用户的下拉列表中，可以指定跳转的链接， 参数有 'route', 'icon_class'和 'target_blank'.

**data_tables** If you set 'responsive' to true the datatables will be responsive.

**widgets** 在这里，您可以管理仪表板上的小部件。您可以通过查看`tcg/voyager/src/Widgets`目录，获取已有的小部件.

## 主题色

```php
<?php

'primary_color' => '#22A7F0',
```

Voyager管理仪表板的默认主颜色为浅蓝色。您可以通过更改此配置的值来更改主颜色。

## 显示开发者提示信息

```php
<?php

'show_dev_tips' => true,
```

在“Voyager后台”中，有开发人员提示或通知，将向您显示如何引用Voyager中的某些值。通过将此配置值设置为false，可以选择隐藏这些通知。

## 附加的样式

```php
<?php

'additional_css' => [
    //'css/custom.css',
],
```

您可以添加自己的自定义样式表，这些样式表将包含在Voyager管理仪表板中。这意味着您可以通过添加自己的自定义样式表，为Voyager创建一个全新的主题。



[了解更多](../customization/additional-css-js).

::: warning 提示
填入的路径，将使用laravel的[asset](https://learnku.com/docs/laravel/6.x/helpers/5164#method-asset) 函数转换成实际路径
:::

## 附加 Javascript

```php
<?php

'additional_js' => [
    //'js/custom.js',
],
```

与此同时，您也可以添加将在Voyager管理仪表板中运行的自己的javascript。根据需要添加尽可能多的javascript文件。



 [了解更多](../customization/additional-css-js).

## Google 地图

```php
<?php

'googlemaps' => [
    'key'    => env('GOOGLE_MAPS_KEY', ''),
    'center' => [
        'lat' => env('GOOGLE_MAPS_DEFAULT_CENTER_LAT', '32.715738'),
        'lng' => env('GOOGLE_MAPS_DEFAULT_CENTER_LNG', '-117.161084'),
    ],
    'zoom' => env('GOOGLE_MAPS_DEFAULT_ZOOM', 11),
],
```

有一个名为**coordinates**的新表单域，允许您将google地图添加为数据类型。然后，用户可以在Google地图中拖放一个坐标，以在数据库中保存经度和纬度值。

在此配置中，您可以设置默认的谷歌地图键和中心位置。

## 允许的 Mimetypes

要允许/不允许通过媒体管理器上传文件类型，可以定义一个数组`allowed_mimetypes`：


```php
<?php

'allowed_mimetypes' => [
     'image/jpeg',
     'image/png',
     'image/gif',
     'image/bmp',
     'video/mp4',
],
```

如果要允许上传所有类型，可以使用以下命令：

```php
<?php

'allowed_mimetypes' => '*',
```

