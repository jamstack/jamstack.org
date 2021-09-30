new D3VerticalBarChart("yoe-2020-vert", "yoe-2020-table", {
  showInlineBarValues: "outside",
});

new D3HorizontalBarChart("yoe-2020", "yoe-2020-table", {
  margin: {
    right: 50
  }
});

new D3VerticalBarChart("yoe-2021-vert", "yoe-2021-table", {
});
new D3HorizontalBarChart("yoe-2021", "yoe-2021-table", {
});

new D3VerticalBarChart("yoe-stack-vert", "yoe-stack-table");

new D3HorizontalBarChart("yoe-stack", "yoe-stack-table");

new D3HorizontalBarChart("yoe-usercount-stacked", "yoe-usercount-table", {
  mode: "stacked",
});

new D3VerticalBarChart("yoe-usercount-vert-stacked", "yoe-usercount-table", {
  mode: "stacked",
});

new D3BubbleChart("sua", "sua-table");