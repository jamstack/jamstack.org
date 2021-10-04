new D3VerticalBarChart("demographics-jobs-chart", "demographics-jobs-table", {
  showInlineBarValues: "outside",
});

new D3HorizontalBarChart("demographics-jobtitle-chart", "demographics-jobtitle-table", {
  showInlineBarValues: "outside",
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
    left: 90
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
    left: 90
  }
});

// TODO (@zachleat) fix label wrapping
// https://bl.ocks.org/mbostock/7555321
new D3HorizontalBarChart("experience-pandemic-chart", "experience-pandemic-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 420
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
  showInlineBarValues: "inside",
  margin: {
    left: 160
  },
  mode: "stacked"
});




// --- samples
new D3VerticalBarChart("yoe-2020-vert", "yoe-2020-vert-table", {
  showInlineBarValues: "outside",
});

new D3HorizontalBarChart("yoe-2020", "yoe-2020-table", {
  margin: {
    right: 50
  }
});

new D3VerticalBarChart("yoe-2021-vert", "yoe-2021-vert-table", {
});
new D3HorizontalBarChart("yoe-2021", "yoe-2021-table", {
});

new D3VerticalBarChart("yoe-stack-vert", "yoe-stack-vert-table", {
  showInlineBarValues: "outside",
});

new D3HorizontalBarChart("yoe-stack", "yoe-stack-table", {
  showInlineBarValues: "outside",
});

new D3HorizontalBarChart("yoe-usercount-stacked", "yoe-usercount-stacked-table", {
  mode: "stacked",
});

new D3VerticalBarChart("yoe-usercount-vert-stacked", "yoe-usercount-vert-stacked-table", {
  mode: "stacked",
});

new D3BubbleChart("sua", "sua-table");