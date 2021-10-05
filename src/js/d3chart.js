class D3Chart {
  constructor(targetId, options, className) {
    this.targetId = targetId;
    this.className = className;

    this.options = Object.assign({
      showInlineBarValues: "inside", // inside, inside-offset, and outside supported
      showLegend: true,
      margin: {},
      colors: [
        "#F0047F",
        "#00BFAD",
        "#FFC803",
        "#78ECC2",
        "#DF4A1F",
        "#FD98BC",
        "#6B38FB",
        "#03D0D0",
        "#C40468",
        "#78F19A",
        "#91A5EE",
        "#02C6B3",
        "#FF0F00",
        "#003EDD",
        "#02465F",
        "#960000",
        "#FF72CF",
      ],
      // only applies when `showInlineBarValues: "inside"`
      labelColors: [
        "#fff",
        "#000",
        "#000",
        "#000",
        "#000",
        "#000",
        "#000",
        "#000",
        "#fff",
        "#000",
        "#000",
        "#000",
        "#000",
        "#000",
        "#000",
        "#fff",
        "#fff",
      ],
      colorMod: 0,
      inlineLabelPad: 5,
      labelPrecision: 0,
      // TODO make this automatic by parsing `%` signs
      valueType: ["percentage"],
      sortLegend: false,
      highlightElementsFromLegend: false
    }, options);

    this.options.colors = this.normalizeColors(this.options.colors, this.options.colorMod);
    this.options.labelColors = this.normalizeColors(this.options.labelColors, this.options.colorMod);
  }

  normalizeColors(colors = [], mod = 0) {
    if(mod) {
      let c = [];
      let len = colors.length;
      let k = len + mod;
      for(let j = mod || 0; j < k; j++) {
        c.push(colors[j % len]);
      }
      return c;
    }

    return colors;
  }

  get margin() {
    let m = Object.assign({
      top: 30,
      right: 10,
      bottom: 25,
      left: 40,
    }, this.options.margin);

    return m;
  }

  get dimensions() {
    let target = this.target;
    return {
      container: {
        width: target.clientWidth,
        height: target.clientHeight,
      },
      min: {
        width: 300,
        height: 450
      },
      max: {
        height: 750
      },
    };
  }

  get width() {
    return Math.max(this.dimensions.container.width, this.dimensions.min.width);
  }

  get height() {
    return Math.max(Math.min(this.dimensions.container.height, this.dimensions.max.height) - this.margin.bottom, this.dimensions.min.height)
  }

  get svg() {
    return d3.create("svg")
      .attr("height", this.height)
      .attr("viewBox", [0, 0, this.width, this.height]);
  }

  get colors() {
    return d3.scaleOrdinal().range(this.options.colors);
  }

  get labelColors() {
    return d3.scaleOrdinal().range(this.options.labelColors);
  }

  get target() {
    return document.getElementById(this.targetId);
  }

  reset(svg) {
    let target = this.target;
    target.classList.add("d3chart");
    if(this.className) {
      target.classList.add(this.className);
    }

    for(let child of target.children) {
      if(child.tagName.toLowerCase() === "svg") {
        child.remove();
      }
    }

    let node = svg.node();
    target.appendChild(node);
  }

  parseDataToCsv(tableId, reverse) {
    let table = document.getElementById(tableId);
    let headerCells = table.querySelectorAll(":scope thead th");
    let bodyRows = table.querySelectorAll(":scope tbody tr");

    let headerOutput = [];
    for(let th of headerCells) {
      headerOutput.push(th.textContent);
    }

    let output = [];
    for(let tr of bodyRows) {
      let row = [];
      for(let child of tr.children) {
        let value = child.textContent;
        if(value.endsWith("%")) {
          value = parseFloat(value) / 100;
        }
        row.push(value);
      }
      output.push(row.join(","));
    }
    if(reverse) {
      return [headerOutput.join(","), ...output.reverse()].join("\n");
    }
    return [headerOutput.join(","), ...output].join("\n");

  }

  retrieveLabelId(label) {
    let match = label.match(/^(\d*)\./);
    if(match && match[1]) {
      return parseInt(match[1], 10);
    }
  }

  slugify(slug, prefix) {
    return `${prefix}${slug.toLowerCase().replace(/[\s\.]/g, "")}`;
  }

  generateLegend(labels = []) {
    let container = document.createElement("div");
    container.classList.add("d3chart-legend");

    let entries = [];
    for(let j = 0; j < labels.length; j++) {
      let tag = "div";
      let attrs = "";
      if(this.options.highlightElementsFromLegend) {
        tag = "button";
        attrs = " type='button'"
      }

      entries.push({
        label: labels[j],
        html: `<${tag}${attrs} class="d3chart-legend-entry d3chart-legend-${j + this.options.colorMod}">${labels[j] || ""}</${tag}>`
      });
    }

    if(this.options.sortLegend) {
      entries = entries.sort((a, b) => {
        let idA = this.retrieveLabelId(a.label);
        let idB = this.retrieveLabelId(b.label);
        if(idA && idB) {
          return idA - idB;
        }
        if(a.label < b.label) {
          return -1;
        } else if(b.label < a.label) {
          return 1;
        }
        return 0;
      });
    }

    let html = [];
    for(let entry of entries) {
      html.push(entry.html);
    }
    container.innerHTML = html.join("");
    return container;
  }

  getKeys(data) {
    return data.columns.slice(1);
  }

  highlightElements(target, method) {
    // TODO this is specific to Bubble chart
    if(target.classList.contains("d3chart-legend-entry")) {
      let circleSlug = this.slugify(target.innerHTML, `${this.targetId}-bubblecircle-`);
      let labelSlug = this.slugify(target.innerHTML, `${this.targetId}-bubblelabel-`);

      let circle = document.getElementById(circleSlug);
      let label = document.getElementById(labelSlug);

      circle.classList[method]("active");
      label.classList[method]("active");

      circle.closest("svg").classList[method]("d3chart-bubble-active");
    }
  }

  renderLegend(data) {
    if(!this.options.showLegend) {
      return;
    }

    let keys = this.getKeys(data);
    let legend = this.generateLegend(keys, this.options.colors);

    if(this.options.highlightElementsFromLegend) {
      legend.addEventListener("mouseover", e => {
        this.highlightElements(e.target, "add");
      });
      legend.addEventListener("mouseout", e => {
        this.highlightElements(e.target, "remove");
      });
      legend.addEventListener("focusin", e => {
        this.highlightElements(e.target, "add");
      });
      legend.addEventListener("focusout", e => {
        this.highlightElements(e.target, "remove");
      });
    }

    let selector = ":scope .d3chart-legend-placeholder";

    let previousEl = this.target.previousElementSibling;
    let legendAnchorBefore = previousEl ? previousEl.querySelector(selector) : null;

    let nextEl = this.target.nextElementSibling;
    let legendAnchorAfter = nextEl ? nextEl.querySelector(selector) : null;

    if(legendAnchorBefore || legendAnchorAfter) {
      (legendAnchorBefore || legendAnchorAfter).appendChild(legend)
    } else {
      // inside
      this.target.appendChild(legend);
    }
  }

  roundValue(num, valueType = "percentage") {
    if(valueType !== "percentage") {
      return num;
    }

    let d0 = (num * 100).toFixed(0);
    if(this.options.labelPrecision === 0) {
      return d0;
    }
    
    let d1 = (num * 100).toFixed(1);
    if(d1.endsWith(".0")) {
      return d0;
    }
    return d1;
  }
}

