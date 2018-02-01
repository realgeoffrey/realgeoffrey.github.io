# realgeoffrey.github.io
Demos.

### PS
1. github.io居然无法识别`_`前缀的文件!
2. GitHub的commits居然是按照用户本地推送时间来记录的……
3. 图片引用的多种形式：
    
    ![外网也可使用1](https://github.com/realgeoffrey/realgeoffrey.github.io/raw/master/images/github.png)
    ![外网也可使用2](https://raw.github.com/realgeoffrey/realgeoffrey.github.io/master/images/github.png)
    ![文件相对位置](./images/github.png)
    
    以上图片是下面的语法
    ```markdown
    ![外网也可使用1](https://github.com/realgeoffrey/realgeoffrey.github.io/raw/master/images/github.png)
    ![外网也可使用2](https://raw.github.com/realgeoffrey/realgeoffrey.github.io/master/images/github.png)
    ![文件相对位置](./images/github.png)
    ```
4. github的markdown居然可以直接上HTML内容！

    <details>
    <summary><del>简</del><code>直</code><strong>厉</strong>害</summary>
    
    >不过就是`<summary>`里面要也要用HTML内容，并且隐藏内容要空一行才可以用markdown语法。
    
    ```markdown
    <details>
    <summary><del>简</del><code>直</code><strong>厉</strong>害</summary>
    
    >不过就是`<summary>`里面要也要用HTML内容，并且隐藏内容要空一行才可以用markdown语法。
    </details>
    ```
    </details>
