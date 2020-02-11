# 自定义关联属性

从Voyager 1.1开始，您可以在关系中显示的其他属性。

例如，一篇文章有作者，你想显示用户的全名。为此，我们首先需要 [define an Accessor](https://laravel.com/docs/eloquent-mutators#defining-an-accessor)

```php
public function getFullNameAttribute()
{
    return "{$this->first_name} {$this->last_name}";
}
```

之后，我们需要告诉Voyager我们要使用一个访问器：

```php
public $additional_attributes = ['full_name'];
```

就是这样，现在你可以使用`full_name` 在你的关联中

