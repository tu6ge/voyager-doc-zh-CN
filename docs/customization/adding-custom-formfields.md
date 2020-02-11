# 添加自定义的表单域

您可以轻松地向Voyager添加新的表单域。在下面的示例中，我们将添加一个数字表单域（默认情况下已包含在Voyager中）

首先，我们在项目中创建一个名为`NumberFormField`的新类（放在哪里都可以）`

```php
<?php

namespace App\FormFields;

use TCG\Voyager\FormFields\AbstractHandler;

class NumberFormField extends AbstractHandler
{
    protected $codename = 'number';

    public function createContent($row, $dataType, $dataTypeContent, $options)
    {
        return view('formfields.number', [
            'row' => $row,
            'options' => $options,
            'dataType' => $dataType,
            'dataTypeContent' => $dataTypeContent
        ]);
    }
}
```

`codename`变量用于您在BREAD builder中看到的下拉列表中。在`createContent`方法中，我们返回用于显示表单字段的视图。


接下来，我们将创建上面指定的视图

```markup
<input type="number"
       class="form-control"
       name="{{ $row->field }}"
       data-name="{{ $row->display_name }}"
       @if($row->required == 1) required @endif
             step="any"
       placeholder="{{ isset($options->placeholder)? old($row->field, $options->placeholder): $row->display_name }}"
       value="@if(isset($dataTypeContent->{$row->field})){{ old($row->field, $dataTypeContent->{$row->field}) }}@else{{old($row->field)}}@endif">
```

在这个视图中，我们可以添加任何我们想要的逻辑。

当我们完成视图时，我们将告诉Voyager我们有一个新的表单域。我们将在服务提供程序中执行此操作（在下面的示例中，我们使用`AppServiceProvider`。


```php
<?php

namespace App\Providers;

use TCG\Voyager\Facades\Voyager;
use App\FormFields\NumberFormField;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    //..

    public function register()
    {
        Voyager::addFormField(NumberFormField::class);
    }
}
```

