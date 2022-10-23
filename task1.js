const parser = new DOMParser();
const xmlString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

function studentParse(studentXml){
      return {
        name: studentXml.querySelector("name").querySelector("first").textContent + ' ' 
        + studentXml.querySelector("name").querySelector("second").textContent,
        age: Number(studentXml.querySelector("age").textContent),
        prof: studentXml.querySelector("prof").textContent,
        lang: studentXml.querySelector("name").getAttribute("lang"),
      }
}
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
console.log(
    {
        list: [
            studentParse(studentNode[0]),
            studentParse(studentNode[1])
        ]
      }
)