class D3VerticalBarChart extends D3Chart {
  constructor(target, tableId, optionOverrides = {}) {
    let chart = super(target, optionOverrides, "d3chart-vbar");

    let csvData = chart.parseDataToCsv(tableId);
    let data = Object.assign(d3.csvParse(csvData, d3.autoType));

    this.render(chart, data);
    this.renderLegend(data);

    window.addEventListener("resize", () => {
      this.render(chart, data);
    });
  }

  render(chart, data) {
    let {
      options,
      margin,
      width,
      height,
      dimensions,
      svg,
      colors,
      labelColors,
    } = chart;

    let keys = this.getKeys(data);
    let groupKey = data.columns[0];
    let groups = data.map(d => d[groupKey]);

    let y = d3.scaleLinear()
      .domain([
        0,
        d3.max(data, d => {
          if(options.mode === "stacked") {
            let sum = 0;
            for(let key of keys) {
              sum += d[key];
            }
            return sum;
          }

          return d3.max(keys, key => d[key])
        })
      ]).nice()
      .rangeRound([height - margin.bottom, margin.top]);

    let x0 = d3.scaleBand()
      .domain(groups)
      .rangeRound([margin.left, width - margin.right])
      .paddingInner(.2);

    let x1 = d3.scaleBand()
      .domain(keys)
      .rangeRound([0, x0.bandwidth()])
      .padding(0.05);

    let yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .attr("class", "d3chart-yaxis")
      .call(d3
        .axisLeft(y)
        .ticks(null, this.options.valueType[0] === "percentage" ? "%" : "")
        .tickSize(-width + margin.left + margin.right))
      .call(g => g.select(".domain").remove());

    let xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .attr("class", "d3chart-xaxis")
      .call(d3
        .axisBottom(x0)
        .tickSizeOuter(0))
      .call(g => g.select(".domain").remove());

    let dataMod = d => {
      let incrementer = 0;

      return keys.map(key => {
        let data = {
          key,
          value: d[key],
          width: x1.bandwidth(),
          height: y(0) - y(d[key]),
          left: x1(key),
          top: y(d[key])
        };

        if(options.mode === "stacked") {
          data.width = x0.bandwidth();
          data.left = 0;
          data.top = y(d[key]) - incrementer;
          incrementer += data.height;
        }

        return data;
      })
    };

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    svg.append("g")
      .selectAll("g")
      .data(data)
      .join("g")
        .attr("transform", d => `translate(${x0(d[groupKey])},0)`)
      .selectAll("rect")
      .data(dataMod)
      .join("rect")
        .attr("x", d => d.left)
        .attr("y", d => d.top)
        .attr("width", d => d.width)
        .attr("height", d => d.height)
        .attr("fill", d => colors(d.key))
        .attr("class", (d, j) => `d3chart-color-${j + this.options.colorMod}`);

    if(options.showInlineBarValues) {
      svg.append("g")
        .selectAll("g")
        .data(data)
        .join("g")
          .attr("transform", d => `translate(${x0(d[groupKey])},0)`)
        .selectAll("text")
        .data(dataMod)
        .join("text")
          .attr("x", d => d.left + d.width / 2)
          .attr("y", d => d.top - (options.showInlineBarValues === "outside" ? options.inlineLabelPad : (-15 - options.inlineLabelPad)))
          .attr("fill", d => options.showInlineBarValues === "inside" ? labelColors(d.key) : "currentColor")
          .attr("class", "d3chart-inlinebarvalue")
          .text(d => this.roundValue(d.value, this.options.valueType[0]) + (this.options.valueType[0] === "percentage" ? "%" : ""));
    }

    chart.reset(svg);
  }
}

