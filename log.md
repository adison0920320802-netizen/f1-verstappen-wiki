# 知識庫維護與變更歷史日誌 (Knowledge Base Maintenance Log)

本文件依據 `AGENTS.md` 規範記錄 MV1 個人知識庫（Karpathy Wiki Architecture）的所有資料歸檔、條目提煉、Graph 簡報產製與索引同步操作。

---

## [2026-11-23] Graph 流程產製 F1 新手教學簡報 (presentation.html)

### 執行人
- Antigravity AI Assistant

### 變更背景
- 依使用者需求，基於已建立的 `wiki/` 結構化知識庫，產製一份專為「完全沒看過 F1 的新手」設計的教學型互動 HTML 簡報（`presentation.html`）。
- 嚴格落實 Graph 三大核心約束規則：
  1. 所有中間產物集中存放於 `slides-work/` 目錄。
  2. 嚴格限定 `wiki/` 為單一事實來源（SSOT），不引入卡片外未經認證的數字與外部知識，每頁底部強制標註引用來源。
  3. 大綱產出後暫停並通過使用者人工審查確認後，方展開下半段逐頁稿與 HTML 渲染。

---

### 詳細變更清單

#### 1. 工作規範與中間產物 (`slides-work/`)
- **[UPDATE]** `AGENTS.md`：增訂第三章「Graph 簡報生成工作規範」，明確約束中間產物目錄、單一事實來源原則與人工審核檢查點。
- **[ADD]** `slides-work/sources.md`：檢索並盤點 7 篇 wiki 條目（積分、地面效應、早期紀錄、四連霸、2023統治數據、歷任隊友、車隊譜系），確保覆蓋率。
- **[ADD]** `slides-work/cards/`：建立 7 張原子化獨立事實證據卡（`card-01` 至 `card-07`），含核心可驗證事實與新手白話轉譯建議。
- **[ADD]** `slides-work/outline.md`：規劃 9 頁教學故事線大綱，經使用者人工審查通過。
- **[ADD]** `slides-work/drafts/`：產出 9 頁逐頁稿（`slide-01.md` 至 `slide-09.md`），逐字規劃教學概念、視覺元素與強制引用標註。

#### 2. 成果交付 (`presentation.html`)
- **[ADD]** `presentation.html`：
  - 採用 Oracle Red Bull Racing 官方科技深藍、紅、金配色與碳纖維背景紋理。
  - 圖文講義風格（Handout Cards Layout），資訊層級分明。
  - 支援鍵盤左右箭頭（`←` / `→`）、空白鍵、按鈕與點擊圓點切換投影片。
  - 每頁底部均強制顯示對應的 `wiki/` 檔案來源路徑。
  - 完全自包含（Self-contained），支援響應式佈局（RWD）。

#### 3. 索引同步 (`index.md`)
- **[UPDATE]** `index.md`：加入 `presentation.html` 與 `slides-work/` 導航連結。

---

## [2026-11-23] 獨立審查員執行 presentation.html 與 wiki/ 全量查核與修正

### 執行人
- Antigravity Independent Auditor

### 審查結論與變更
- **[ADD]** `slides-work/report.md`：完成 9 頁投影片之逐頁數據、規則、年份、來源標註、版面與新手友善度審查報告。
- **[UPDATE]** `presentation.html`：
  - **Slide 01**：移除未於 `wiki/` 記載之「340 km/h」與「5G」外部數據，改以「極速突破 300 km/h 與極致貼地性能」符合 wiki 原文。
  - **Slide 03**：移除未授權之「250 km/h」數值，修正為「高速過彎」。
  - **Slide 05**：修正「提前 6 站正賽」之計算瑕疵，改為完全忠於 wiki 記載之「第 17 站卡達衝刺賽週六提前封王（週日正賽起跑前鎖定冠軍）」。
- **[UPDATE]** `slides-work/cards/card-04-championships.md` & `slides-work/drafts/slide-01.md`：同步更新對齊。
- **最終狀態**：所有呈現數據與規則達成 100% 嚴格忠於 `wiki/`，無外部幻覺。

