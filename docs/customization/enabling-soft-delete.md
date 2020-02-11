# 使用软删除


这只是为了帮助您在Voyager中启用模型的软删除，请参考 [Laravel 文档](https://learnku.com/docs/laravel/5.8/eloquent/3931#soft-deleting) 了解更多详情.

## 在Voyager配置表信息

使用选择了“添加软删除”按钮的数据库管理器创建表时，以及向已添加模型名称的表添加BREAD功能时，只需编辑模型文件即可在该表上完全启用软删除。


## 编辑表的模型

一个默认的表模型，看起来是这样的:

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class YourModelName extends Model
{

}
```

正好把他变成:

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Documento extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
}
```

从现在起，每次从该表中删除记录时，它实际上不会被删除，只有 `deleted_at` 列将使用当前时间戳写入。