class D3HorizontalBarChart extends D3Chart {
  constructor(target, tableId, optionOverrides = {}) {
    optionOverrides.margin = Object.assign({
      top: 20,
      right: 50,
      bottom: 20,
      left: 120
    }, optionOverrides.margin);
    let chart = super(target, optionOverrides, "d3chart-hbar");
    let csvData = chart.parseDataToCsv(tableId, true);
    let data = Object.assign(d3.csvParse(csvData, d3.autoType));

    this.render(chart, data);
    this.renderLegend(data);

    window.addEventListener("resize", () => {
      this.render(chart, data);
    });
  }

  render(chart, data) {
    let {
      options,
      margin,
      width,
      height,
      dimensions,
      svg,
      colors,
      labelColors,
    } = chart;

    let keys = this.getKeys(data);
    let groupKey = data.columns[0];
    let groups = data.map(d => d[groupKey]);

    let x = d3.scaleLinear()
      .domain([0, d3.max(data, d => {
        if(options.scale === "proportional") {
          return 1;
        }

        if(options.mode === "stacked") {
          let sum = 0;
          for(let key of keys) {
            sum += d[key];
          }
          return sum;
        }

        return d3.max(keys, key => d[key]);
      })]).nice()
      .rangeRound([margin.left, width - margin.right]);

    let y0 = d3.scaleBand()
      .domain(groups)
      .rangeRound([height - margin.bottom - margin.top, margin.top])
      .paddingInner(options.showInlineBarValues === "inside-offset" ? 0.25 : 0.15);

    let y1 = d3.scaleBand()
      .domain(keys)
      .rangeRound([0, y0.bandwidth()])
      .padding(0.05);

    let xAxis = g => g
      .attr("transform", `translate(0, ${(margin.top + margin.bottom)/4})`)
      .attr("class", "d3chart-xaxis")
      .call(d3
        .axisBottom(x)
        .ticks(5, this.options.valueType[0] === "percentage" ? "%" : "")
        .tickSize(height - margin.bottom - margin.top))
      .call(g => g.select(".domain").remove());

    let yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .attr("class", "d3chart-yaxis")
      .call(d3.axisLeft(y0).tickSizeOuter(0))
      .call(g => g.select(".domain").remove());

    let dataMod = d => {
      let incrementer = 0;
      let sum = 0;
      for(let key of keys) {
        sum += d[key];
      }

      return keys.map(key => {
        let data = {
          key,
          value: d[key],
          sum,
          width: x(options.scale === "proportional" ? (d[key] / sum) :  d[key]) - x(0),
          height: y1.bandwidth(),
          left: margin.left,
          top: y1(key)
        };

        if(options.mode === "stacked") {
          data.top = 0;
          data.height = y0.bandwidth();
          data.left = margin.left + incrementer;

          incrementer += data.width;
        }

        return data;
      })
    };

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    svg.append("g")
      .selectAll("g")
      .data(data)
      .join("g")
        .attr("transform", d => `translate(0,${y0(d[groupKey])})`)
      .selectAll("rect")
      .data(dataMod)
      .join("rect")
        .attr("x", d => d.left)
        .attr("y", d => d.top)
        .attr("width", d => d.width)
        .attr("height", d => d.height)
        .attr("fill", d => colors(d.key))
        .attr("class", (d, j) => `d3chart-color-${j + this.options.colorMod}`);

    if(options.showInlineBarValues) {
      svg.append("g")
        .selectAll("g")
        .data(data)
        .join("g")
          .attr("transform", d => `translate(0,${y0(d[groupKey])})`)
          .attr("dominant-baseline", "central")
        .selectAll("text")
        .data(dataMod)
        .join("text")
          .attr("x", d => {
            let offset = options.inlineLabelPad;
            if(options.showInlineBarValues.startsWith("inside")) {
              offset = -1 * offset;
            }
            if(options.showInlineBarValues === "inside-offset") {
              offset += 16;
            }
            return d.left + d.width + offset;
          })
          .attr("y", d => {
            if(options.showInlineBarValues === "inside-offset") {
              return -10;
            }
            return d.top + Math.floor(d.height / 2) - 1;
          })
          .attr("class", d => "d3chart-inlinebarvalue-h" + (options.showInlineBarValues.length ? ` ${options.showInlineBarValues}` : ""))
          .attr("fill", d => options.showInlineBarValues === "inside" ? labelColors(d.key) : "currentColor")
          .text(d => this.roundValue(d.value, this.options.valueType[0]) + (this.options.valueType[0] === "percentage" ? "%" : ""));
    }

    chart.reset(svg);
  }
}

