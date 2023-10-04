const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

class D3Chart {
  constructor(targetId, options, className) {
    this.targetId = targetId;
    this.className = className;

    this.options = Object.assign(
      {
        showInlineBarValues: "inside", // inside, inside-offset, and outside supported
        showLegend: true,
        showAxisLabels: false,
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
          "#000",
          "#000",
          "#000",
          "#000",
          "#000",
          "#000",
          "#fff",
          "#000",
          "#fff",
          "#000",
          "#000",
          "#000",
          "#000",
        ],
        colorMod: 0,
        inlineLabelPad: 5,
        labelPrecision: 0,
        // TODO make this automatic by parsing `%` signs
        valueType: ["percentage"],
        sortLegend: false,
        highlightElementsFromLegend: false,
        extendedColors: false,
      },
      options
    );

    this.options.colors = this.normalizeColors(
      this.options.colors,
      this.options.colorMod
    );
    this.options.labelColors = this.normalizeColors(
      this.options.labelColors,
      this.options.colorMod
    );
  }

  scaleTicksX(svg) {
    const getTranslateX = (node) =>
      node.transform.baseVal.consolidate().matrix["e"];

    const tickDistancesX = [];
    const tickWidths = [];

    svg.selectAll(".d3chart-xaxis .tick").each(function () {
      tickDistancesX.push(getTranslateX(d3.select(this).node()));
      tickWidths.push(d3.select(this).node().getBBox().width);
    });

    const tickSize = (tickDistancesX.at(-1) - tickDistancesX.at(-2)) * 0.75;
    const largestTickWidth = Math.max(...tickWidths);
    const baseFontSize = 1.3;

    if (largestTickWidth >= tickSize) {
      const scale = tickSize / largestTickWidth;

      svg
        .selectAll(".d3chart-xaxis .tick text")
        .style("font-size", `${baseFontSize * scale}em`)
    }
  }

  onResize(callback) {
    if (!("ResizeObserver" in window)) {
      window.addEventListener("resize", () => {
        callback.call(this);
      });
      return;
    }

    let resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // console.log( "resizing", this.target );
        callback.call(this);
      }
    });

    resizeObserver.observe(this.target);
  }

  onDeferInit(callback) {
    if (!("IntersectionObserver" in window)) {
      callback.call(this);
      return;
    }

    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log( "initing", this.target );
            callback.call(this);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(this.target);
  }

  normalizeColors(colors = [], mod = 0) {
    if (mod) {
      let c = [];
      let len = colors.length;
      let k = len + mod;
      for (let j = mod || 0; j < k; j++) {
        c.push(colors[j % len]);
      }
      return c;
    }

    return colors;
  }

  get margin() {
    let m = Object.assign(
      {
        top: 30,
        right: 10,
        bottom: 25,
        left: 40,
      },
      this.options.margin
    );

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
        height: 450,
      },
      max: {
        height: 1000,
      },
    };
  }

  get width() {
    return Math.max(this.dimensions.container.width, this.dimensions.min.width);
  }

  get height() {
    return Math.max(
      Math.min(this.dimensions.container.height, this.dimensions.max.height) -
        this.margin.bottom,
      this.dimensions.min.height
    );
  }

  get svg() {
    return d3
      .create("svg")
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
    if (this.className) {
      target.classList.add(this.className);
    }

    for (let child of target.children) {
      if (child.tagName.toLowerCase() === "svg") {
        child.remove();
      }
    }

    let node = svg.node();
    target.appendChild(node);
  }

  // Thanks https://bl.ocks.org/mbostock/7555321
  static wrapText(text, width) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.01, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y),
        firstTspan = tspan;

      let wrapCount = 0;
      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          wrapCount++;
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", lineHeight + dy + "em")
            .text(word);
        }
      }

      if (wrapCount) {
        text.attr("dy", 0).attr("class", "d3chart-label-wrapped");
        firstTspan.attr("dy", -0.3 * wrapCount * lineHeight + "em");
      }
    });
  }

  parseDataToCsv(tableId, reverse) {
    let table = document.getElementById(tableId);
    let headerCells = table.querySelectorAll(":scope thead th");
    let bodyRows = table.querySelectorAll(":scope tbody tr");

    let headerOutput = [];
    for (let th of headerCells) {
      headerOutput.push(th.textContent.replace(/,/g, "&comma;"));
    }

    let output = [];
    for (let tr of bodyRows) {
      let row = [];
      for (let child of tr.children) {
        let value = child.textContent;
        if (
          child.getAttribute("data-avoid-parse") === null &&
          value.endsWith("%")
        ) {
          value = parseFloat(value) / 100;
        }
        row.push(value);
      }
      output.push(row.join(","));
    }

    if (reverse) {
      return [headerOutput.join(","), ...output.reverse()].join("\n");
    }
    return [headerOutput.join(","), ...output].join("\n");
  }

  retrieveLabelId(label) {
    let match = label.match(/^(\d*)\./);
    if (match && match[1]) {
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
    for (let j = 0; j < labels.length; j++) {
      let tag = "div";
      let attrs = "";
      if (
        this.options.highlightElementsFromLegend ||
        this.options.interactive
      ) {
        tag = "button";
        attrs = " type='button'";
      }

      attrs += ` data-item=${this.slugify(labels[j], "")} `;

      entries.push({
        label: labels[j],
        html: `<${tag}${attrs} class="d3chart-legend-entry d3chart-legend-${
          j + this.options.colorMod
        }">${labels[j] || ""}</${tag}>`,
      });
    }

    if (this.options.sortLegend) {
      entries = entries.sort((a, b) => {
        let idA = this.retrieveLabelId(a.label);
        let idB = this.retrieveLabelId(b.label);
        if (idA && idB) {
          return idA - idB;
        }
        if (a.label < b.label) {
          return -1;
        } else if (b.label < a.label) {
          return 1;
        }
        return 0;
      });
    }

    let html = [];
    for (let entry of entries) {
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
    if (target.classList.contains("d3chart-legend-entry")) {
      let circleSlug = this.slugify(
        target.innerHTML,
        `${this.targetId}-bubblecircle-`
      );
      let labelSlug = this.slugify(
        target.innerHTML,
        `${this.targetId}-bubblelabel-`
      );

      let circle = document.getElementById(circleSlug);
      let label = document.getElementById(labelSlug);

      circle.classList[method]("active");
      label.classList[method]("active");

      circle.closest("svg").classList[method]("d3chart-bubble-active");
    }
  }

  renderLegend(data) {
    if (!this.options.showLegend) {
      return;
    }

    let keys = this.getKeys(data);
    let legend = this.generateLegend(keys, this.options.colors);

    legend.classList.add(`${this.targetId}-legend`);

    let selector = ":scope .d3chart-legend-placeholder";

    let previousEl = this.target.previousElementSibling;
    let legendAnchorBefore = previousEl
      ? previousEl.querySelector(selector)
      : null;

    let nextEl = this.target.nextElementSibling;
    let legendAnchorAfter = nextEl ? nextEl.querySelector(selector) : null;

    if (legendAnchorBefore || legendAnchorAfter) {
      (legendAnchorBefore || legendAnchorAfter).appendChild(legend);
    } else {
      // inside
      this.target.appendChild(legend);
    }
  }

  roundValue(num, valueType = "percentage") {
    if (valueType !== "percentage") {
      return num;
    }

    let d0 = (num * 100).toFixed(0);
    if (this.options.labelPrecision === 0) {
      return d0;
    }

    let d1 = (num * 100).toFixed(1);
    if (d1.endsWith(".0")) {
      return d0;
    }
    return d1;
  }
}

class D3VerticalBarChart extends D3Chart {
  constructor(target, tableId, optionOverrides = {}) {
    if (!optionOverrides.rotateXAxisLabels) {
      optionOverrides.rotateXAxisLabels = {
        maxWidth: 0,
      };
    }

    let chart = super(target, optionOverrides, "d3chart-vbar");

    let csvData = chart.parseDataToCsv(tableId);
    let dataSplit = csvData.split("\n");
    this.axisLabels = [dataSplit[0].split(",")[0]];

    let data = Object.assign(d3.csvParse(csvData, d3.autoType));

    this.onDeferInit(function () {
      this.render(chart, data);
      this.renderLegend(data);

      this.onResize(function () {
        this.render(chart, data);
      });
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
    let groups = data.map((d) => d[groupKey]);

    let y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => {
          if (options.mode === "stacked") {
            let sum = 0;
            for (let key of keys) {
              sum += d[key];
            }
            return sum;
          }

          return d3.max(keys, (key) => d[key]);
        }),
      ])
      .nice()
      .rangeRound([height - margin.bottom, margin.top]);

    let x0 = d3
      .scaleBand()
      .domain(groups)
      .rangeRound([margin.left, width - margin.right])
      .paddingInner(0.2);

    let x1 = d3
      .scaleBand()
      .domain(keys)
      .rangeRound([0, x0.bandwidth()])
      .padding(0.1);

    let yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .attr("class", "d3chart-yaxis")
        .call(
          d3
            .axisLeft(y)
            .ticks(null, options.valueType[0] === "percentage" ? "%" : "")
            .tickSize(-width + margin.left + margin.right)
        )
        .call((g) => g.select(".domain").remove());

    let xAxis = (g) =>
      g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .attr("class", "d3chart-xaxis")
        .call(d3.axisBottom(x0).tickSizeOuter(0))
        .call((g) => g.select(".domain").remove());

    let dataMod = (d) => {
      let incrementer = 0;

      return keys.map((key) => {
        let data = {
          key,
          value: d[key],
          width: x1.bandwidth(),
          height: y(0) - y(d[key]),
          left: x1(key),
          top: y(d[key]),
          slug: this.slugify(key, ""),
        };

        if (options.mode === "stacked") {
          data.width = x0.bandwidth();
          data.left = 0;
          data.top = y(d[key]) - incrementer;
          incrementer += data.height;
        }

        return data;
      });
    };

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    svg
      .append("g")
      .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", (d) => `translate(${x0(d[groupKey])},0)`)
      .selectAll("rect")
      .data(dataMod)
      .join("rect")
      .attr("x", (d) => d.left)
      .attr("y", (d) => d.top)
      .attr("width", (d) => d.width)
      .attr("height", (d) => (isNaN(d.height) ? 0 : d.height))
      .attr("fill", (d) => colors(d.key))
      .attr("data-item", (d) => d.key)
      .attr("class", (d, j) => `d3chart-color-${j + options.colorMod}`)
      .classed("d3chart-rect", true);

    if (options.showInlineBarValues) {
      svg
        .append("g")
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", (d) => `translate(${x0(d[groupKey])},0)`)
        .selectAll("text")
        .data(dataMod)
        .join("text")
        .attr("x", (d) => d.left + d.width / 2)
        .attr("y", (d) => {
          if (isNaN(d.height)) {
            return 0;
          }

          return (
            d.top -
            (options.showInlineBarValues === "outside"
              ? options.inlineLabelPad
              : -15 - options.inlineLabelPad)
          );
        })
        .attr("fill", (d) =>
          options.showInlineBarValues === "inside"
            ? labelColors(d.key)
            : "currentColor"
        )
        .attr("class", "d3chart-inlinebarvalue")
        .text((d) => {
          if (d.value === null) {
            return "";
          }

          return (
            this.roundValue(d.value, options.valueType[0]) +
            (options.valueType[0] === "percentage" ? "%" : "")
          );
        });
    }

    // TODO for horizontal bar chart
    if (options.showAxisLabels) {
      svg
        .append("text")
        .attr("x", Math.round(width / 2))
        .attr("y", height - 6)
        .attr("class", "d3chart-axislabel d3chart-axislabel-center")
        .text(this.axisLabels[0]);
    }

    chart.reset(svg);

    if (options.wrapTicks && options.wrapTicks.x) {
      const heights = [];
      const wrap = d3.textwrap().bounds({
        height: margin.bottom,
        width: x0.bandwidth() * 1 + keys.length + 2,
      });

      svg.selectAll(".d3chart-xaxis text").call(wrap);
      svg
        .selectAll("foreignObject")
        .attr("x", function () {
          return (-1 * +d3.select(this).attr("width")) / 2;
        })
        .style("text-align", "center")
        .style("font-weight", 600)
        .attr("height", function () {
          const height = d3
            .select(this)
            .select("div")
            .node()
            .getBoundingClientRect().height;
          heights.push(height);
          return height;
        });

      svg.attr("overflow", "visible");
      svg.node().parentNode.style.marginBottom = `${Math.max(...heights)}px`;
    }

    if (options.rotateXAxisLabels === true) {
      svg
        .select(".d3chart-xaxis")
        .selectAll("text")
        .attr("transform", "rotate(45)")
        .style("text-anchor", "start");
    }

    if (options.interactive) {
      this.setupInteractivity(svg);
    }
  }

  setupInteractivity(svg) {
    const rectElements = svg.selectAll(".d3chart-rect");
    const labelElements = svg.selectAll(".d3chart-bubblelabel");

    let resetTimeout;

    const legendItems = d3.selectAll(
      `.${this.targetId}-legend .d3chart-legend-entry`
    );

    function knockBackOpacity() {
      rectElements.style("fill-opacity", 0.15);
      labelElements.style("fill-opacity", 0.15);
      legendItems.style("opacity", 0.15);
    }

    function resetOpacity() {
      resetTimeout = setTimeout(() => {
        labelElements.style("fill-opacity", 1);
        rectElements.style("fill-opacity", 1);

        legendItems.style("opacity", 1);
      }, 512);
    }

    function handleLegendIteraction() {
      clearTimeout(resetTimeout);

      knockBackOpacity();

      const item = d3.select(this).attr("data-item");

      const rect = rectElements.filter(function () {
        return d3.select(this).attr("data-item") === item;
      });

      const label = labelElements.filter(function () {
        return d3.select(this).attr("data-item") === item;
      });

      rect.style("fill-opacity", 1);
      label.style("fill-opacity", 1);

      d3.select(this).style("opacity", 1);
    }

    legendItems.on("mouseover", handleLegendIteraction);
    legendItems.on("focus", handleLegendIteraction);

    legendItems.on("mouseout", function () {
      resetOpacity();
    });

    legendItems.on("focusout", function () {
      resetOpacity();
    });

    rectElements.on("mouseover", function (e, data) {
      clearTimeout(resetTimeout);

      knockBackOpacity();

      const label = svg.select(
        `.d3chart-bubblelabel[data-item="${data.slug}"]`
      );
      const legendItem = legendItems.filter(function () {
        return d3.select(this).attr("data-item") === data.slug;
      });

      d3.select(this).style("fill-opacity", 1);
      label.style("fill-opacity", 1);
      legendItem.style("opacity", 1);
    });

    rectElements.on("mouseout", function () {
      resetOpacity();
    });
  }
}

