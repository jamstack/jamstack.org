new D3HorizontalBarChart("job-titles-2021-2022-comparison-chart", "job-titles-2021-2022-comparison-table", {
  showInlineBarValues: "outside",
  margin: {
    left: 188
  },
  colorMod: 1
});

new D3HorizontalBarChart("employment-status-chart", "employment-status-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 128
  },
  colorMod: 0
});

new D3VerticalBarChart("experience-increasing-over-time-chart", "experience-increasing-over-time-table", {
  showInlineBarValues: false
});

new D3HorizontalBarChart("remote-frequency-chart", "remote-frequency-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  margin: {
    left: 64
  },
  colorMod: 1
});

new D3HorizontalBarChart("remote-changes-chart", "remote-changes-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  margin: {
    left: 164
  },
  colorMod: 2
});

new D3HorizontalBarChart("what-is-the-purpose-of-the-sites-you-built-in-2022-chart", "what-is-the-purpose-of-the-sites-you-built-in-2022-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 148
  },
  colorMod: 3
});

new D3VerticalBarChart("target-devices-by-type-chart", "target-devices-by-type-table", {
  showInlineBarValues: "outside",
});

new D3BubbleChart("cms-usage-vs-satisfaction-chart", "cms-usage-vs-satisfaction-table", {
  radiusColumn: 1,
  valueType: ["percentage", "float"],
});

new D3HorizontalBarChart("primary-programming-language-chart", "primary-programming-language-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  colorMod: 0,
  margin: {
    left: 96
  },
});

new D3LineChart("primary-programming-language-changes-2020-2022-chart", "primary-programming-language-changes-2020-2022-table", {
  showLegend: true,
});

new D3BubbleChart("programming-language-usage-vs-satisfaction-chart", "programming-language-usage-vs-satisfaction-table", {
  radiusColumn: 1,
  valueType: ["percentage", "float"]
});

new D3BubbleChart("frameworks-usage-vs-satisfaction-chart", "frameworks-usage-vs-satisfaction-table", {
  radiusColumn: 1,
  valueType: ["percentage", "float"]
});

new D3BubbleChart("smaller-frameworks-usage-vs-satisfaction-chart", "smaller-frameworks-usage-vs-satisfaction-table", {
  radiusColumn: 1,
  valueType: ["percentage", "float"]
});

new D3BubbleChart("frameworks-usage-vs-satisfaction-changes-chart", "frameworks-usage-vs-satisfaction-changes-table", {
  valueType: ["percentage", "float"]
});

new D3HorizontalBarChart("web3-feelings-chart", "web3-feelings-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  margin: {
    left: 196
  },
  colorMod: 1
});

new D3HorizontalBarChart("web3-usage-chart", "web3-usage-table", {
  mode: "stacked",
  colorMod: 2,
  showInlineBarValues: false,
  margin: {
    left: 128,
    right: 0
  }
});

new D3HorizontalBarChart("web-components-chart", "web-components-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  margin: {
    left: 196
  },
  colorMod: 3
});

new D3VerticalBarChart("serverless-usage-chart", "serverless-usage-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  colorMod: 0
});