---

## [2026-11-23] 知識庫基礎擴充與五大核心主題補齊

### 執行人
- Antigravity AI Assistant

### 變更背景
- 執行專案審查時，發現 `raw/` 原始文獻目錄僅存有佔位符 `.gitkeep`（實際資料篇數為 0 篇，不足 5 篇）。
- 依使用者指示，針對「F1基礎積分規則、Verstappen早期生涯與最年輕紀錄、2021-2024四連霸數據、2023單季19勝統計、歷任紅牛隊友比較」五大主題，完整建立原始歸檔檔，並提煉更新至結構化 `wiki/` 條目，完成索引與日誌同步。

---

### 詳細變更清單

#### 1. 原始歸檔區 (`raw/`) — 新增 5 篇原始資料
- **[ADD]** `raw/01-f1-points-system-regulations.md`：FIA F1 大獎賽常規正賽積分（25-18-15...）、最快單圈紅利（2019-2024實施、2025取消）、衝刺賽前八名計分規章，以及 2022 年確立的四階段賽程中斷縮水里程階梯計分原則。
- **[ADD]** `raw/02-verstappen-early-career-and-records.md`：2013 CIK-FIA KZ 世界冠軍、2014 歐洲 F3 雙重三連勝戰績、2015 以 17 歲 166 天破紀錄出賽澳洲站、最年輕得分紀錄、FIA 超級駕照「Verstappen 條款」修訂背景，以及 2016 西班牙站首秀奪冠之四大最年輕歷史紀錄。
- **[ADD]** `raw/03-verstappen-2021-2024-championship-stats.md`：2021 至 2024 四連霸賽季（RB16B、RB18、RB19、RB20）90 場奪 53 勝之統計對照表、封王關鍵戰役（阿布達比絕殺、鈴鹿雨戰、卡達衝刺賽封王、巴西 P17 大逆轉及拉斯維加斯四冠加冕）。
- **[ADD]** `raw/04-verstappen-2023-historic-19-wins-record.md`：2023 賽季全季 22 站 19 勝詳細分站清單、86.36% 單季勝率（打破 Ascari 71 年紀錄）、歷史最長 10 連勝、領跑 1003 圈、單人 575 分超越對手製造商全隊總分之史詩級紀錄剖析。
- **[ADD]** `raw/05-red-bull-teammates-h2h-comparison.md`：Carlos Sainz、Daniel Ricciardo、Pierre Gasly、Alexander Albon 與 Sergio Pérez 之排位/正賽對決數據、勝率對比、總積分比，以及紅牛「Pointy Front-End」車體調校與二號車手適應障礙之工程學本質分析。

#### 2. 結構化知識條目 (`wiki/`) — 提煉與更新
- **[ADD]** `wiki/regulations/F1-Points-System.md`：提煉競賽積分結構、衝刺賽得分機制與雨天縮水階梯積分表。
- **[ADD]** `wiki/career/Early-Career-Records.md`：提煉跳級升降歷程、歷史最年輕年齡表與「Verstappen 條款」三要素。
- **[ADD]** `wiki/career/Championships-2021-2024.md`：四連霸對比表與四大王朝轉折點精要。
- **[ADD]** `wiki/career/2023-Season-Records.md`：2023 核心破紀錄數據與 RB19 空力特性總結。
- **[UPDATE]** `wiki/teammates/Teammates-History.md`：由原本僅列出名單升級為完整包含 H2H 對照表、各時期詳細評析與紅牛車輛調校工程特性之深度條目。
- **[UPDATE]** `wiki/regulations/F1-Technical-Regulations.md`：擴充現代三大規則週期與新規則連結，並建立各條目間雙向超連結。

#### 3. 索引與日誌同步 (`index.md` / `log.md`)
- **[UPDATE]** `index.md`：依模組重新整理，完整列入 5 篇 `raw/` 原始檔案與 7 篇 `wiki/` 結構化條目連結。
- **[ADD]** `log.md`：建立維護歷程與版本日誌。