class D3HorizontalBarChart extends D3Chart {
  constructor(target, tableId, optionOverrides = {}) {
    optionOverrides.margin = Object.assign(
      {
        top: 20,
        right: 50,
        bottom: 20,
        left: 120,
      },
      optionOverrides.margin
    );
    let chart = super(target, optionOverrides, "d3chart-hbar");
    let csvData = chart.parseDataToCsv(tableId, true);
    let data = Object.assign(d3.csvParse(csvData, d3.autoType));

    this.onDeferInit(function () {
      this.render(chart, data);
      this.renderLegend(data);

      this.onResize(function () {
        this.render(chart, data);
      });
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
    let groups = data.map((d) => d[groupKey]);

    let x = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => {
          if (options.scale === "proportional") {
            return 1;
          }

          if (options.mode === "stacked") {
            let sum = 0;
            for (let key of keys) {
              sum += d[key];
            }
            return sum;
          }

          return d3.max(keys, (key) => d[key]);
        }),
      ])
      .nice()
      .rangeRound([margin.left, width - margin.right]);

    let y0 = d3
      .scaleBand()
      .domain(groups)
      .rangeRound([height - margin.bottom - margin.top, margin.top])
      .paddingInner(
        options.showInlineBarValues === "inside-offset" ? 0.25 : 0.15
      );

