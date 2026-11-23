# MV1 個人知識庫維護規範 (AGENTS.md)

本知識庫專注於追蹤 F1 四屆世界冠軍 **Max Verstappen** 的生涯數據、賽車技術演進、所屬車隊與歷代隊友檔案。

---

## 一、 目錄職責劃分
- `index.html` / `style.css` / `script.js`：前端視覺化遙測知識庫網頁。
- `index.md`：Markdown 版全庫導航總目錄。
- `log.md`：知識庫更新與變更歷史日誌。
- `raw/`：存放未經修改的 FIA 官方數據、賽事戰報與訪談原文。
- `wiki/`：存放提煉後的結構化知識條目（概念、規則、生涯、車隊、歷代隊友）。
- `slides-work/`：簡報產製過程之 Graph 工作區（存放中間產物）。
- `presentation.html`：最終交付之新手教學型 HTML 簡報。

---

## 二、 知識庫更新工作流（三階段機制）
每次新增 F1 賽事報導、技術分析或車手訪談時，遵循：
1. **原始歸檔 (`raw/`)**：保存未刪減的賽事數據與法規文獻。
2. **知識提煉 (`wiki/`)**：更新或新增對應的結構化條目（概念、規則、生涯、隊友）。
3. **同步索引 (`index.md`、`log.md` 及網頁)**：確保導航目錄與版本紀錄保持一致。

---

## 三、 Graph 簡報生成工作規範 (Presentation Workflow)
利用本知識庫製作針對「F1 新手」之教學型簡報時，必須嚴格遵守以下流程與限制：

### 1. 中間產物集中化管理
所有簡報產製之中間產物必須存入 `slides-work/` 資料夾，結構如下：
- `slides-work/sources.md`：盤點與引用的 wiki 條目清單與事實對齊表。
- `slides-work/cards/`：原子化事實證據卡（Evidence Cards），一卡一事實，追溯至具體 wiki 來源。
- `slides-work/outline.md`：簡報大綱、章節架構與頁面規劃。
- `slides-work/drafts/`：逐頁逐字稿與頁面視覺構想。

### 2. 單一事實來源限制 (Single Source of Truth, SSOT)
- **嚴格事實邊界**：簡報內容僅限自 `wiki/` 目錄提取事實與數據，嚴格禁止利用外部預訓練知識自行杜撰、擴寫或引入未經確認之推測。
- **強制來源引用標註**：每頁投影片底部必須明確註記其引用的 `wiki/` 檔案名稱（例如：`來源：wiki/regulations/F1-Points-System.md`）。

### 3. 人工審核檢查點 (Human-in-the-Loop Gate)
- 產出 `slides-work/outline.md` 後，**必須立即暫停並主動向使用者彙報大綱內容**。
- 未取得使用者人工確認與授權前，不得逕行撰寫 `drafts/` 逐頁草稿或渲染 `presentation.html`。
