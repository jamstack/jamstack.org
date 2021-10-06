new D3VerticalBarChart("demographics-jobs-chart", "demographics-jobs-table", {
  showInlineBarValues: "outside",
});

new D3HorizontalBarChart("demographics-jobtitle-chart", "demographics-jobtitle-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 150
  },
  colorMod: 2
});

new D3HorizontalBarChart("demographics-employmentstatus-chart", "demographics-employmentstatus-table", {
  showInlineBarValues: "outside",
  margin: {
    left: 100
  }
});

new D3HorizontalBarChart("experience-years-chart", "experience-years-table", {
  showInlineBarValues: "outside",
  margin: {
    left: 50
  }
});

new D3HorizontalBarChart("experience-region-chart", "experience-region-table", {
  mode: "stacked",
  showInlineBarValues: false,
  margin: {
    left: 50,
    right: 0
  }
});

new D3HorizontalBarChart("experience-fulltimevstudent-chart", "experience-fulltimevstudent-table", {
  showInlineBarValues: "outside",
  margin: {
    left: 50
  }
});

// TODO (@zachleat) fix label wrapping
// https://bl.ocks.org/mbostock/7555321
new D3HorizontalBarChart("experience-pandemic-chart", "experience-pandemic-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 200
  },
  wrapAxisLabel: {
    left: true,
  },
  colorMod: 3
});

new D3VerticalBarChart("experience-wentremote-chart", "experience-wentremote-table", {
  showInlineBarValues: "outside",
  colorMod: 2,
  showLegend: false,
});

new D3VerticalBarChart("experience-wentremotetitle-chart", "experience-wentremotetitle-table", {
  showInlineBarValues: "outside",
  showLegend: false,
});

new D3HorizontalBarChart("adoption-purpose-chart", "adoption-purpose-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 200
  },
  colorMod: 1
});

new D3HorizontalBarChart("adoption-audience-chart", "adoption-audience-table", {
  showInlineBarValues: "inside-offset",
  margin: {
    left: 110
  },
  mode: "stacked"
});

new D3HorizontalBarChart("adoption-titles-chart", "adoption-titles-table", {
  showInlineBarValues: "inside-offset",
  margin: {
    left: 90,
    top: 30,
  },
  mode: "stacked",
  scale: "proportional"
});

new D3VerticalBarChart("adoption-frequency-chart", "adoption-frequency-table", {
  showInlineBarValues: "inside",
  showAxisLabels: true,
  margin: {
    left: 60,
    top: 30,
    bottom: 60,
  },
  mode: "stacked"
});

new D3HorizontalBarChart("adoption-industries-chart", "adoption-industries-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 200
  },
  wrapAxisLabel: {
    left: true,
  },
  colorMod: 3,
  labelPrecision: 0,
});

new D3BubbleChart("adoption-serverside-chart", "adoption-serverside-table", {
  valueType: ["percentage", "float"]
});

new D3HorizontalBarChart("workflows-devices-chart", "workflows-devices-table", {
  showInlineBarValues: "inside-offset",
  mode: "stacked",
  margin: {
    left: 140
  }
});

new D3VerticalBarChart("workflows-priorities-chart", "workflows-priorities-table", {
  showInlineBarValues: "outside",
  colorMod: 2,
  showLegend: false,
  valueType: ["float"],
});

new D3BubbleChart("workflows-design-chart", "workflows-design-table", {
  valueType: ["percentage", "float"]
});

new D3BubbleChart("workflows-editors-chart", "workflows-editors-table", {
  valueType: ["percentage", "float"]
});

new D3BubbleChart("choices-cms-chart", "choices-cms-table", {
  valueType: ["percentage", "float"]
});

new D3BubbleChart("choices-cmsdelta-chart", "choices-cmsdelta-table", {
  valueType: ["percentage", "float"]
});

new D3BubbleChart("choices-langs-chart", "choices-langs-table", {
  valueType: ["percentage", "float"]
});

new D3BubbleChart("choices-langsdelta-chart", "choices-langsdelta-table", {
  valueType: ["percentage", "float"]
});

new D3BubbleChart("choices-frameworks-chart", "choices-frameworks-table", {
  valueType: ["percentage", "float"]
});

new D3BubbleChart("choices-frameworksminor-chart", "choices-frameworksminor-table", {
  valueType: ["percentage", "float"]
});

new D3BubbleChart("choices-frameworksdelta-chart", "choices-frameworksdelta-table", {
  valueType: ["percentage", "float"]
});

new D3HorizontalBarChart("choices-thirdparty-chart", "choices-thirdparty-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 185
  },
});