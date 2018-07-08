# realgeoffrey.github.io
Powered by [Hexo](https://github.com/hexojs/hexo) + [next](https://github.com/iissnan/hexo-theme-next), hosted by GitHub Pages.

### Hexo的命令
><details>
><summary>约定</summary>
>
>1. `[内容]`选填；`<内容>`必填。
>2. 以下命令需要进入`blog`路径中进行（`cd blog`）。
></details>

1. 新建一篇（发布/草稿）文章

    ```bash
    hexo new [layout] <title>
    ```
    ><details>
    ><summary><code>[layout]</code>可以选择<code>scaffolds</code>文件夹下的多种模式</summary>
    >
    >1. `post`：发布
    >2. `draft`：草稿，不会发布。（需要用命令`hexo publish <filename>`把`_drafts`移动到`_posts`）
    ></details>
2. 启动本地开发服务器

    ```bash
    hexo server # 或：hexo s
    ```
3. 发布（生成静态文件、并且部署网站）

    ```bash
    hexo g -d   # 或：hexo d -g
    
    # 可能需要输入github的账户名、密码
    # 也可以用 npm run publish
    ```
4. 清理缓存（发布前后或本地服务器看不到更新内容时）

   ```bash
   hexo clean
   ```

### 配置
1. Hexo总体配置：`_config.yml`
2. themes的配置：`themes/next/_config.yml`
3. themes的微调

### 移植、升级博客
1. 保留文章资源和配置

    1. 文章资源：`source/`下的所有文件
    2. 配置（Hexo和themes）：`_config.yml`
    3. 其他在主题代码中的改动
2. 新建博客配置：

    ```bash
    # 1. 新建Hexo配置
    hexo init blog
    
    # 2. 进入文件夹
    cd blog
    
    # 3. 安装Hexo依赖
    npm install
    
    # 4. 把保留文章资源和配置复制进来（手动复制）
    
    # 5. 安装主题和插件（不需要npm安装）

    # 6. 按照Hexo的命令进行发布
    ```
