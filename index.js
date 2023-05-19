// const ages = { alice: 18, bob: 27 };
// console.log(ages);

const inputToConvert = document.getElementById("input_field");
const paragraph = document.querySelector("p");
/*
Function converts JSON into CSV now
Sample JSON
{"name":"Jiong", "age":"19"}
*/
function OnConvertText() {
  // console.log(inputToConvert.value);
  let input = inputToConvert.value;
  // Check for proper start and close first
  if (!input.charAt(0) === "{" && !input.charAt(input.length - 1) === "}") {
    return;
  }

  // Check Case if has [ ] lists
  const pattern = /[\[\]]/g; // regexp for finding '[' or ']' characters
  // console.log(input.match(pattern));
  const hasCurlyBraces = input.match(pattern);
  // const hasCurlyBraces = input.match(pattern).length > 0;
  if (hasCurlyBraces === null) {
    let inputNoBrackets = input.replace("{", "").replace("}", "");
    console.log(typeof(inputNoBrackets));
    let objProps = inputNoBrackets.split(",");
    objProps = objProps.map(prop => prop.trim());
    let splitProps = objProps.map(prop => prop.replaceAll("\"","").split(":"));
    
    console.log(splitProps);
  } else if (hasCurlyBraces.length > 0) {

  }

  try {
    const input = inputToConvert.value; // convert into object
    //console.log(typeof(input));
  } catch (error) {}
}
