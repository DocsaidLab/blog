---
sidebar_position: 4
---

# 進階用法

除了基本的使用方法外，`WordCanvas` 還提供了一些進階的設定，讓你可以更靈活地控制輸出的文字圖像。在這裡我們引入隨機性的設定，這些特性主要被用來訓練模型。

## 隨機字型

使用 `random_font` 參數啟用隨機字型的功能。當 `random_font` 設定為 `True` 時，參數 `font_bank` 才會生效，同時，`font_path` 會被忽略。

你應該要指定 `font_bank` 參數到你的字型庫中，因為預設值為套件底下的目錄 `fonts`，為了範例說明，我們預先在 `fonts` 目錄下放了兩個字型，因此如果你沒有修改 `font_bank` 的話，就只會隨機選擇這兩個字型。

```python
import numpy as np
from wordcanvas import WordCanvas

gen = WordCanvas(
    random_font=True,
    output_size=(64, 512),
    font_bank="path/to/your/font/bank"
)

imgs = []
for _ in range(8):
    text = 'Hello, World!'
    img, infos = gen(text)
    imgs.append(img)

# 結合所有圖片一起輸出
img = np.concatenate(imgs, axis=0)
```

![sample17](./resources/sample17.jpg)

## 隨機文字內容

你可能不知道要生成什麼文字，這時候可以使用 `random_text` 參數。

當 `random_text` 設定為 `True` 時，原本輸入的 `text` 會被忽略。

```python
import numpy as np
from wordcanvas import WordCanvas

gen = WordCanvas(
    random_text=True,
    output_size=(64, 512),
)

imgs = []
for _ in range(8):
    text = 'Hello!World!' # 這個輸入會被忽略
    img, infos = gen(text)
    imgs.append(img)

# 結合所有圖片一起輸出
img = np.concatenate(imgs, axis=0)
```

![sample18](./resources/sample18.jpg)

## 指定字串長度

當啟用 `random_text` 時，你可以使用：

- `min_random_text_length`: 最小文字長度
- `max_random_text_length`: 最大文字長度

這兩個參數來指定文字的長度範圍。

```python
import numpy as np
from wordcanvas import WordCanvas

# 固定生成 5 個字元的文字
gen = WordCanvas(
    random_text=True,
    min_random_text_length=5,
    max_random_text_length=5,
    output_size=(64, 512),
)

imgs = []
for _ in range(8):
    img, infos = gen()
    imgs.append(img)

# 結合所有圖片一起輸出
img = np.concatenate(imgs, axis=0)
```

![sample19](./resources/sample19.jpg)

## 隨機背景顏色

使用 `random_background_color` 參數啟用隨機背景顏色的功能。

```python
import numpy as np
from wordcanvas import WordCanvas

gen = WordCanvas(
    random_background_color=True,
    output_size=(64, 512),
)

imgs = []
for _ in range(8):
    text = 'Hello, World!'
    img, infos = gen(text)
    imgs.append(img)

# 結合所有圖片一起輸出
img = np.concatenate(imgs, axis=0)
```

![sample20](./resources/sample20.jpg)

## 隨機文字顏色

使用 `random_text_color` 參數啟用隨機文字顏色的功能。

```python
import numpy as np
from wordcanvas import WordCanvas

gen = WordCanvas(
    random_text_color=True,
    output_size=(64, 512),
)

imgs = []
for _ in range(8):
    text = 'Hello, World!'
    img, infos = gen(text)
    imgs.append(img)

# 結合所有圖片一起輸出
img = np.concatenate(imgs, axis=0)
```

![sample21](./resources/sample21.jpg)

## 隨機文字對齊

使用 `random_align_mode` 參數啟用隨機文字對齊的功能。

```python
import numpy as np
from wordcanvas import WordCanvas

gen = WordCanvas(
    random_align_mode=True,
    output_size=(64, 512),
)

imgs = []
for _ in range(8):
    text = 'Hello, World!'
    img, infos = gen(text)
    imgs.append(img)

# 結合所有圖片一起輸出
img = np.concatenate(imgs, axis=0)
```
![sample22](./resources/sample22.jpg)

## 隨機文字方向

使用 `random_direction` 參數啟用隨機文字方向的功能。

建議將這個參數與 `output_direction` 一起使用，方便輸出影像。

```python
import numpy as np
from wordcanvas import WordCanvas, OutputDirection

gen = WordCanvas(
    random_direction=True,
    output_direction=OutputDirection.Horizontal,
    output_size=(64, 512),
)

imgs = []
for _ in range(8):
    text = '午安，或是晚安。'
    img, infos = gen(text)
    imgs.append(img)

# 結合所有圖片一起輸出
img = np.concatenate(imgs, axis=0)
```

![sample23](./resources/sample23.jpg)

## 全隨機

如果你想要所有的設定都是隨機的，可以使用 `enable_all_random` 參數。

啟用這個參數，開啟群魔亂舞模式。

```python
import numpy as np
from wordcanvas import WordCanvas

gen = WordCanvas(
    enable_all_random=True,
    output_size=(64, 512),
)

imgs = []
for _ in range(20):
    img, infos = gen()
    imgs.append(img)

# 結合所有圖片一起輸出
img = np.concatenate(imgs, axis=0)
```

![sample24](./resources/sample24.jpg)

:::warning
這個參數不會調整 `reinit` 系列的參數，例如 `random_font`、`random_text` 等，這些參數都需要自行設定。
:::

## 儀表板

我們再次回到儀表板。

![dashboard](./resources/dashboard.jpg)

在隨機性的相關參數啟用時，True 的參數會被標示為綠色，False 的參數會被標示為紅色。

我們希望可以透過這個設計，來讓你快速地確認相關設定。

## 小結

在開發工具的過程中，我們的目標是創建一個能夠靈活地生成各種文字圖像的工具，特別是為了機器學習模型的訓練。隨機性的引入旨在模擬現實世界中的各種情況，這對於提高模型的適應性和泛化能力有極大的幫助。