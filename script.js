// 1. 賽車結構互動遙測面板
const partSpecs = {
  "front-wing": {
    title: "01 // FRONT WING & FRONT-END AUTHORITY",
    desc: "Max 極度仰賴強大的前軸下壓力與精準轉向反應，透過多片式前翼調整獲得銳利的入彎車頭指向。"
  },
  "cockpit": {
    title: "02 // COCKPIT, HALO & DRIVER INTERFACE",
    desc: "精準的前輪指向性偏好（Pointy Front-End），極致晚煞車與出彎油門控制，在高速彎中展現極限抓地力掌控。"
  },
  "floor": {
    title: "03 // VENTURI TUNNELS & GROUND EFFECT FLOOR",
    desc: "2022–2025 地面效應規則核心。Adrian Newey 與紅牛空氣動力學團隊打造的文丘里底板，讓 RB18/RB19 擁有無與倫比的高速下壓力穩定性。"
  },
  "rear-wing": {
    title: "04 // REAR WING, DRS EFFICIENCY & HONDA RBPT",
    desc: "紅牛賽車招牌的「Triple DRS」低風阻尾翼設計，在直道開啟 DRS 時可釋放驚人尾速優勢，配合 Honda RBPT 動力單元完成超車。"
  }
};

const aeroNodes = document.querySelectorAll(".aero-node");
const partReadout = document.getElementById("partReadout");

aeroNodes.forEach(node => {
  node.addEventListener("click", () => {
    aeroNodes.forEach(n => n.classList.remove("active"));
    node.classList.add("active");
    const spec = partSpecs[node.dataset.part];
    if (spec) {
      partReadout.innerHTML = `
        <div class="readout-title">${spec.title}</div>
        <p>${spec.desc}</p>
      `;
    }
  });
});

