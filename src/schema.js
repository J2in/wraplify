module.exports = {
  Note: [
    { name: "id", mandatory: true, type: "ID" },
    { name: "name", mandatory: true, type: "String" },
    { name: "completed", mandatory: false, type: "Boolean" },
    { name: "date", mandatory: false, type: "AWSDate" },
    { name: "url", mandatory: false, type: "AWSURL" },
    { name: "age", mandatory: false, type: "Int" },
  ],
};
