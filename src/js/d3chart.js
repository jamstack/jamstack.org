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
        "#78F19A"
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
        "#000",
        "#000"
      ],
      colorMod: 0,
      inlineLabelPad: 5,
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
        height: 660
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

  generateLegend(labels = []) {
    let container = document.createElement("div");
    container.classList.add("d3chart-legend");

    let html = [];
    for(let j = 0; j < labels.length; j++) {
      html.push(`<div class="d3chart-legend-${j + this.options.colorMod}" style="background-color: ${this.options.colors[j]}; color: ${this.options.labelColors[j]}">${labels[j] || ""}</div>`);
    }

    container.innerHTML = html.join("");
    return container;
  }

  getKeys(data) {
    return data.columns.slice(1);
  }

  renderLegend(data) {
    if(!this.options.showLegend) {
      return;
    }

    let keys = this.getKeys(data);
    let legend = this.generateLegend(keys, this.options.colors);
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
        .ticks(null, "%")
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
          .text(function(d) { return (d.value * 100).toFixed(0) + "%"; });
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
        .ticks(5, "%")
        .tickSize(height - margin.bottom - margin.top))
      .call(g => g.select(".domain").remove());

    let yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .attr("class", "d3chart-yaxis")
      .call(d3.axisLeft(y0).tickSizeOuter(0))
      .call(g => g.select(".domain").remove());

    let dataMod = d => {
      let incrementer = 0;

      return keys.map(key => {
        let data = {
          key,
          value: d[key],
          width: x(d[key]) - x(0),
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
          .text(function(d) { return (d.value * 100).toFixed(0) + "%"; });
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
    }

    let chart = super(target, optionOverrides, "d3chart-bubble");
    let csvData = chart.parseDataToCsv(tableId);

    let data = csvData.split("\n").slice(1).map(entry => {
      let [name, x, y, r] = entry.split(",");
      return {
        name,
        x,
        y,
        r,
      };
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

    let xRange = d3.scaleLinear()
      .range([margin.left + margin.right, width - margin.left - margin.right])
      .domain([
        0, //d3.min(data, d => d.x),
        d3.max(data, d => d.x)
      ]);

    let yRange = d3.scaleLinear()
      .range([height - margin.top - margin.bottom, margin.top + margin.bottom]) // flipped
      .domain([
        0, //d3.min(data, d => d.y),
        d3.max(data, d => d.y)
      ]);

    let rRange = d3.scaleLinear()
      .range([10, 40])
      .domain([
        d3.min(data, d => d.r),
        d3.max(data, d => d.r)
      ]);

    let xScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, width - margin.left - margin.right]);

    let xAxis = d3.axisBottom()
      .scale(xScale)
      .ticks(null, "%")
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
        .domain([1, 0])
        .range([0, height - margin.top - margin.bottom]))
      .ticks(null, "%")
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
      return range / d.name.length <= 3;
    }

    function getSlug(d) {
      return `chart-${targetId}-bubblelabel-${d.name.toLowerCase().replace(/\s/g, "")}`;
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
        .attr("fill", d => colors(d))
        .attr("class", (d, j) => `d3chart-color-${j + this.options.colorMod}`)
        .on("mouseover", function(event, d) {
          d3.select(`#${getSlug(d)}`).raise(); 
        })
        .on("mouseout", function(event, d) {
          d3.select(`#${getSlug(d)}`).lower(); 
        });

    circles
      .enter()
        // .append("image")
        .append("text")
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
        .text(d => d.name)
        // .attr("href", "https://v1.indieweb-avatar.11ty.dev/https%3A%2F%2Fwww.netlify.com%2F/")
        // .attr("width", 25)
        // .attr("height", 25)
        .filter(d => isOffsetLabel(d))
        .lower()
        .attr("id", d => getSlug(d))
        .on("mouseover", function() {
          d3.select(this).raise(); 
        })
        .on("mouseout", function() {
          d3.select(this).lower(); 
        });

    circles
      .enter()
      .filter(d => isOffsetLabel(d))

    chart.reset(svg);
  }
}