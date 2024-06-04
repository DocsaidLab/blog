# onnxruntime

## 2024-05-19 彙整報告

根據您提供的郵件內容，這些是從中提取的一些重要信息：



### 1. 錯誤修復

- 在使用Intel Arc (770)在Windows下運行OpenVINO時出現未知異常的問題。透過降級到`onnxruntime==1.15.0`和`openvino=2023.1.0`版本，成功解決了這個問題。這種降級的方法通常用於解決與庫或框架版本不兼容的問題，確保系統能夠正常運行。



### 2. 功能增加

- 有一個功能請求是希望添加`onnxruntime.get_available_device_ids()`方法，用於返回所有可用設備的列表。這個功能的添加可以幫助使用者更方便地查看系統中可用的設備，有助於進行設備的管理和選擇。



### 3. 討論的議題

- 討論了在Windows ARM64和X64執行CLIP圖像編碼器時產生不同結果的問題。這可能涉及到不同架構下的編碼器實現差異，需要進一步研究和解決以確保結果的一致性。



### 4. 成就

- 有一個合併的拉取請求，成功添加了OpenAI CLIP的融合功能。這個成就意味著成功將OpenAI的CLIP模型整合到系統中，為用戶提供更多功能和選擇。

- 另外，有一個拉取請求被合併，解決了C API文檔中的doxygen錯誤。這表明團隊對代碼質量和文檔準確性非常重視，持續改進和修復錯誤。



這些重要信息反映了在Microsoft的ONNX Runtime專案中進行的開發工作和討論議題。從錯誤修復到功能增加，再到討論的議題和取得的成就，團隊在不斷努力改進和完善系統。這些努力將有助於提高系統的穩定性、功能性和用戶體驗。



希望這些信息能幫助您更好地了解ONNX Runtime專案的最新進展和重要內容。如果您對任何部分有進一步的疑問或需要更多解釋，請隨時告訴我。



---



本日共彙整郵件： 41 封



以上報告由 OpenAI GPT-3.5 Turbo 模型自動生成。