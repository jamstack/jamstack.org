new D3HorizontalBarChart(
  "job-titles-2021-2022-comparison-chart",
  "job-titles-2021-2022-comparison-table",
  {
    showInlineBarValues: "outside",
    margin: {
      left: 188,
    },
    scaleTicks: {
      x: true,
    },
    colorMod: 1,
    interactive: true
  }
);

new D3HorizontalBarChart("employment-status-chart", "employment-status-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 128,
  },
  colorMod: 0,
  scaleTicks: {
    x: true,
  },
});

new D3VerticalBarChart(
  "experience-increasing-over-time-chart",
  "experience-increasing-over-time-table",
  {
    showInlineBarValues: false,
    interactive: true
  }
);

new D3HorizontalBarChart(
  "experience-by-region-chart",
  "experience-by-region-table",
  {
    mode: "stacked",
    showInlineBarValues: false,
    margin: {
      left: 48,
      right: 0,
    },
    interactive: true
  }
);

new D3VerticalBarChart(
  "respondents-by-region-chart",
  "respondents-by-region-table",
  {
    showInlineBarValues: false,
    margin: {
      left: 32,
      bottom: 88,
      right: 32,
    },
    colorMod: 1,
    rotateXAxisLabels: true,
    interactive: true
  }
);

new D3HorizontalBarChart(
  "have-you-changed-jobs-in-the-last-12-months-chart",
  "have-you-changed-jobs-in-the-last-12-months-table",
  {
    showInlineBarValues: "outside",
    showLegend: false,
    margin: {
      left: 40,
    },
    colorMod: 3,
  }
);

new D3HorizontalBarChart(
  "what-influenced-staying-chart",
  "what-influenced-staying-table",
  {
    mode: "stacked",
    showInlineBarValues: false,
    margin: {
      left: 164,
      right: 0,
    },
    scaleTicks: {
      x: true,
    },
    interactive: true
  }
);

new D3HorizontalBarChart(
  "what-influenced-leaving-chart",
  "what-influenced-leaving-table",
  {
    mode: "stacked",
    showInlineBarValues: false,
    margin: {
      left: 164,
      right: 0,
    },
    scaleTicks: {
      x: true,
    },
    interactive: true
  }
);

new D3HorizontalBarChart("remote-frequency-chart", "remote-frequency-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  margin: {
    left: 64,
  },
  colorMod: 0,
  scaleTicks: {
    x: true,
  },
});

new D3HorizontalBarChart("remote-changes-chart", "remote-changes-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  margin: {
    left: 164,
  },
  colorMod: 1,
  scaleTicks: {
    x: true,
  },
});

new D3VerticalBarChart(
  "i-enjoy-remote-work-chart",
  "i-enjoy-remote-work-table",
  {
    showLegend: false,
    showInlineBarValues: "outside",
    colorMod: 2,
    wrapTicks: {
      x: true,
    },
  }
);

new D3VerticalBarChart(
  "my-company-has-remote-work-figured-out-chart",
  "my-company-has-remote-work-figured-out-table",
  {
    showLegend: false,
    showInlineBarValues: "outside",
    colorMod: 2,
    wrapTicks: {
      x: true,
    },
  }
);

new D3VerticalBarChart(
  "i-would-like-to-work-remote-more-often-chart",
  "i-would-like-to-work-remote-more-often-table",
  {
    showLegend: false,
    showInlineBarValues: "outside",
    colorMod: 3,
    wrapTicks: {
      x: true,
    },
  }
);

new D3VerticalBarChart(
  "i-would-like-to-work-remote-more-often-chart",
  "i-would-like-to-work-remote-more-often-table",
  {
    showLegend: false,
    showInlineBarValues: "outside",
    colorMod: 3,
    wrapTicks: {
      x: true,
    },
  }
);

new D3VerticalBarChart(
  "i-changed-jobs-to-work-remotely-more-often-chart",
  "i-changed-jobs-to-work-remotely-more-often-table",
  {
    showLegend: false,
    showInlineBarValues: "outside",
    colorMod: 3,
    wrapTicks: {
      x: true,
    },
  }
);

