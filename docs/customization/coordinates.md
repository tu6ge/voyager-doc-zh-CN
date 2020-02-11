# 坐标

有了Voyager，你可以存储坐标并从地图中选择它们。

为此，首先需要确保表中的列是 `GEOMETRY` 或 `POINT`

之后，必须在模型中包含空间特征并定义列：

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Spatial;

class Category extends Model
{
    use Spatial;

    protected $spatial = ['your_column'];
}
```

现在你可以在这个表的BREAD设置页，将你的字段设置为 `Coordinates`类型

然后你就可以使用一个地图来选择你要输入的坐标了

::: warning 提示
请确保你已经在你的[配置文件](../getting-started/configurations#google-maps)中设置号了Google Maps的api key。
这也是您可以定义地图默认位置的地方
:::

## 获取坐标信息

你可以使用如下方式获取你的坐标信息

```php
$model->getCoordinates();
```

这将返回一个包含`lat`（纬度）`lng`（经度）的坐标信息数组