class D3BubbleChart extends D3Chart {
  constructor(target, tableId, optionOverrides = {}) {
    optionOverrides.margin = {
      top: 25,
      right: 25,
      bottom: 25,
      left: 40
    };

    optionOverrides.sortLegend = true;
    optionOverrides.highlightElementsFromLegend = true;

    if(!optionOverrides.valueType) {
      optionOverrides.valueType = ["percentage", "percentage"];
    }

    let chart = super(target, optionOverrides, "d3chart-bubble");
    let csvData = chart.parseDataToCsv(tableId);

    let data = csvData.split("\n").slice(1).map((entry, id) => {
      let [name, x, y, r] = entry.split(",");
      return {
        name,
        id,
        x,
        y,
        r,
      };
    });

    // sort from smallest to largest circles to insert in order (to render in the right z-index)
    data = data.slice().sort((a, b) => {
      return b.r - a.r;
    });

    this.render(chart, data);
    this.renderLegend(data);

    window.addEventListener("resize", () => {
      this.render(chart, data);
    });
  }

  getKeys(data) {
    let keys = [];
    for(let entry of data) {
      keys.push(entry.name);
    }
    return keys;
  }

  render(chart, data) {
    let {
      options,
      margin,
      width,
      height,
      dimensions,
      svg,
      colors,
      labelColors,
    } = chart;

    let targetId = this.targetId;

    let xAxisMax = d3.max(data, d => parseFloat(d.x));
    if(this.options.valueType[0] !== "percentage") {
      xAxisMax = Math.ceil(xAxisMax);
    } else {
      // round up to at least 1 if percentage
      // xAxisMax = Math.max(1, xAxisMax);
    }

    let yAxisMax = d3.max(data, d => parseFloat(d.y));
    if(this.options.valueType[1] !== "percentage") {
      yAxisMax = Math.ceil(yAxisMax);
    } else {
      // round up to at least 1 if percentage
      yAxisMax = Math.max(1, yAxisMax);
    }

    let xRange = d3.scaleLinear()
      .range([margin.left + margin.right, width - margin.left - margin.right])
      .domain([
        Math.min(d3.min(data, d => parseFloat(d.x)), 0),
        xAxisMax
      ]);

    let yRange = d3.scaleLinear()
      .range([height - margin.top - margin.bottom, margin.top + margin.bottom]) // flipped
      .domain([
        Math.min(d3.min(data, d => parseFloat(d.y)), 0),
        yAxisMax
      ]).nice();

    let rRange = d3.scaleLinear()
      .range([7, 25])
      .domain([
        Math.min(d3.min(data, d => parseFloat(d.r)), 0),
        d3.max(data, d => parseFloat(d.r))
      ]);

    let xScale = d3.scaleLinear()
      .domain([
        Math.min(d3.min(data, d => parseFloat(d.x)), 0),
        xAxisMax
      ])
      .range([0, width - margin.left - margin.right]);

    let xAxis = d3.axisBottom()
      .scale(xScale)
      .ticks(null, this.options.valueType[0] === "percentage" ? "%" : "")
      .tickSize(-height + margin.top + margin.bottom);

    svg.append("g")
      .attr("class", "d3chart-xaxis")
      .attr("transform", function(){
          return "translate(" + margin.left + "," + (height - margin.top) + ")";
      })
      .call(xAxis)
      .call(g => g.select(".domain").remove());

    let yAxis = d3.axisLeft()
      .scale(d3.scaleLinear()
        .domain([
          yAxisMax,
          Math.min(d3.min(data, d => parseFloat(d.y)), 0),
        ])
        .range([0, height - margin.top - margin.bottom]))
      .ticks(null, this.options.valueType[1] === "percentage" ? "%" : "")
      .tickSize(-width + margin.right + margin.left);

    svg.append("g")
      .attr("class", "d3chart-yaxis")
      .attr("transform", function(){
          return "translate(" + margin.left + "," + margin.top + ")";
      })
      .call(yAxis)
      .call(g => g.select(".domain").remove());

    let vis = svg.append("g");
    
    let circles = vis.selectAll("circle").data(data);

    // Text Labels
    function isOffsetLabel(d) {
      let range = rRange(d.r);
      return range <= 10;
    }

    circles
      .enter()
        .insert("circle")
        .attr("cx", function (d) {
          return xRange(d.x);
        })
        .attr("cy", function (d) {
          return yRange(d.y);
        })
        .attr("r", function (d) {
          return rRange(d.r);
        })
        .attr("id", d => this.slugify(d.name, `${targetId}-bubblecircle-`))
        .attr("fill", d => colors(d))
        .attr("class", (d, j) => `d3chart-bubblecircle d3chart-color-${j + this.options.colorMod}`);

    circles
      .enter()
        .append("text")
        .attr("id", d => this.slugify(d.name, `${targetId}-bubblelabel-`))
        .attr("filter", d => {
          return isOffsetLabel(d) ? "url(#offset-label-bg)" : ""
        })
        .attr("x", d => {
          return xRange(d.x) - (isOffsetLabel(d) ? rRange(d.r) + 4 : 0);
        })
        .attr("y", d => yRange(d.y))
        .attr("class", d => {
          return "d3chart-bubblelabel" + (isOffsetLabel(d) ? " offset-l" : "");
        })
        .attr("fill", d => isOffsetLabel(d) ? "currentColor" : labelColors(d))
        .text(d => {
          let labelId = this.retrieveLabelId(d.name);
          if(labelId) {
            return labelId;
          }
          return d.name;
        })
        .filter(d => isOffsetLabel(d))
        .lower();

    chart.reset(svg);
  }
}