new D3VerticalBarChart(
  "i-would-quit-if-in-person-was-more-often-chart",
  "i-would-quit-if-in-person-was-more-often-table",
  {
    showLegend: false,
    showInlineBarValues: "outside",
    colorMod: 0,
    wrapTicks: {
      x: true,
    },
  }
);

new D3VerticalBarChart(
  "i-would-quit-my-job-if-remote-was-more-often-chart",
  "i-would-quit-my-job-if-remote-was-more-often-table",
  {
    showLegend: false,
    showInlineBarValues: "outside",
    colorMod: 0,
    wrapTicks: {
      x: true,
    },
  }
);

new D3HorizontalBarChart(
  "what-is-the-purpose-of-the-sites-you-built-in-2022-chart",
  "what-is-the-purpose-of-the-sites-you-built-in-2022-table",
  {
    showInlineBarValues: "outside",
    showLegend: false,
    margin: {
      left: 148,
    },
    colorMod: 2,
    scaleTicks: {
      x: true,
    },
  }
);

new D3HorizontalBarChart(
  "types-of-sites-built-last-12-months-chart",
  "types-of-sites-built-last-12-months-table",
  {
    mode: "stacked",
    showInlineBarValues: false,
    margin: {
      left: 128,
      right: 0,
    },
    scaleTicks: {
      x: true,
    },
    interactive: true
  }
);

new D3VerticalBarChart(
  "target-devices-by-type-chart",
  "target-devices-by-type-table",
  {
    showInlineBarValues: "outside",
    wrapTicks: {
      x: true,
    },
    interactive: true
  }
);

new D3VerticalBarChart("audience-sizes-chart", "audience-sizes-table", {
  showInlineBarValues: "outside",
  wrapTicks: {
    x: true,
  },
  interactive: true
});

new D3BubbleChart(
  "cms-usage-vs-satisfaction-chart",
  "cms-usage-vs-satisfaction-table",
  {
    radiusColumn: 1,
    valueType: ["percentage", "float"],
    extendedColors: true,
    scaleTicks: {
      x: true,
    },
  }
);

new D3BubbleChart(
  "programming-language-usage-vs-satisfaction-chart",
  "programming-language-usage-vs-satisfaction-table",
  {
    radiusColumn: 1,
    valueType: ["percentage", "float"],
    scaleTicks: {
      x: true,
    },
  }
);

new D3BubbleChart(
  "frameworks-usage-vs-satisfaction-chart",
  "frameworks-usage-vs-satisfaction-table",
  {
    radiusColumn: 1,
    valueType: ["percentage", "float"],
    extendedColors: true,
    scaleTicks: {
      x: true,
    },
  }
);

new D3BubbleChart(
  "smaller-frameworks-usage-vs-satisfaction-chart",
  "smaller-frameworks-usage-vs-satisfaction-table",
  {
    radiusColumn: 1,
    valueType: ["percentage", "float"],
    scaleTicks: {
      x: true,
    },
  }
);

new D3BubbleChart(
  "frameworks-usage-vs-satisfaction-changes-chart",
  "frameworks-usage-vs-satisfaction-changes-table",
  {
    valueType: ["percentage", "float"],
    extendedColors: true,
    scaleTicks: {
      x: true,
    },
  }
);

new D3HorizontalBarChart("web3-feelings-chart", "web3-feelings-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  margin: {
    left: 164,
  },
  colorMod: 1,
  scaleTicks: {
    x: true,
  },
});

new D3HorizontalBarChart("web3-usage-chart", "web3-usage-table", {
  mode: "stacked",
  colorMod: 2,
  showInlineBarValues: false,
  margin: {
    left: 128,
    scaleTicks: {
      x: true,
    },
  },
  interactive: true
});

new D3HorizontalBarChart("web-components-chart", "web-components-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  margin: {
    left: 180,
  },
  colorMod: 3,
  scaleTicks: {
    x: true,
  },
});

new D3VerticalBarChart("serverless-usage-chart", "serverless-usage-table", {
  showLegend: false,
  showInlineBarValues: "outside",
  colorMod: 2,
  wrapTicks: {
    x: true,
  },
  scaleTicks: {
    x: true,
  },
});
