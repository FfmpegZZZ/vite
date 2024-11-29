# 部署

由于本项目是 **Koishi** 聊天机器人整合包，所以同样支持 [Koishi](https://koishi.chat) 官方所支持的所有部署方式。


## 模板项目（推荐）

::: danger
注意 模板项目并非 Koishi 所推荐的用户使用的部署方式，所以你也不能用此部署方式在Koishi用户群获取支持
:::

### 安装Node.Js
 Koishi 需要 [Node.js](https://nodejs.org/zh-cn) (最低 v18，推荐使用 LTS) 运行环境，你需要自己安装它。

#### 下载安装包
首先我们前往 [Node.js](https://nodejs.org/zh-cn) 的官方网站：
![alt text](.\image\Nodejs.png)
**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