    let y1 = d3
      .scaleBand()
      .domain(keys)
      .rangeRound([0, y0.bandwidth()])
      .padding(0.05);

    let xAxis = (g) =>
      g
        .attr("transform", `translate(0, ${(margin.top + margin.bottom) / 4})`)
        .attr("class", "d3chart-xaxis")
        .call(
          d3
            .axisBottom(x)
            .ticks(5, options.valueType[0] === "percentage" ? "%" : "")
            .tickSize(height - margin.bottom - margin.top)
        )
        .call((g) => g.select(".domain").remove());

    let yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left - 6},0)`)
        .attr("class", "d3chart-yaxis")
        .call(d3.axisLeft(y0).tickSize(0))
        .call((g) => g.select(".domain").remove());

    let dataMod = (d) => {
      let incrementer = 0;
      let sum = 0;
      for (let key of keys) {
        sum += d[key];
      }

      return keys.map((key) => {
        let data = {
          key,
          value: d[key],
          sum,
          width:
            x(options.scale === "proportional" ? d[key] / sum : d[key]) - x(0),
          height: y1.bandwidth(),
          left: margin.left,
          top: y1(key),
          slug: this.slugify(key, ""),
        };

        if (options.mode === "stacked") {
          data.top = 0;
          data.height = y0.bandwidth();
          data.left = margin.left + incrementer;

          incrementer += data.width;
        }

        return data;
      });
    };

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    svg
      .append("g")
      .selectAll("g")
      .data(data)
      .join("g")
      .attr("transform", (d) => `translate(0,${y0(d[groupKey])})`)
      .selectAll("rect")
      .data(dataMod)
      .join("rect")
      .attr("x", (d) => d.left)
      .attr("y", (d) => d.top)
      .attr("width", (d) => (isNaN(d.width) ? 0 : d.width))
      .attr("height", (d) => d.height)
      .attr("fill", (d) => colors(d.key))
      .attr("class", (d, j) => `d3chart-color-${j + options.colorMod}`)
      .classed("d3chart-rect", true)
      .attr("data-item", (d) => d.slug);

    if (options.showInlineBarValues) {
      svg
        .append("g")
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", (d) => `translate(0,${y0(d[groupKey])})`)
        .selectAll("text")
        .data(dataMod)
        .join("text")
        .attr("x", (d) => {
          let offset = options.inlineLabelPad;

          if (isNaN(d.width)) {
            return d.left + offset;
          }

          if (options.showInlineBarValues.startsWith("inside")) {
            offset = -1 * offset;
          }

          if (options.showInlineBarValues === "inside-offset") {
            offset += 16;
          }

          return d.left + d.width + offset;
        })
        .attr("y", (d) => {
          if (options.showInlineBarValues === "inside-offset") {
            return -10;
          }
          return d.top + Math.floor(d.height / 2) - 1;
        })
        .attr(
          "class",
          (d) =>
            "d3chart-inlinebarvalue-h" +
            (options.showInlineBarValues.length
              ? ` ${options.showInlineBarValues}`
              : "")
        )
        .attr("fill", (d) =>
          options.showInlineBarValues === "inside"
            ? labelColors(d.key)
            : "currentColor"
        )
        .text((d) => {
          if (d.value === null) {
            return "";
          }

          return (
            this.roundValue(d.value, options.valueType[0]) +
            (options.valueType[0] === "percentage" ? "%" : "")
          );
        });
    }

    chart.reset(svg);

    if (options.scaleTicks && options.scaleTicks.x) {
      this.scaleTicksX(svg);
    }

    if (options.wrapAxisLabel && options.wrapAxisLabel.left) {
      D3Chart.wrapText(
        svg.selectAll(".d3chart-yaxis .tick text"),
        margin.left - 6
      );
    }

    if (options.interactive) {
      this.setupInteractivity(svg);
    }
  }

  setupInteractivity(svg) {
    const rectElements = svg.selectAll(".d3chart-rect");
    const labelElements = svg.selectAll(".d3chart-bubblelabel");

    let resetTimeout;

    const legendItems = d3.selectAll(
      `.${this.targetId}-legend .d3chart-legend-entry`
    );

    function knockBackOpacity() {
      rectElements.style("fill-opacity", 0.15);
      labelElements.style("fill-opacity", 0.15);
      legendItems.style("opacity", 0.15);
    }

    function resetOpacity() {
      resetTimeout = setTimeout(() => {
        labelElements.style("fill-opacity", 1);
        rectElements.style("fill-opacity", 1);

        legendItems.style("opacity", 1);
      }, 512);
    }

    function handleLegendIteraction() {
      clearTimeout(resetTimeout);

      knockBackOpacity();

      const item = d3.select(this).attr("data-item");

      const rect = rectElements.filter(function () {
        return d3.select(this).attr("data-item") === item;
      });

      const label = labelElements.filter(function () {
        return d3.select(this).attr("data-item") === item;
      });

      rect.style("fill-opacity", 1);
      label.style("fill-opacity", 1);

      d3.select(this).style("opacity", 1);
    }

    legendItems.on("mouseover", handleLegendIteraction);
    legendItems.on("focus", handleLegendIteraction);

    legendItems.on("mouseout", function () {
      resetOpacity();
    });

    legendItems.on("focusout", function () {
      resetOpacity();
    });

    rectElements.on("mouseover", function (e, data) {
      clearTimeout(resetTimeout);

      knockBackOpacity();

      const label = svg.select(
        `.d3chart-bubblelabel[data-item="${data.slug}"]`
      );
      const legendItem = legendItems.filter(function () {
        return d3.select(this).attr("data-item") === data.slug;
      });

      d3.select(this).style("fill-opacity", 1);
      label.style("fill-opacity", 1);
      legendItem.style("opacity", 1);
    });

    rectElements.on("mouseout", function () {
      resetOpacity();
    });
  }
}

class D3BubbleChart extends D3Chart {
  constructor(target, tableId, optionOverrides = {}) {
    optionOverrides.margin = {
      top: 20,
      right: 20,
      bottom: 50,
      left: 65,
    };

    optionOverrides.sortLegend = true;
    optionOverrides.highlightElementsFromLegend = true;
    optionOverrides.showAxisLabels = true;

    if (!optionOverrides.valueType) {
      optionOverrides.valueType = ["percentage", "percentage"];
    }

    let chart = super(target, optionOverrides, "d3chart-bubble");
    let csvData = chart.parseDataToCsv(tableId);
    let dataSplit = csvData.split("\n");
    this.axisLabels = dataSplit[0].split(",").slice(1);

    let data = dataSplit.slice(1).map((entry, id) => {
      const columns = entry.split(",");
      let [name, x, y, r] = columns;
      return {
        name,
        id,
        x,
        y,
        r: r ?? columns[optionOverrides.radiusColumn],
        slug: this.slugify(name, ""),
      };
    });

    // sort from smallest to largest circles to insert in order (to render in the right z-index)
    data = data.slice().sort((a, b) => {
      return b.r - a.r;
    });

    this.onDeferInit(function () {
      this.render(chart, data);
      this.renderLegend(data);

      this.onResize(function () {
        this.render(chart, data);
      });
    });
  }

  getKeys(data) {
    let keys = [];
    for (let entry of data) {
      keys.push(entry.name);
    }
    return keys;
  }

  resolveLimit(data, key, valueType, mode) {
    let limit = d3[mode](data, (d) => parseFloat(d[key]));
    if (valueType !== "percentage") {
      if (mode === "max") {
        limit = Math.ceil(limit);
      } else if (mode === "min") {
        limit = Math.min(Math.floor(limit), 0);
      }
    } else {
      if (mode === "max") {
        if (limit > 1) {
          limit += 0.1;
        } else {
          // round up to at most 1 if percentage < 100%
          if (limit > 0.5) {
            limit = Math.min(limit + 0.1, 1);
          } else {
            (limit = limit + 0.05), 1;
          }
        }
      }
      if (mode === "min") {
        if (limit <= 0) {
          limit -= 0.1;
        } else {
          // round up to at most 1 if percentage < 100%
          limit = Math.min(limit, 0);
        }
      }
    }

    return limit;
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
    let xScale = d3.scaleLinear().range([margin.left, width - margin.right]);
    let yScale = d3.scaleLinear().range([margin.top, height - margin.bottom]);

    let xAxisMin = this.resolveLimit(data, "x", options.valueType[0], "min");
    let xAxisMax = this.resolveLimit(data, "x", options.valueType[0], "max");
    let yAxisMin = this.resolveLimit(data, "y", options.valueType[1], "min");
    let yAxisMax = this.resolveLimit(data, "y", options.valueType[1], "max");

    const yExtent = d3.extent([yAxisMin, yAxisMax]);
    const yRange = yExtent[1] - yExtent[0];

    xScale.domain([xAxisMin, xAxisMax]).nice();
    yScale
      .domain([yExtent[1] + yRange * 0.05, yExtent[0] - yRange * 0.05])
      .nice();

    let rScale = d3
      .scaleLinear()
      .range([7, 25])
      .domain([
        Math.min(
          d3.min(data, (d) => parseFloat(d.r)),
          0
        ),
        d3.max(data, (d) => parseFloat(d.r)),
      ]);

    let xAxis = d3
      .axisBottom()
      .scale(xScale)
      .ticks(null)
      .tickSize(-height + margin.bottom + margin.top)
      .tickFormat((d) =>
        options.valueType[0] === "percentage" ? `${(d * 100).toFixed(0)}%` : d
      );

    svg
      .append("g")
      .attr("class", "d3chart-xaxis")
      .attr("transform", function () {
        return "translate(0," + (height - margin.bottom) + ")";
      })
      .call(xAxis)
      .call((g) => g.select(".domain").remove());

    let yAxis = d3
      .axisLeft()
      .scale(yScale)
      .ticks(null)
      .tickSize(-width + margin.right + margin.left)
      .tickFormat((d) =>
        options.valueType[1] === "percentage" ? `${(d * 100).toFixed(0)}%` : d
      );

    svg
      .append("g")
      .attr("class", "d3chart-yaxis")
      .attr("transform", function () {
        return "translate(" + margin.left + "," + 0 + ")";
      })
      .call(yAxis)
      .call((g) => g.select(".domain").remove());

    svg.selectAll(".d3chart-xaxis .tick").attr("data-chart-value", (d) => d);
    svg.selectAll(".d3chart-yaxis .tick").attr("data-chart-value", (d) => d);

    if (options.showAxisLabels) {
      // Axis labels
      svg
        .append("text")
        .attr("x", width - margin.right)
        .attr("y", height - 6)
        .attr("class", "d3chart-axislabel")
        .text(this.axisLabels[0]);

      svg
        .append("text")
        .attr("x", -1 * margin.top)
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .attr("class", "d3chart-axislabel")
        .text(this.axisLabels[1]);
    }

    let group = svg.append("g");

    let circles = group.selectAll("circle").data(data);

    // Text Labels
    function isOffsetLabel(d) {
      let range = rScale(d.r);
      return range <= 10;
    }

    circles
      .enter()
      .insert("circle")
      .attr("data-item", (d) => d.slug)
      .attr("cx", function (d) {
        return xScale(d.x);
      })
      .attr("cy", function (d) {
        return yScale(d.y);
      })
      .attr("r", function (d) {
        return rScale(d.r);
      })
      .attr(
        "class",
        (d, j) => `d3chart-bubblecircle d3chart-color-${j + options.colorMod}`
      );

    circles
      .enter()
      .append("text")
      .attr("data-item", (d) => d.slug)
      .attr("x", (d) => {
        return xScale(d.x) - (isOffsetLabel(d) ? rScale(d.r) + 4 : 0);
      })
      .attr("y", (d) => yScale(d.y))
      .attr("class", (d) => {
        return "d3chart-bubblelabel" + (isOffsetLabel(d) ? " offset-l" : "");
      })
      .attr("fill", (d) => (isOffsetLabel(d) ? "currentColor" : labelColors(d)))
      .attr("pointer-events", "none")
      .text((d) => {
        let labelId = this.retrieveLabelId(d.name);
        if (labelId) {
          return labelId;
        }
        return d.name;
      })
      .filter((d) => isOffsetLabel(d))
      .lower();

    chart.reset(svg);

    if (options.scaleTicks && options.scaleTicks.x) {
      this.scaleTicksX(svg);
    }

    this.setupInteractivity(svg);
  }

  setupInteractivity(svg) {
    const circleElements = svg.selectAll(".d3chart-bubblecircle");
    const labelElements = svg.selectAll(".d3chart-bubblelabel");

    let resetTimeout;

    const legendItems = d3.selectAll(
      `.${this.targetId}-legend .d3chart-legend-entry`
    );

    function knockBackOpacity() {
      circleElements.style("fill-opacity", 0.15);
      labelElements.style("fill-opacity", 0.15);
      legendItems.style("opacity", 0.15);
    }

    function resetOpacity() {
      resetTimeout = setTimeout(() => {
        labelElements.style("fill-opacity", 1);
        circleElements.style("fill-opacity", 0.85);

        legendItems.style("opacity", 1);
      }, 512);
    }

    function handleLegendIteraction() {
      clearTimeout(resetTimeout);

      knockBackOpacity();

      const item = d3.select(this).attr("data-item");

      const circle = circleElements.filter(function () {
        return d3.select(this).attr("data-item") === item;
      });

      const label = labelElements.filter(function () {
        return d3.select(this).attr("data-item") === item;
      });

      circle.style("fill-opacity", 1);
      label.style("fill-opacity", 1);

      d3.select(this).style("opacity", 1);
    }

    legendItems.on("mouseover", handleLegendIteraction);
    legendItems.on("focus", handleLegendIteraction);

    legendItems.on("mouseout", function () {
      resetOpacity();
    });

    legendItems.on("focusout", resetOpacity);

    circleElements.on("mouseover", function (e, data) {
      clearTimeout(resetTimeout);

      knockBackOpacity();

      const label = svg.select(
        `.d3chart-bubblelabel[data-item="${data.slug}"]`
      );
      const legendItem = legendItems.filter(function () {
        return d3.select(this).attr("data-item") === data.slug;
      });

      d3.select(this).style("fill-opacity", 1);
      label.style("fill-opacity", 1);
      legendItem.style("opacity", 1);
    });

    circleElements.on("mouseout", function () {
      resetOpacity();
    });
  }
}

class D3LineChart extends D3Chart {
  constructor(target, tableId, optionOverrides = {}) {
    let chart = super(target, optionOverrides, "d3chart-hline");
    let csvData = chart.parseDataToCsv(tableId, true);
    let data = Object.assign(d3.csvParse(csvData, d3.autoType));

    this.onDeferInit(function () {
      this.render(chart, data);
      this.renderLegend(data);

      this.onResize(function () {
        this.render(chart, data);
      });
    });
  }

  render(chart, data) {
    let { options, margin, width, height, dimensions, svg } = chart;

    const paddingX = dimensions.container.width / 16;
    const paddingY = 0;

    const timeConv = d3.timeParse("%Y");

    const slices = data.columns.slice(1).map((id) => {
      return {
        id,
        values: data.map((d) => {
          return {
            date: timeConv(d.Date),
            measurement: +d[id],
          };
        }),
        slug: this.slugify(id, ""),
      };
    });

    const xScale = d3
      .scaleTime()
      .range([margin.left + paddingX, width - margin.right - paddingX])
      .domain(d3.extent(data, (d) => timeConv(d.Date)));

    const yScale = d3
      .scaleLinear()
      .rangeRound([height - margin.bottom - paddingY, margin.top + paddingY])
      .domain([
        0,
        d3.max(slices, (c) => d3.max(c.values, (d) => d.measurement)),
      ])
      .nice();

    const yaxis = d3
      .axisLeft()
      .tickFormat(d3.format(".0%"))
      .tickSize(-width + margin.left + margin.right)
      .scale(yScale);
    const xaxis = d3.axisBottom().ticks(d3.timeYear.every(1)).scale(xScale);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(xaxis)
      .call((g) => g.select(".domain").remove());

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(yaxis)
      .call((g) => g.select(".domain").remove());

    const line = d3
      .line()
      .x(function (d) {
        return xScale(d.date);
      })
      .y(function (d) {
        return yScale(d.measurement);
      });

    const lines = svg.selectAll("lines").data(slices).enter().append("g");

    lines
      .append("path")
      .attr("d", (d) => line(d.values))
      .attr("fill", "none")
      .attr("stroke-width", 5)
      .attr(
        "class",
        (d, j) => `d3chart-line d3chart-color-stroke-${j + options.colorMod}`
      )
      .attr("data-item", (d) => d.slug);

    chart.reset(svg);

    this.setupInteractivity(svg);
  }

  setupInteractivity(svg) {
    const lineElements = svg.selectAll(".d3chart-line");
    const legendItems = d3.selectAll(
      `.${this.targetId}-legend .d3chart-legend-entry`
    );

    let resetTimeout;

    function knockBackOpacity() {
      lineElements.style("opacity", 0.15);
      legendItems.style("opacity", 0.15);
    }

    function resetOpacity() {
      resetTimeout = setTimeout(() => {
        lineElements.style("opacity", 1);
        legendItems.style("opacity", 1);
      }, 512);
    }

    lineElements.on("mouseover", function (e, data) {
      clearTimeout(resetTimeout);

      knockBackOpacity();

      d3.select(this).style("opacity", 1);

      const legendItem = legendItems.filter(function () {
        return d3.select(this).attr("data-item") === data.slug;
      });

      legendItem.style("opacity", 1);
    });

    lineElements.on("mouseout", function () {
      resetOpacity();
    });

    legendItems.on("mouseover", function (e, data) {
      clearTimeout(resetTimeout);
      knockBackOpacity();

      const slug = d3.select(this).attr("data-item");

      const line = lineElements.filter(function (d) {
        return d.slug === slug;
      });

      line.style("opacity", 1);

      d3.select(this).style("opacity", 1);
    });

    legendItems.on("mouseout", function () {
      resetOpacity();
    });
  }
}
