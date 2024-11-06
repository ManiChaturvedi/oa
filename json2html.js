export default function json2html(data) {
    if (!Array.isArray(data) || data.length === 0) {
      return "<table data-user=\"manichaturvedi17@gmail.com\"><thead></thead><tbody></tbody></table>";
    }
  
    // Get unique keys from all objects to generate columns
    const columns = [...new Set(data.flatMap(Object.keys))];
  
    // Start building the HTML table
    let html = `<table data-user="manichaturvedi17@gmail.com">`;
    html += "<thead><tr>";
  
    // Create table header
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += "</tr></thead><tbody>";
  
    // Create table rows
    data.forEach(item => {
      html += "<tr>";
      columns.forEach(column => {
        html += `<td>${item[column] !== undefined ? item[column] : ""}</td>`;
      });
      html += "</tr>";
    });
  
    html += "</tbody></table>";
    return html;
  }
  