# 助手方法

Voyager 有几个助手函数可以使用。在这里您可以找到可以加快开发速度的可用功能列表。


## 缩略图URL

Voyager可以为图片字段生成缩略图

生成缩略图后，可能需要在视图中显示缩略图或获取缩略图URL。为了做到这一点，你需要在你的模型中添加`Resizable`  traits

```php
use TCG\Voyager\Traits\Resizable;

class Post extends Model
{
    use Resizable;
}
```

### 只显示一种尺寸的图片

```php
@foreach($posts as $post)
    <img src="{{Voyager::image($post->thumbnail('small'))}}" />
@endforeach
```

或者您可以指定可选的图像字段名（属性），默认为`image`

```php
@foreach($posts as $post)
    <img src="{{Voyager::image($post->thumbnail('small', 'photo'))}}" />
@endforeach
```

### 显示多个图片

```php
@foreach($posts as $post)
    $images = json_decode($post->images);
    @foreach($images as $image)
        <img src="{{ Voyager::image($post->getThumbnail($image, 'small')) }}" />
    @endforeach
@endforeach
```

