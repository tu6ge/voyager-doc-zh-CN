# 角色和权限

Voyager有现成的角色和权限。Voyager会为每个用户都分配一个角色，每个角色都有一组权限。

在管理后台，您可以选择添加、编辑或删除角色。另外，当您单击以编辑特定角色时，可以指定BREAD权限。

![](../.gitbook/assets/role.png)

新版本1.0中，我们已经更改了旅行者的授权系统，使其[更符合Laravel](https://laravel.com/docs/authorization#authorizing-actions-using-policies).
这意味着您可以通过以下方式检查权限

```php
// via user object
$canViewPost = $user->can('read', $post);
$canViewPost = Auth::user()->can('read', $post);

// via controller
$canViewPost = $this->authorize('read', $post);
```

默认情况下，您可以使用一些现成的权限:

* `browse_admin`: 允许或拒绝用户浏览Voyager 管理面板
* `browse_database`: 允许或拒绝用户浏览Voyager 数据库管理器
* `browse_bread`: 允许或拒绝用户浏览Voyager BREAD管理器
* `browse_media`: 允许或拒绝用户浏览Voyager 媒体管理器
* `browse_menu`: 允许或拒绝用户浏览Voyager 菜单管理器
* `browse_settings`: 允许或拒绝用户浏览Voyager 网站设置
* `read_settings`: 允许或拒绝用户浏览Voyager 查看或读取网站设置
* `edit_settings`: 允许或拒绝用户浏览Voyager 编辑网站设置
* `add_settings`: 允许或拒绝用户浏览Voyager 添加网站设置
* `delete_settings`: 允许或拒绝用户浏览Voyager 删除网站设置

另外，当你生成每一个BREAD类型的时候，会有一个`生成权限`的选项，选中后会自动生成`browse`, `read`, `edit`, `add` 和 `delete`权限

例如, 我们已经为`products`表创建了一个新的BREAD类型. 如果我们选中了`生成权限`选项. 我们的权限列表中会增加 `browse_products`, `read_products`, `edit_products`, `add_products` 和 `delete_products`这些权限

::: warning 注意
如果菜单项与任一BREAD关联，则它将检查`browse`权限，例如“Posts”BREAD菜单项，它将检查`browse_posts`权限。如果用户没有该权限，则该菜单项将不会显示。
:::

## 为自定义页面创建权限

如果创建自定义页，并且只希望允许特定用户角色访问该页，则可以使用权限。

只有当slug直接位于`/admin/`之后才有效。因此对于`/admin/sub/foo`这种的自定义页面，菜单项不会从菜单中隐藏。

### 创建权限

首先，在permissions表中创建一个权限（你可以使用BREAD ，model名称是`TCG\Voyager\Models\Permission`来创建）。`table_name`字段应设置为空。`key`字段的格式应为 `browse_slug`，其中 `slug`必须替换为自定义页的实际slug。例如，要限制对url`/admin/create_bill`的自定义页的访问，可以创建`browse_create_bill`权限。

### 设置角色
在`admin/roles`路径中检查要授予访问站点的每个角色的权限。在上面的例子中，您会发现一个名为“浏览创建账单”的新复选框。如果用户没有所需的权限，则指向自定义页的菜单项将被隐藏。

### 自定义的控制器
你可以创建自己的 [Gate](https://learnku.com/docs/laravel/5.8/authorization/3908#gates) 

```php
Gate::define(`browse_create_bill`, function ($user) {
    return $user->hasPermission(`browse_create_bill`);
});
```
    
在你的控制器中使用 `authorize` :

```php
public function index()
{
  $this->authorize('browse_create_bill');
  //..
```

如果这样做，请确保将自定义看守器添加到了控制器:

```php
  /**
   * Get the guard to be used during authentication.
   *
   * @return \Illuminate\Contracts\Auth\StatefulGuard
   */
  protected function guard()
  {
      return Auth::guard(app('VoyagerGuard'));
  }
```



## 在Blade模板中使用权限

您还可以使用blade语法检查权限。例如，假设您想检查用户是否可以“浏览”帖子，很简单，我们可以使用以下语法：

```php
@can('browse', $post)
    I can browse posts
@endcan
```

或者您可能需要运行其他条件才能获得许可。很简单：
```php
@can('browse', $post)
    I can browse posts
@else
    I cannot browse posts
@endcan
```

再简单不过了，对吧