// 2. 歷代隊友時代篩選器
const filterBtns = document.querySelectorAll(".filter-btn");
const mateCards = document.querySelectorAll(".mate-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    mateCards.forEach(card => {
      const eras = card.dataset.era.split(" ");
      if (filter === "all" || eras.includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// 3. 知識庫 Markdown 節點瀏覽器（與資料夾內 .md 同步）
const wikiDocs = {
  "index": {
    path: "index.md",
    title: "Max Verstappen 個人知識庫總目錄 (Index)",
    html: `
      <span class="wiki-code-tag">ROOT // index.md</span>
      <h4>Max Verstappen F1 結構化知識庫</h4>
      <p>本專案結合 Karpathy 個人知識庫架構與 F1 賽車遙測介面，將原始文獻歸檔於 <code>raw/</code>，並將結構化知識提煉至 <code>wiki/</code>：</p>
      <ul>
        <li><strong>核心概念 (wiki/concepts/)</strong>：地面效應空氣動力學、重前軸駕駛風格</li>
        <li><strong>技術規則 (wiki/regulations/)</strong>：2022–2026 F1 空氣動力學與動力單元規則演進</li>
        <li><strong>車隊與體系 (wiki/entities/)</strong>：Toro Rosso 與 Oracle Red Bull Racing 車隊譜系</li>
        <li><strong>歷代隊友 (wiki/teammates/)</strong>：Sainz、Ricciardo、Gasly、Albon、Pérez 至現役陣容對比</li>
      </ul>
    `
  },
  "agents": {
    path: "AGENTS.md",
    title: "知識庫維護規範 (AGENTS.md)",
    html: `
      <span class="wiki-code-tag">SYSTEM // AGENTS.md</span>
      <h4>知識庫運作與更新工作流</h4>
      <p>每次新增 F1 賽事報導、技術分析或車手訪談時，遵循三階段更新：</p>
      <ul>
        <li><strong>1. 原始歸檔 (raw/)</strong>：保存未刪減的賽事數據與新聞來源。</li>
        <li><strong>2. 知識提煉 (wiki/)</strong>：更新對應的技術概念、規則變更或隊友對決條目。</li>
        <li><strong>3. 同步索引 (index.md & 網頁)</strong>：確保 GitHub Pages 靜態網頁與 Markdown 知識樹保持一致。</li>
      </ul>
    `
  },
  "ground-effect": {
    path: "wiki/concepts/Ground-Effect.md",
    title: "地面效應 (Ground Effect) 與 RB18/RB19 統治力",
    html: `
      <span class="wiki-code-tag">CONCEPT // wiki/concepts/Ground-Effect.md</span>
      <h4>文丘里效應與低風阻極速</h4>
      <p>2022 年 F1 重啟地面效應規則，透過車底文丘里通道產生主要下壓力，大幅減少尾流亂流。</p>
      <ul>
        <li><strong>海豚跳抑制 (Anti-Porpoising)</strong>：紅牛團隊在懸吊幾何與底板邊緣氣流密封上取得先機，使 Max 能在不犧牲車身高度的情況下維持穩定下壓力。</li>
        <li><strong>與 Max 風格契合</strong>：穩定的高速彎底板吸力讓 Max 可以更早全油門出彎，造就 2022–2023 連續統治賽季。</li>
      </ul>
    `
  },
  "regulations": {
    path: "wiki/regulations/F1-Technical-Regulations.md",
    title: "F1 技術規則演進與 Verstappen 生涯週期",
    html: `
      <span class="wiki-code-tag">REGULATIONS // wiki/regulations/F1-Technical-Regulations.md</span>
      <h4>跨越三大技術規則週期的適應力</h4>
      <ul>
        <li><strong>2015–2016 窄胎混動初期</strong>：以 17 歲之姿在 Toro Rosso 展現超越車輛下壓力限制的煞車控制。</li>
        <li><strong>2017–2021 寬體高下壓力時代</strong>：駕馭 RB16B 與賓士 W12 展開世紀對決，奪得 2021 世界冠軍。</li>
        <li><strong>2022–2025 地面效應時代</strong>：達成四連霸偉業，邁向 2026 主動空氣動力學與新動力單元紀元。</li>
      </ul>
    `
  },
  "log": {
    path: "log.md",
    title: "知識庫維護與變更歷史日誌 (log.md)",
    html: `
      <span class="wiki-code-tag">CHANGELOG // log.md</span>
      <h4>知識庫基礎擴充與五大主題補齊</h4>
      <p>完整落實 AGENTS.md 三階段更新機制：</p>
      <ul>
        <li><strong>raw/ 補齊</strong>：導入 F1 競賽積分規章、早期生涯紀錄、四連霸數據、2023 破紀錄統計與歷任隊友 H2H 原始檔案。</li>
        <li><strong>wiki/ 提煉</strong>：建立 points、career 紀錄條目，並大幅充實 teammates 對決與技術規則筆記。</li>
        <li><strong>同步索引</strong>：index.md 與網頁節點全面同步對齊。</li>
      </ul>
    `
  },
  "points": {
    path: "wiki/regulations/F1-Points-System.md",
    title: "F1 基礎積分規則與計分制度 (wiki/regulations/F1-Points-System.md)",
    html: `
      <span class="wiki-code-tag">REGULATIONS // wiki/regulations/F1-Points-System.md</span>
      <h4>現代一級方程式計分機制</h4>
      <ul>
        <li><strong>正賽前十名</strong>：25-18-15-12-10-8-6-4-2-1。</li>
        <li><strong>最快單圈紅利</strong>：2019–2024 年前十名完賽得 1 分，2025 年起正式廢除。</li>
        <li><strong>衝刺賽與縮水里程</strong>：衝刺賽前八名計分（8 至 1 分）；2022 年確立 25%、50%、75% 四階段中斷里程階梯式給分。</li>
      </ul>
    `
  },
  "championships": {
    path: "wiki/career/Championships-2021-2024.md",
    title: "2021–2024 四連霸世界冠軍歷程 (wiki/career/Championships-2021-2024.md)",
    html: `
      <span class="wiki-code-tag">CAREER // wiki/career/Championships-2021-2024.md</span>
      <h4>四連霸王朝與歷史級戰績</h4>
      <ul>
        <li><strong>2021 (RB16B)</strong>：10 勝，阿布達比決賽圈世紀絕殺奪生涯首冠。</li>
        <li><strong>2022 (RB18)</strong>：15 勝，克服海豚跳於日本鈴鹿提前衛冕二連霸。</li>
        <li><strong>2023 (RB19)</strong>：19 勝，勝率 86.4% 刷新 71 年歷史神話，卡達衝刺賽三度封王。</li>
        <li><strong>2024 (RB20)</strong>：9 勝，巴西 P17 雨戰史詩級翻盤，拉斯維加斯提前加冕四冠王（追平 Prost / Vettel）。</li>
      </ul>
    `
  },
  "teammates": {
    path: "wiki/teammates/Teammates-History.md",
    title: "歷代隊友對決紀錄與高低對比分析 (wiki/teammates/Teammates-History.md)",
    html: `
      <span class="wiki-code-tag">TEAMMATES // wiki/teammates/Teammates-History.md</span>
      <h4>紅牛歷任搭檔對決與二號車手難題</h4>
      <ul>
        <li><strong>Carlos Sainz (2015-16)</strong>：排位 10:13，正賽 11:9，積分 62:22。</li>
        <li><strong>Daniel Ricciardo (2016-18)</strong>：唯一能長線抗衡隊友，排位 34:24，勝場 5:4。</li>
        <li><strong>Gasly (2019上) & Albon (2019下-20)</strong>：受困賽車狹窄操駕窗口，排位被大幅壓制。</li>
        <li><strong>Sergio Pérez (2021-24)</strong>：阿布達比關鍵防守助奪首冠，包辦 2023 車手冠亞軍；後期隨賽車前軸銳利化差距擴大。</li>
      </ul>
    `
  },
  "entities": {
    path: "wiki/entities/F1-Teams-Lineage.md",
    title: "紅牛體系車隊譜系 (Toro Rosso & Red Bull Racing)",
    html: `
      <span class="wiki-code-tag">ENTITIES // wiki/entities/F1-Teams-Lineage.md</span>
      <h4>從法恩扎到米爾頓凱恩斯</h4>
      <ul>
        <li><strong>Scuderia Toro Rosso (2015–2016)</strong>：紅牛青年軍搖籃，Max 在此完成 23 場大獎賽歷練。</li>
        <li><strong>Oracle Red Bull Racing (2016–至今)</strong>：2016 西班牙站首秀奪冠，與工程師 Gianpiero Lambiase (GP) 建立 F1 史上最具默契的車手—賽道工程師組合之一。</li>
      </ul>
    `
  }
};

const wikiFileBtns = document.querySelectorAll(".wiki-file-btn");
const wikiViewer = document.getElementById("wikiViewer");

function renderWikiDoc(key) {
  const doc = wikiDocs[key];
  if (doc && wikiViewer) {
    wikiViewer.innerHTML = doc.html;
  }
}

wikiFileBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    wikiFileBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderWikiDoc(btn.dataset.doc);
  });
});

renderWikiDoc("index");
