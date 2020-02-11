# BREAD 访问器

有时您只想为一个（或某些）BREAD操作格式化属性。
例如，如果您有一个`name`字段，并且在该字段为空时，您希望在浏览页面上显示某些内容，则可以在模型中定义以下内容：

```php
<?php

public function getNameBrowseAttribute()
{
    return $this->name ?? 'Empty';
}
```

如果实际字段为空，则显示“Empty”，否则返回值。

同样，您也可以对其他BREAD操作执行相同的操作：

```php
<?php

public function getNameReadAttribute()
{
    //
}

public function getNameEditAttribute()
{
    //
}

public function getNameAddAttribute()
{
    //
}
```

