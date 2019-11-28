# Rime 鼠鬚管配色主題產生器

## 使用
☞ [Rime 西米 for Squirrel](https://gjrobert.github.io/Rime-See-Me-squirrel/)，單頁式應用程式

都設定好後，將最右欄「產生設定碼」下方全部複製起來，再放到 squirrel.custom.yaml 中。

### 【新功能】讀入現有主題設定檔
若已有如下列格式的 YAML 主題單檔：

```yaml
#Rime theme ← 此行非必要
color_scheme_uji_kintoki_light: #檔內只能有這個頂層物件。但此行也不一定要依這個格式命名
  #以下每行前面均須空 2 格
  name: 宇治金時（淡）
  author: GHSRobert Ciang <robertus0617@gmail.com>
  back_color: '0xECE2F2' #★重要！限於目前程式功能，以下每項色碼前後務必均須加上 ' ' 才能順利以字串格式讀入處理，此與常見 Rime YAML 設定格式較不同。
  border_color: '0x573270'
  text_color: '0x32705A'
  hilited_text_color: '0x705432'
  hilited_back_color: '0x7DC4AB'
  hilited_candidate_text_color: '0xF1EBF6'
  hilited_candidate_back_color: '0x573270'
  hilited_candidate_label_color: '0x7DC4AB'
  hilited_comment_text_color: '0xF6F1EB'
  candidate_text_color: '0x327051'
  comment_text_color: '0x705432'
  label_color: '0x000201'
```
則可使用網頁最下方的按鈕，選取檔案並讀入，該檔中的配色方案名稱、作者資訊、各處色碼設定均可載入「輸入欄位」及右欄「設定碼」區，並套用到最左欄「預覽區」中。也就是說，可以讀取現有主題，再進一步修改，產生新的主題。

## 銘謝
fork 自 https://github.com/bennyyip/Rime-See-Me<br>
（因為有了「Rime 西米」，讓我很快做出我的第一個配色方案：[rime-theme-uji_kintoki 宇治金時](https://github.com/GJRobert/rime-theme-uji_kintoki/)。**謝謝 bennyyip ！** 我順便偷打一下廣告 QQ）

"All credit goes to http://tieba.baidu.com/p/2491103778 and https://github.com/bennyyip/Rime-See-Me"

---

讀檔功能感謝：

* js-yaml
* CDNJS.com
* Stack Overflow、MDN、W3School 等教學網站
